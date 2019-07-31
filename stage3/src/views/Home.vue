<template>
  <div class="home">
    <b-container class="music-list">
      <b-row>
        <b-col
          cols="12"
          class="text-whitered text-center text-title font-weight-lighter"
        >
          Music List
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row
        v-for="(album, idx) in this.$store.state.music"
        :key="idx"
        class="album-row"
        align-v="center"
      >
        <b-col cols="4">
          <div class="album-out rounded-circle">
            <div class="album-in rounded-circle h-100 w-100">
              <b-img
                :src="album.image"
                alt=""
                class="rounded-circle obj-fit w-100 h-100"
              />
            </div>
          </div>
        </b-col>
        <b-col cols="6">
          <p class="text-aqua album-name mb-0">{{ album.name }}</p>
          <p class="text-lightred album-artist">{{ album.artist }}</p>
        </b-col>
        <b-col cols="2">
          <p
            class="text-center text-aqua cursor-pointer"
            @click="viewAlbum(idx)"
          >
            .&nbsp;.&nbsp;.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
.home {
  padding: 0px 1em 0px 1em;
}

.music-list {
  margin-bottom: 2em;
}
.text-title {
  font-size: 32px;
  font-family: "Helvetica";
}

.album-out {
  border: 2px solid #5fe3ff;
  padding: 2px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px #5fe3ff;
  height: 80px;
  width: 80px;
}

.album-in {
  border: 2px solid #ff4582;
  padding: 2px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px #ff4582;
}

.album-row {
  height: 90px;
  margin-bottom: 40px;
}

.album-name {
  font-size: 21px;
}

.album-artist {
  font-size: 14px;
}
</style>

<script>
export default {
  name: "home",
  methods: {
    viewAlbum(idx) {
      this.$router.push({
        name: "viewAlbum",
        params: { id: idx }
      });
    }
  }
};
</script>
