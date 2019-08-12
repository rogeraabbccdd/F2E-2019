<template>
  <div id="app" class="p-3">
    <div class="bg-out">
      <div
        class="bg-in"
        :style="{ backgroundImage: 'url(./img/背景＿又老又窮.jpg)' }"
      ></div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  height: 720px;
  width: 1280px;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
}
.bg-out {
  height: 720px;
  width: 1280px;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
}

.bg-in {
  height: 720px;
  width: 1920px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
}
</style>
