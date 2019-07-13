<template>
  <div id="loading">
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col cols="12" class="align-self-center text-center">
          <img
            src="@/assets/img/loading.svg"
            alt=""
            class="light"
            width="300px"
            height="300px"
          />
          <h3 class="text-center text-white ld ld-fade">LOADING...</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#loading {
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: hidden;
  transition: opacity 0.5s;
}
</style>

<script>
export default {
  name: "loading"
};
</script>
