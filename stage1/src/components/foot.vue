<template>
  <b-container id="foot" class="fixed-bottom hide">
    <b-row align-v="center" class="h-100">
      <b-col cols="3" class="text-center">
        <b-btn size="lg" variant="white" @click="jump('home')">
          <font-awesome-icon icon="home" /><br />Home
        </b-btn>
      </b-col>
      <b-col cols="3" class="text-center">
        <b-btn size="lg" variant="white" @click="jump('list')">
          <font-awesome-icon :icon="['fas', 'list-ul']" />
          <br />
          List
        </b-btn>
      </b-col>
      <b-col cols="3" class="text-center">
        <b-btn size="lg" variant="white">
          <font-awesome-icon icon="music" /><br />Music
        </b-btn>
      </b-col>
      <b-col cols="3" class="text-center">
        <b-btn size="lg" variant="white">
          <font-awesome-icon :icon="['far', 'chart-bar']" /><br />Chrat
        </b-btn>
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
#foot {
  height: 10vh;
}

.btn-white,
.btn-white:hover {
  color: #fff !important;
  background-color: rgba(0, 0, 0, 0) !important;
  border: none;
}

.btn-white:focus {
  border: none;
  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0);
}

.btn-white:active {
  border: none;
}

.btn {
  padding: 0px !important;
}
</style>

<script>
import { eventBus } from "@/main.js";
export default {
  name: "foot",
  methods: {
    jump(path) {
      eventBus.$emit("page", path);
    }
  }
};
</script>
