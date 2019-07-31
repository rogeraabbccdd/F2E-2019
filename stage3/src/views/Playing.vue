<template>
  <div id="playing">
    <b-container
      v-if="this.$store.state.song !== undefined"
      class="art position-relative"
      style="z-index:5"
    >
      <b-row>
        <b-col cols="12" class="text-center">
          <router-link to="/">
            <p class="text-aqua" id="btn-back" @click="back()">
              <img
                src="@/assets/img/left-arrow-angle-1.svg"
                class="cursor-pointer"
              />
            </p>
          </router-link>
          <p class="text-aqua mb-0" style="font-size:21px; pointer-events:none">
            {{ this.$store.state.music[this.$store.state.album].name }}
          </p>
          <p class="text-secondary" style="font-size:14px">
            {{ this.$store.state.music[this.$store.state.album].artist }}
          </p>
        </b-col>
        <b-col cols="12">
          <div
            class="text-center disc mx-auto rounded-circle"
            :style="{ backgroundImage: `url('${discbg}')` }"
          >
            <b-row class="h-100">
              <b-col cols="12" class="align-self-center text-center disc-art ">
                <img
                  :src="this.$store.state.music[this.$store.state.album].image"
                  alt=""
                  class="rounded-circle"
                />
              </b-col>
            </b-row>
          </div>
        </b-col>
        <b-col
          cols="12"
          class="text-center text-lightred my-3"
          style="font-size:24px"
        >
          {{
            this.$store.state.music[this.$store.state.album].songs[
              this.$store.state.song
            ].name
          }}
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="songs">
      <div class="round"></div>
      <b-container :class="{ playing: !isPausing() }">
        <b-row align-h="around" class="btn-play mx-auto align-items-center">
          <b-col cols="8">
            <b-row class="btn-play mx-auto align-items-center play-round">
              <b-col
                cols="12"
                class="w-100 text-center p-0"
                style="height:24px"
                v-if="isPausing()"
                @click="resumeSong"
              >
                <i class="material-icons play">play_arrow</i>
              </b-col>

              <b-col
                cols="12"
                class="w-100 text-center p-0"
                style="height:24px"
                v-else
                @click="pauseSong"
              >
                <i class="material-icons play">pause</i>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<style scoped>
.playing .play-round {
  border: 2px solid #5fe3ff !important;
  color: #5fe3ff;
  text-shadow: 0px 0px 10px #5fe3ff;
  filter: drop-shadow(0px 0px 6px #5fe3ff) !important;
}

.play-round {
  border: 2px solid #ff4582 !important;
  filter: drop-shadow(0px 0px 6px #ff4582) !important;
  color: #ff4582;
  text-shadow: 0px 0px 10px #ff4582;
  border-radius: 50%;
  height: 44px;
  width: 44px;
}

.songs {
  background: black;
  min-height: calc(100vh - 42px - 1rem - 220px - 71px - 1rem - 14px - 23px);
  position: relative;
  margin-top: 7rem;
  overflow-x: hidden;
}

.round {
  background: black;
  border-top: 3px solid #ff4582;
  border-radius: 50%;
  width: 120%;
  min-height: 300px;
  position: absolute;
  top: -70px;
  left: -10%;
}

#btn-back {
  position: absolute;
  left: 1em;
  top: 0;
}

.disc {
  height: 220px;
  width: 220px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 2px solid#6BDFE9;
  filter: drop-shadow(0px 0px 14px #6bdfe9);
}

.disc-art {
  width: 150px;
  height: 150px;
}

.disc-art img {
  width: 150px;
  height: 150px;
  border: 2px solid #ff4582;
  filter: drop-shadow(0px 0px 14px #ff4582);
}
</style>

<script>
import { eventBus } from "@/main.js";
export default {
  name: "playing",
  data() {
    let discbg = `./img/disc.png`;
    return {
      discbg
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    isPausing() {
      return this.$store.state.status == "pause";
    },
    pauseSong() {
      eventBus.$emit("pauseSong");
    },
    resumeSong() {
      eventBus.$emit("resumeSong");
    }
  }
};
</script>
