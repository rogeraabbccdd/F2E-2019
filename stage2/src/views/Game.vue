<template>
  <div class="game position-relative h-100 py-3">
    <b-container id="top">
      <b-row class="h-100 align-items-center">
        <b-col cols="5">
          <b-row class="h-100">
            <div class="card-game"></div>
            <div class="card-game"></div>
            <div class="card-game"></div>
            <div class="card-game"></div>
          </b-row>
        </b-col>
        <b-col cols="2" class="text-white text-center">
          TIME <br />
          <h3>{{ time_text }}</h3>
          <br />
          SCORE <br />
          <h3>0</h3>
        </b-col>
        <b-col cols="5">
          <b-row class="h-100">
            <div class="card-game" style="border: 1px solid #c92911"></div>
            <div class="card-game" style="border: 1px solid #ff2d11"></div>
            <div class="card-game" style="border: 1px solid #2298ee"></div>
            <div class="card-game" style="border: 1px solid #425595"></div>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="cards" class="mt-3">
      <b-row class="align-items-start" style="height:400px">
        <div class="card-column"></div>
        <div class="card-column"></div>
        <div class="card-column"></div>
        <div class="card-column"></div>
        <div class="card-column"></div>
        <div class="card-column"></div>
        <div class="card-column"></div>
        <div class="card-column"></div>
      </b-row>
    </b-container>
    <b-container class="fixed-bottom position-absolute" style="height:70px;">
      <b-row class="h-100 align-items-center">
        <b-col cols="2" class="">
          <img src="@/assets/images/btn_hint.svg" alt="" class="btn-game" />
        </b-col>
        <b-col cols="2" class="">
          <img src="@/assets/images/btn_undo.svg" alt="" class="btn-game" />
        </b-col>
        <b-col cols="2" class="ml-auto">
          <img src="@/assets/images/btn_new.svg" alt="" class="btn-game" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.card-game {
  border-radius: 5px;
  border: 2px solid #0a3f59;
  background: transparent;
  height: 151px;
  width: 101px;
  width: 23%;
  margin: 0px 1%;
}

.card-column {
  width: 12.5%;
  padding: 0px 5px;
  -webkit-box-flex: 0;
  flex: 0 0 12.5%;
  position: relative;
}

.card-column img:not(:nth-child(1)) {
  margin-top: -120px;
}
</style>

<script>
import { eventBus } from "@/main.js";
let intervalTimer;
export default {
  name: "game",
  data() {
    let time = 0;
    let time_text = "00:00";
    return {
      time,
      time_text
    };
  },
  methods: {
    start() {
      this.reset();

      // random cards
      let cards = [];
      let colors = ["f", "g", "t", "y"];
      for (let i = 0; i < 36; i++) {
        let rand = Math.ceil(Math.random() * 13);
        let color = colors[Math.floor(Math.random() * colors.length)];
        let card = color + "-" + this.paddingLeft(rand);
        if (cards.includes(card)) {
          i--;
        } else {
          cards.push(card);
        }
      }

      let col = this.$el.querySelectorAll(".card-column");
      let count = 0;
      for (let i = 0; i < col.length; i++) {
        for (let j = 0; j < i + 1; j++) {
          let img = document.createElement("img");
          img.setAttribute("src", `./img/cards/${cards[count]}.svg`);
          col[i].appendChild(img);
          // col[i].insertAdjacentHTML(
          //   "beforeend",
          //   `<img src="./img/cards/${cards[count]}.svg"><br>`
          // );
          count++;
        }
      }

      intervalTimer = setInterval(() => {
        this.time++;
        let min = Math.floor((this.time % 3600) / 60);
        let sec = this.time % 60;
        this.time_text = `${this.paddingLeft(min)}:${this.paddingLeft(sec)}`;
      }, 1000);
    },
    reset() {
      this.min = "00";
      this.sec = "00";
      clearInterval(intervalTimer);
    },
    paddingLeft(num) {
      return num < 10 ? `0${num}` : num;
    }
  },
  mounted() {
    eventBus.$on("enter-game", () => {
      setTimeout(() => {
        this.start();
      }, 500);
    });
  },
  created() {}
};
</script>
