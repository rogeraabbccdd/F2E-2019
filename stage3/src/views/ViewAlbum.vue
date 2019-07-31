<template>
  <div class="viewalbum">
    <b-container
      v-if="this.$route.params.id !== undefined"
      class="art position-relative"
      style="z-index:5"
    >
      <b-row>
        <b-col cols="12" class="text-center">
          <router-link to="/">
            <p class="text-aqua" id="btn-back">
              <img
                src="@/assets/img/left-arrow-angle-1.svg"
                class="cursor-pointer"
              />
            </p>
          </router-link>
          <p class="text-aqua mb-0" style="font-size:21px; pointer-events:none">
            {{ this.$store.state.music[this.$route.params.id].name }}
          </p>
          <p class="text-secondary" style="font-size:14px">
            {{ this.$store.state.music[this.$route.params.id].artist }}
          </p>
        </b-col>
        <br />
        <b-col cols="12">
          <div
            class="text-center disc mx-auto rounded-circle"
            :style="{ backgroundImage: `url('${discbg}')` }"
          >
            <b-row class="h-100">
              <b-col cols="12" class="align-self-center text-center disc-art ">
                <img
                  :src="this.$store.state.music[this.$route.params.id].image"
                  alt=""
                  class="rounded-circle"
                />
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="songs">
      <div class="round"></div>
      <b-container class="my-4">
        <b-row align-h="around" :class="{ playing: isPlayingAlbum() }">
          <b-col cols="2" class="align-self-center">
            <i class="material-icons shuffle">shuffle</i>
          </b-col>
          <b-col cols="2" class="align-self-center text-lightred">
            <i class="material-icons prev">skip_previous</i>
          </b-col>
          <b-col cols="2" class="p-0">
            <b-row class="btn-play mx-auto align-items-center play-round">
              <b-col
                cols="12"
                class="w-100 text-center p-0"
                style="height:24px"
                v-if="isPlayingAlbum()"
                @click="pauseSong()"
              >
                <i class="material-icons play">pause</i>
              </b-col>
              <b-col
                cols="12"
                class="w-100 text-center p-0"
                style="height:24px"
                v-else-if="
                  isPlayingAlbum() && this.$store.state.status == 'pause'
                "
                @click="resumeSong()"
              >
                <i class="material-icons play">play_arrow</i>
              </b-col>
              <b-col
                cols="12"
                class="w-100 text-center p-0"
                style="height:24px"
                v-else
                @click="playSong(0)"
              >
                <i class="material-icons play">play_arrow</i>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="2" class="align-self-center text-lightred">
            <i class="material-icons skip">skip_next</i>
          </b-col>
          <b-col cols="2" class="align-self-center">
            <i class="material-icons repeat">repeat</i>
          </b-col>
        </b-row>
        <b-row class="my-3">
          <b-col cols="12">
            <b-table
              :items="this.$store.state.music[this.$route.params.id].songs"
              :fields="fields"
              table-class="table-album"
              thead-class="d-none"
              borderless
            >
              <template slot="btn" slot-scope="row" class="text-left">
                <i
                  class="material-icons"
                  v-if="isSongPlaying(row.index)"
                  @click="pauseSong()"
                >
                  pause
                </i>
                <i
                  class="material-icons"
                  v-else-if="isSongPausing(row.index)"
                  @click="resumeSong(row.index)"
                >
                  play_arrow
                </i>
                <i class="material-icons" v-else @click="playSong(row.index)">
                  play_arrow
                </i>
              </template>
              <template slot="link" slot-scope="data" class="text-right">
                <p
                  class="text-center text-aqua mb-0 cursor-pointer"
                  @click="openWindow(data.value)"
                >
                  .&nbsp;.&nbsp;.
                </p>
              </template>
            </b-table>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <div class="black-bg"></div>
  </div>
</template>

<style>
.black-bg {
  background: black;
  position: fixed;
  height: 50vh;
  bottom: 0;
  width: 100vw;
  z-index: -1;
}

.table-album {
  background: transparent;
  color: #5fe3ff;
  text-shadow: 0px 0px 6px #5fe3ff;
  filter: drop-shadow(0px 0px 6px #5fe3ff);
  font-family: "Segoe UI" !important;
  border: none !important;
}

.table-album tr {
  border-top: 2px dotted #5fe3ff !important;
}

.table-album tr:last-child {
  border-bottom: 2px dotted #5fe3ff !important;
}
</style>

<style scoped>
.btn-play {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}

.playing .play-round {
  border: 2px solid #5fe3ff !important;
}

.play-round {
  border: 2px solid #ff4582 !important;
}

.shuffle,
.repeat,
.play {
  color: #ff4582;
  text-shadow: 0px 0px 10px #ff4582;
  filter: drop-shadow(0px 0px 6px #ff4582);
}

.playing .play {
  color: #5fe3ff !important;
  text-shadow: 0px 0px 6px #5fe3ff;
  filter: drop-shadow(0px 0px 6px #5fe3ff);
}

.songs {
  background: black;
  min-height: calc(100vh - 42px - 1rem - 220px - 71px - 1rem - 14px - 23px);
  position: relative;
}

.round {
  background: black;
  border-top: 3px solid #ff4582;
  border-radius: 50%;
  width: 150%;
  min-height: 300px;
  position: absolute;
  top: -100px;
  left: -25%;
}

.art {
  padding: 0px 1em 0px 1em;
}

.viewalbum {
  overflow-x: hidden;
  height: 100%;
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
  name: "viewalbum",
  data() {
    let discbg = `./img/disc.png`;
    let fields = ["btn", "name", "link"];
    return {
      discbg,
      fields
    };
  },
  methods: {
    back() {
      this.$route.push("home");
    },
    isPlayingAlbum() {
      return (
        this.$store.state.album == this.$route.params.id &&
        this.$store.state.status == "playing"
      );
    },
    isSongPlaying(index) {
      return (
        this.$store.state.album == this.$route.params.id &&
        this.$store.state.song == index &&
        this.$store.state.status == "playing"
      );
    },
    isSongPausing(index) {
      return (
        this.$store.state.album == this.$route.params.id &&
        this.$store.state.song == index &&
        this.$store.state.status == "pause"
      );
    },
    openWindow(link) {
      window.open(link);
    },
    playSong(song) {
      eventBus.$emit("playSong", this.$route.params.id, song);
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
