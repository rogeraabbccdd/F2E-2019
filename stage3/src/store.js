import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    music: [
      {
        name: "NCS",
        artist: "NCS",
        image: "./album/ncs.jpg",
        songs: [
          {
            name: "Kasger - Cover It Up",
            file: "./music/coveritup.mp3",
            link: "https://www.youtube.com/watch?v=7TFoiA8rNLc"
          },
          {
            name: "Anna Yvette - Red Line",
            file: "./music/redline.mp3",
            link: "https://www.youtube.com/watch?v=VrDD2GSNs_I"
          },
          {
            name: "Lost Sky - Dreams pt. II",
            file: "./music/dreams.mp3",
            link: "https://www.youtube.com/watch?v=L7kF4MXXCoA"
          }
        ]
      }
    ],
    album: -1,
    song: -1,
    status: "",
    length: "00:00",
    currentLength: "00:00"
  },
  mutations: {
    addMusic(state, data) {
      state.music.push(data);
    },
    statusChange(state, status) {
      state.status = status;
    },
    albumChange(state, album) {
      state.album = album;
    },
    songChange(state, song) {
      state.song = song;
    },
    length(state, duration) {
      state.length = duration;
    },
    currentLength(state, length) {
      state.currentLength = length;
    }
  },
  actions: {}
});
