<template>
  <div id="home">
    <b-container class="">
      <b-row>
        <b-col cols="12">
          <br />
          <h1 class="text-white text-center">Pomodoro</h1>
          <br />
        </b-col>
      </b-row>
    </b-container>
    <b-container id="clock">
      <b-row class="justify-content-center h-100">
        <b-col cols="12" class="align-self-center text-white text-center">
          <radial-progress-bar
            class="light"
            :diameter="circlesize"
            :completed-steps="currentSteps"
            :total-steps="totalSteps"
            startColor="#fff"
            stopColor="#fff"
            innerStrokeColor="#fff0"
          >
            <h2>
              <font-awesome-icon
                icon="play"
                @click="start(false)"
                v-if="counting == 0"
                style="cursor:pointer;"
              />
              <img
                src="@/assets/img/hourglass.svg"
                v-else-if="counting == 1"
                style="height:1.25em;"
              />
              <img src="@/assets/img/cup.svg" v-else style="height:1.25em;" />
            </h2>
            <h2 id="time">
              {{ timeLeft }}
            </h2>
            <h4 v-if="mission.length == 0">NO MISSION</h4>
            <h4 v-else>{{ mission }}</h4>
          </radial-progress-bar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#clock {
  height: calc(90vh - 104px);
  overflow: hidden;
}

#time {
  font-family: "Orbitron";
}

.radial-progress-container {
  margin: 0 auto;
}

@media (max-width: 576px) {
  h2 {
    font-size: 2.5rem !important;
  }
}

@media (min-width: 576px) {
  h2 {
    font-size: 5rem !important;
  }
}

@media (min-width: 768px) {
  h2 {
    font-size: 8rem !important;
  }
}

@media (min-width: 992px) {
  h2 {
    font-size: 8rem !important;
  }
}

@media (min-width: 1200px) {
  h2 {
    font-size: 8rem !important;
  }
}
</style>

<script>
import { eventBus } from "@/main.js";
import RadialProgressBar from "vue-radial-progress";
import { setTimeout } from "timers";
let intervalTimer;
function zeroPadded(num) {
  return num < 10 ? `0${num}` : num;
}

export default {
  name: "home",
  data() {
    let totalSteps = 1;
    let currentSteps = 1;
    let window = { height: 0, width: 0 };
    let circlesize = 0;
    let timeLeft = "00:00";
    let mission = "";
    let hasmission = false;
    // 0 = not, 1 = normal, 2 = take a break
    let counting = 0;
    return {
      totalSteps,
      currentSteps,
      window,
      circlesize,
      timeLeft,
      mission,
      counting,
      hasmission
    };
  },
  components: {
    RadialProgressBar
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if (this.window.width > this.window.height)
        this.circlesize = this.window.height * 0.7;
      else this.circlesize = this.window.width * 0.7;
    },
    start(isrest) {
      if (this.mission.length > 0) {
        clearInterval(intervalTimer);
        const now = Date.now();
        let end;
        if (isrest) {
          this.totalSteps = 300000;
          this.currentSteps = 300000;
          end = now + 300 * 1000;
        } else {
          this.totalSteps = 1500000;
          this.currentSteps = 1500000;
          end = now + 1500 * 1000;
        }
        this.countDown(end);
        if (isrest) this.counting = 2;
        else this.counting = 1;
        eventBus.$emit("start");
      }
    },
    countDown(end) {
      intervalTimer = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);
        this.currentSteps -= 1000;
        this.displayTimeLeft(secondsLeft);
        if (secondsLeft === 0) {
          if (this.counting == 1) eventBus.$emit("end", false);
          else if (this.counting == 2) eventBus.$emit("end", true);
          this.counting = 0;
          let audio = new Audio("./sound/clock.mp3");
          audio.play();
          console.log("play");
          this.resetTimer(false);
        }
      }, 1000);
    },
    displayTimeLeft(secondsLeft) {
      const minutes = Math.floor((secondsLeft % 3600) / 60);
      const seconds = secondsLeft % 60;
      this.timeLeft = `${zeroPadded(minutes)}:${zeroPadded(seconds)}`;
      eventBus.$emit("countdown", this.timeLeft);
    },
    resetTimer(none) {
      clearInterval(intervalTimer);
      this.timeLeft = "00:00";
      this.mission = "";
      this.currentSteps = 1;
      this.totalSteps = 1;
      if (none) this.counting = 0;
    }
  },
  mounted() {
    eventBus.$on("addtotimer", (message, isrest) => {
      if (!isrest) {
        this.mission = message;
        this.timeLeft = "25:00";
        setTimeout(() => {
          if (this.hasmission) this.start(false);
          this.hasmission = true;
        }, 250);
      } else {
        this.mission = "TAKE A BREAK";
        this.timeLeft = "05:00";
        setTimeout(() => {
          this.start(true);
        }, 250);
      }
    });

    eventBus.$on("none", () => {
      this.hasmission = false;
      this.resetTimer(true);
    });
  }
};
</script>
