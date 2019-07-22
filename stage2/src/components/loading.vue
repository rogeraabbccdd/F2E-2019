<template>
  <div id="loading">
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col cols="12" class="align-self-center text-center">
          <img
            src="@/assets/images/loading.svg"
            alt=""
            class=""
            width="200px"
            height="200px"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style scoped>
#loading {
  position: fixed;
  overflow: hidden;
  transition: opacity 0.5s;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}
</style>

<script>
export default {
  name: "loading"
};
</script>
