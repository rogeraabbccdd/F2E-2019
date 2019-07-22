<template>
  <div class="title position-relative">
    <img src="@/assets/images/title.jpg" alt="" class="" />
    <img
      src="@/assets/images/title-cards.png"
      alt=""
      id="card-over"
      class="light"
    />
    <img
      src="@/assets/images/btn_new.svg"
      alt=""
      class="btn-game"
      id="title-start"
      @click="start()"
    />
  </div>
</template>

<script>
import { eventBus } from "@/main.js";

export default {
  name: "home",
  methods: {
    start() {
      eventBus.$emit("enter-game");
    }
  }
};
</script>

<style scoped>
#card-over {
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
}

#title-start {
  position: absolute;
  z-index: 100;
  bottom: 40px;
  left: 506px;
  cursor: pointer;
}
</style>
