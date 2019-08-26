<template>
  <div class="home">
    <b-container fluid style="background: #171717;">
      <b-container id="nav">
        <b-row class="h-100">
          <b-col cols="6" align-self="center" class="text-left pl-3">
            <img src="@/assets/Group 465.svg" alt="" />
          </b-col>
          <b-col cols="6" align-self="center" class="text-right pr-3">
            <img src="@/assets/zoom-2.svg" alt="" />
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container fluid class="px-0" id="content">
      <b-row class="h-100 mx-0">
        <b-col
          cols="4"
          style="background: #272727;"
          id="users"
          class="h-100 px-0"
        >
          <b-container
            class="border-bottom py-3"
            style="border-bottom-color: #707070 !important"
          >
            <b-row class="py-3" align-h="center">
              <b-col cols="6" id="room">Aurora Hunters</b-col>
              <b-col cols="4" class="text-right">
                <img src="@/assets/iconmonstr-log-out-11.svg" alt="" />
              </b-col>
            </b-row>
            <b-row class="py-2" align-h="center">
              <b-col cols="2" align-self="center">
                <b-img rounded="circle" src="@/assets/Avatar5.svg"></b-img>
              </b-col>
              <b-col cols="6" class="name" align-self="center">Meyer</b-col>
              <b-col cols="2" align-self="center">
                <div class="rounded-circle status online mx-auto"></div>
              </b-col>
            </b-row>
          </b-container>
          <b-container class="py-3">
            <b-row
              class="py-3"
              align-h="center"
              v-for="(user, index) in users.slice(0, 5)"
              :key="index"
            >
              <b-col cols="2" align-self="center">
                <b-img
                  rounded="circle"
                  :src="require(`../assets/Avatar${user.avatar}.svg`)"
                ></b-img>
              </b-col>
              <b-col cols="6" class="name" align-self="center">
                {{ user.name }}
              </b-col>
              <b-col cols="2" align-self="center">
                <div
                  class="rounded-circle status online mx-auto"
                  v-if="user.status == 'online'"
                ></div>
                <div
                  class="rounded-circle status busy mx-auto"
                  v-if="user.status == 'busy'"
                ></div>
                <div
                  class="rounded-circle status idle mx-auto"
                  v-if="user.status == 'idle'"
                ></div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
        <b-col cols="8" id="chat" class="h-100 px-0">
          <b-container
            style="background: #1D1D1D; height: 590px; overflow-y: auto;"
            class="p-0"
          >
            <discord-messages class="h-100">
              <discord-message
                v-for="(m, index) in messages"
                :key="index"
                :author="users[m.user].name"
                :avatar="require(`../assets/Avatar${users[m.user].avatar}.svg`)"
              >
                <p>{{ m.text }}</p>
                <b-img
                  v-if="m.image != undefined"
                  :src="require(`../assets/${m.image}`)"
                  class="mt-2"
                ></b-img>
              </discord-message>
            </discord-messages>
          </b-container>
          <b-container
            style="height: 70px; background: #403F3F"
            fluid
            class="px-0"
          >
            <b-container class="h-100">
              <b-row class="h-100">
                <b-col cols="12" align-self="center">
                  <b-form-input
                    placeholder="Say Hi :)"
                    class="input"
                  ></b-form-input>
                </b-col>
              </b-row>
            </b-container>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#nav {
  height: 60px;
}
#users {
  color: #dbdbdb;
}
#room {
  font: Bold 24px/32px Roboto Slab;
  letter-spacing: 0;
}
#content {
  height: 660px;
}

.status {
  width: 15px;
  height: 15px;
}
.status.online {
  background: #98d693;
}
.status.busy {
  background: #d69393;
}
.status.idle {
  background: #d6c493;
}

#users .name {
  font: 18px/24px Roboto Slab;
  letter-spacing: 0;
}

.input {
  background: transparent;
  border: none !important;
  color: white;
}
.input:focus {
  border: none;
  box-shadow: none;
}
</style>

<style>
.discord-messages {
  background: none !important;
}
::-webkit-scrollbar {
  width: 8px;
  height: 9px;
  z-index: 5;
}
::-webkit-scrollbar-track {
  background: #cccccc;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: gray;
}
</style>

<script>
export default {
  name: "home",
  data() {
    let users = [
      {
        name: "Jack",
        avatar: 1,
        status: "online"
      },
      {
        name: "Chef",
        avatar: 2,
        status: "busy"
      },
      {
        name: "Foodie",
        avatar: 3,
        status: "online"
      },
      {
        name: "Simmons",
        avatar: 4,
        status: "idle"
      },
      {
        name: "Linda",
        avatar: 5,
        status: "online"
      },
      {
        name: "Barnett",
        avatar: 2,
        status: "online"
      },
      {
        name: "Hulk",
        avatar: 3,
        status: "online"
      }
    ];
    let messages = [
      {
        user: 0,
        text:
          "Abby , Is it back to having a nightfall in Iceland already? I thought it was still in that 24 day light range? How cool!"
      },
      {
        user: 5,
        text:
          "I’ve got aurora! Just about visible to the eye. Mobile phone shot of the back of my camera.",
        image: "aurora-1185464_1280.png"
      },
      {
        user: 3,
        text: "Breathtaking \ud83d\ude03"
      },
      {
        user: 4,
        text:
          "\ud83d\ude0d\ud83d\ude0d\ud83d\ude0d\ud83d\ude0d\ud83d\ude0d \n Amazing!"
      },
      {
        user: 1,
        text: "Could you please tell me where was this picture taken?"
      },
      {
        user: 6,
        text: "Hey everyone"
      }
    ];
    return {
      users,
      messages
    };
  }
};
</script>
