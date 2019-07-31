<template>
  <b-container fluid class="fixed-bottom" id="footer">
    <b-row class="h-100">
      <b-col cols="4">
        <img src="@/assets/img/Search.svg" alt="" id="search" />
      </b-col>
      <b-col cols="4 h-100 text-center">
        <img src="@/assets/img/002-music.svg" alt="" id="music" />
        <div id="border"></div>
      </b-col>
      <b-col cols="4">
        <img src="@/assets/img/Settings.svg" alt="" id="settings" />
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
#footer {
  background: black;
  height: 71px;
}

#music {
  margin-top: 12px;
}

#border {
  height: 4px;
  background: #ffffff;
  opacity: 0.2;
  position: absolute;
  left: -5%;
  top: 58px;
  width: 110%;
}

#search {
  position: absolute;
  top: 17px;
  left: 27px;
}

#settings {
  position: absolute;
  top: 17px;
  right: 27px;
}
</style>
