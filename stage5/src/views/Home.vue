<template>
  <div class="home">
    <b-container class="position-relative">
      <b-row>
        <b-col cols="4">
          <img src="img/生命.svg" width="45px" />&nbsp;
          <img src="img/生命.svg" width="45px" />&nbsp;
          <img src="img/生命.svg" width="45px" />&nbsp;
        </b-col>
        <b-col cols="4" class="text-center align-self-center" id="time">
          <h1>TIME: 90 s</h1>
        </b-col>
        <b-col cols="4" class="text-right">
          <img src="img/金幣數.svg" width="45px" />&nbsp;
          <h1 class="coins">x 0</h1>
        </b-col>
      </b-row>
      <div id="logo">
        <img src="img/高雄發大財.png" />
      </div>
      <div id="han">
        <img src="img/韓導1.svg" />
      </div>
    </b-container>
  </div>
</template>

<style>
.coins {
  display: unset;
  vertical-align: bottom;
}

#logo {
  position: absolute;
  right: 50px;
  top: 100px;
  height: 424px;
  width: 540px;
  overflow: hidden;
}

#han {
  position: absolute;
  left: 50px;
  top: 300px;
  height: 424px;
  width: 540px;
  overflow: hidden;
}
</style>

<script>
export default {
  name: "home",
  components: {}
};
</script>
