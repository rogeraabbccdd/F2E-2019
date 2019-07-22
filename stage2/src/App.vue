<template>
  <div id="app">
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col class="align-self-center" id="page">
          <loading></loading>
          <TitleScreen class="view hide" id="titlescreen"></TitleScreen>
          <Game class="view hide" id="game"></Game>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
body {
  background: black;
}
.light {
  animation: light 5s linear alternate infinite;
}

@keyframes light {
  from {
    filter: drop-shadow(0px 0px 8px #fff);
  }

  33% {
    filter: drop-shadow(0px 0px 20px #fff);
  }

  66% {
    filter: drop-shadow(0px 0px 8px #fff);
  }

  to {
    filter: drop-shadow(0px 0px 20px #fff);
  }
}

.btn-game:hover {
  filter: drop-shadow(0px 0px 1px #1ae09e);
}

.btn-game {
  cursor: pointer;
}
</style>

<style scoped>
#app {
  font-family: "Roboto";
  background: balck;
  height: 100vh;
  width: 100vw;
}

#page {
  width: 1200px;
  height: 628px;
  background-image: radial-gradient(#03134f, #02091d);
}

.view {
  opacity: 1;
  transition: opacity 0.5s;
}

.hide {
  opacity: 0 !important;
  pointer-events: none;
  display: none;
}
</style>

<script>
import { eventBus } from "@/main.js";
import loading from "@/components/loading.vue";
import Game from "@/views/Game.vue";
import TitleScreen from "@/views/TitleScreen.vue";

export default {
  components: {
    loading,
    Game,
    TitleScreen
  },
  data() {
    let currentPage = "title";
    return {
      currentPage
    };
  },
  methods: {
    paddingLeft(num) {
      return num < 10 ? `0${num}` : num;
    }
  },
  mounted() {
    eventBus.$on("enter-game", () => {
      this.currentPage = "game";
      let views = this.$el.querySelectorAll(".view");
      for (let i = 0; i < views.length; i++) {
        views[i].classList.add("hide");
      }
      let page = this.$el.querySelectorAll(`#game`);
      setTimeout(() => {
        for (let i = 0; i < views.length; i++) {
          views[i].style.height = 0;
        }
        page[0].classList.remove("hide");
        page[0].style.display = "block";
      }, 500);
    });
  },
  created() {
    window.onload = () => {
      for (let i = 1; i <= 13; i++) {
        let num = i;
        if (num < 10) num = this.paddingLeft(i);
        let imgf = new Image();
        let imgg = new Image();
        let imgt = new Image();
        let imgy = new Image();

        imgf.src = `./img/cards/f-${num}.svg`;
        imgg.src = `./img/cards/g-${num}.svg`;
        imgt.src = `./img/cards/t-${num}.svg`;
        imgy.src = `./img/cards/y-${num}.svg`;
      }
      setTimeout(() => {
        let ld = this.$el.querySelectorAll("#loading");
        ld[0].classList.add("hide");
        setTimeout(() => {
          ld[0].style.display = "none";
        }, 500);
        let views = this.$el.querySelectorAll(".view");
        for (let i = 0; i < views.length; i++) {
          if (views[i].id == "titlescreen") {
            views[i].classList.remove("hide");
            views[i].style.opacity = 1;
            views[i].style.display = "block";
          }
        }
      }, 2000);
    };
  }
};
</script>
