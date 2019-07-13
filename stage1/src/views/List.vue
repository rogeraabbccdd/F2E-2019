<template>
  <div id="list">
    <b-container class="">
      <b-row>
        <b-col cols="12">
          <br />
          <h1 class="text-white text-center">List</h1>
          <br />
        </b-col>
      </b-row>
    </b-container>
    <b-container id="clock">
      <b-row class="">
        <b-col cols="12" class="text-white my-3">
          <b-form-input
            id="input"
            v-model="newtodo"
            type="email"
            required
            placeholder="Add A New Mission..."
            @keydown.enter="add"
          ></b-form-input>
          <b-btn variant="add">
            <font-awesome-icon icon="plus" id="add" @click="add"
          /></b-btn>
        </b-col>
        <b-col cols="12" class="text-white my-3">
          <h4><font-awesome-icon icon="stopwatch" />&emsp;Current</h4>
          <hr class="hr-white" />
          <b-table
            striped
            :items="current"
            :fields="fields_current"
            thead-class="d-none"
            class="table-list"
          >
            <template slot="timeLeft" class="text-right">
              <div class="text-right">
                {{ timeLeft }}
              </div>
            </template>
          </b-table>
        </b-col>
        <b-col cols="12" class="text-white my-3">
          <h4>
            <font-awesome-icon :icon="['fas', 'list-ul']" />&emsp;Unfinished
          </h4>
          <hr class="hr-white" />
          <b-table
            striped
            :items="todos"
            :fields="fields"
            thead-class="d-none"
            class="table-list"
          >
            <template slot="buttons" slot-scope="row" class="text-right">
              <div class="h-100 w-100 text-right">
                <b-btn size="sm" variant="del" @click="del(row.item.id)">
                  <font-awesome-icon icon="times" />
                </b-btn>
              </div>
            </template>
          </b-table>
        </b-col>
        <b-col cols="12" class="text-white my-3">
          <h4><font-awesome-icon icon="check" />&emsp;Finished</h4>
          <hr class="hr-white" />
          <b-table
            striped
            :items="finished"
            :fields="fields"
            thead-class="d-none"
            class="table-list"
          >
            <template slot="buttons" slot-scope="row" class="text-right">
              <div class="h-100 w-100 text-right">
                <b-btn size="sm" variant="del" @click="delfin(row.item.id)">
                  <font-awesome-icon icon="times" />
                </b-btn>
              </div>
            </template>
          </b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.btn-del,
.btn-del:hover {
  color: #fc4153 !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: none;
}

.btn-del:focus {
  border: none;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0);
}

.btn-del:active {
  border: none;
}

.btn-add,
.btn-add:hover {
  color: #28a745 !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: none;
}

.btn-add:focus {
  border: none;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0);
}

.btn-add:active {
  border: none;
}

.btn {
  padding: 0px !important;
}

.table-list {
  color: #fff;
}

#input {
  border-radius: 50px;
}

#add {
  position: absolute;
  right: 30px;
  top: 12px;
}

.hr-white {
  width: 100%;
  background: white;
  margin-bottom: 0px !important;
  margin-block-end: 0px !important;
}

#list {
  height: 85vh !important;
  overflow-y: auto;
}
</style>

<style>
.table-striped tbody tr:nth-of-type(odd) {
  background: rgba(255, 255, 255, 0.1) !important;
}

.table-striped tbody tr:nth-of-type(even) {
  background: rgba(255, 255, 255, 0) !important;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #aaa;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #aaa;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #aaa;
}
</style>

<script>
import { eventBus } from "@/main.js";
import { setTimeout } from "timers";
export default {
  name: "list",
  data() {
    let todos = [];
    let finished = [];
    let newtodo = "";
    let todoid = 0;
    let fields = ["name", "buttons"];
    let fields_current = ["name", "timeLeft"];
    let iscounting = false;
    let timeLeft = "25:00";
    let current = [];
    return {
      todos,
      newtodo,
      todoid,
      fields,
      fields_current,
      current,
      iscounting,
      finished,
      timeLeft
    };
  },
  methods: {
    add() {
      if (this.newtodo) {
        this.todos.push({ id: this.todoid, name: this.newtodo });
        this.todoid++;
        this.newtodo = "";
      }
      if (this.current.length == 0) {
        this.addtotimer();
      }
    },
    del(id) {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id == id) {
          this.todos.splice(i, 1);
          break;
        }
      }
    },
    delfin(id) {
      for (let i = 0; i < this.finished.length; i++) {
        if (this.finished[i].id == id) {
          this.finished.splice(i, 1);
          break;
        }
      }
    },
    addtotimer(isrest) {
      // add rest or not
      if (isrest) {
        let name = "TAKE A BREAK";
        this.current = [{ id: -1, name }];
        eventBus.$emit("addtotimer", name, isrest);
        this.timeLeft = "05:00";
      } else {
        let name = this.todos[0].name;
        this.current.push({ id: 0, name });
        this.todos.splice(0, 1);
        eventBus.$emit("addtotimer", name, isrest);
        this.timeLeft = "25:00";
      }
    }
  },
  mounted() {
    eventBus.$on("countdown", time => {
      this.timeLeft = time;
    });

    // eventBus.$on("start", time => {
    //   this.timeLeft = time;
    // });

    eventBus.$on("end", isrest => {
      setTimeout(() => {
        if (this.current[0].id != -1) {
          this.finished.push({
            id: this.current[0].id,
            name: this.current[0].name
          });
        }
        this.current = [];
        // finish break, go next
        if (isrest) {
          if (this.todos.length == 0) eventBus.$emit("none");
          else this.addtotimer(false);
        } else {
          if (this.todos.length > 0) this.addtotimer(true);
        }
      }, 250);
    });
  }
};
</script>
