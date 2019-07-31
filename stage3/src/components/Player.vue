<template>
  <div
    id="player"
    class="fixed-bottom"
    v-if="this.$store.state.status != ''"
    :class="{ playing: !isPausing() }"
  >
    <b-container class="h-100" id="player-container">
      <b-row class="h-100" align-v="center">
        <b-col cols="10" class="song">
          {{
            this.$store.state.music[this.$store.state.album].songs[
              this.$store.state.song
            ].name
          }}
        </b-col>
        <b-col cols="2">
          <b-row class="btn-play mx-auto align-items-center play-round">
            <b-col
              cols="12"
              class="w-100 text-center p-0"
              v-if="isPausing()"
              @click="resume"
            >
              <i class="material-icons play">play_arrow</i>
            </b-col>
            <b-col
              cols="12"
              class="w-100 text-center p-0"
              v-else
              @click="pause"
            >
              <i class="material-icons play">pause</i>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style></style>

<style scoped>
#player {
  bottom: 71px;
  height: 50px;
}

#player-container {
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
}

#player.playing .song {
  color: #5fe3ff;
  text-shadow: 0px 0px 6px #5fe3ff;
  filter: drop-shadow(0px 0px 6px #5fe3ff);
}

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
  height: 27px;
  width: 27px;
}

.play-round i {
  font-size: 12px;
}

#player .song {
  color: #ff4582;
  text-shadow: 0px 0px 10px #ff4582;
  filter: drop-shadow(0px 0px 6px #ff4582);
}
</style>

<script>
import { eventBus } from "@/main.js";

var audio = new Audio();

export default {
  name: "player",
  methods: {
    isPausing() {
      return this.$store.state.status == "pause";
    },
    resume() {
      this.$store.commit("statusChange", "playing");
      audio.play();
    },
    pause() {
      this.$store.commit("statusChange", "pause");
      audio.pause();
    },
    playinfo() {
      this.$router.push({
        name: "playing"
      });
    },
    play(album, song) {
      this.$store.commit("statusChange", "playing");
      this.$store.commit("albumChange", album);
      this.$store.commit("songChange", song);
      audio.src = this.$store.state.music[album].songs[song].file;
      this.$store.commit("length", audio.duration);
      audio.play();
    }
  },
  mounted() {
    eventBus.$on("playSong", (album, song) => {
      this.play(album, song);
    });

    eventBus.$on("pauseSong", () => {
      this.pause();
    });

    eventBus.$on("resumeSong", () => {
      this.resume();
    });
  },
  created() {
    audio.onended = () => {
      this.$store.commit("statusChange", "");
      // this.$store.commit("albumChange", -1);
      // this.$store.commit("songChange", -1);
    };

    audio.ontimeupdate = () => {
      this.$store.commit("currentLength", audio.currentTime);
    };
  }
};
</script>
