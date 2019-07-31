<template>
  <div id="app">
    <div
      id="bg"
      :style="{ backgroundImage: `url('${bg}')`, filter: `${filter}` }"
    ></div>
    <div id="head">
      <headbar></headbar>
    </div>
    <div id="content" class="mt-3">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div id="player" v-if="this.$route.path != '/playing'">
      <player></player>
    </div>
    <div id="footer">
      <footernav></footernav>
    </div>
  </div>
</template>

<style>
#bg {
  background-size: cover;
  background-attachment: fixed;
  background-position: top;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
}

#content {
  min-height: calc(100vh - 43px - 71px - 2rem);
}

.text-aqua {
  color: #5fe3ff;
  text-shadow: 0px 0px 6px #5fe3ff;
  filter: drop-shadow(0px 0px 6px #5fe3ff);
  font-family: "Segoe UI" !important;
}

.text-whitered {
  color: #fff;
  text-shadow: 0px 0px 10px #ff4582;
  filter: drop-shadow(0px 0px 6px #ff4582);
  font-family: Helvetica !important;
}

.text-lightred {
  color: #ff4582;
  text-shadow: 0px 0px 10px #ff4582;
  filter: drop-shadow(0px 0px 6px #ff4582);
  font-family: "Segoe UI" !important;
}

.obj-fit {
  object-fit: cover;
  object-position: center;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
}

.cursor-pointer {
  cursor: pointer;
}
</style>

<script>
import headbar from "@/components/Headbar.vue";
import footernav from "@/components/Footer.vue";
import player from "@/components/Player.vue";

export default {
  components: {
    headbar,
    footernav,
    player
  },
  computed: {
    bg() {
      let bg = `./img/BlackCover.svg`;
      if (this.$route.path == "/viewAlbum") bg = `./img/BlackCover2.svg`;
      else if (this.$route.path == "/playing")
        bg = this.$store.state.music[this.$store.state.album].image;
      return bg;
    },
    filter() {
      let filter = "";
      if (this.$route.path == "/playing") filter = `blur(5px)`;
      return filter;
    }
  }
};
</script>
