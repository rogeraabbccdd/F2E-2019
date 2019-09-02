<template>
  <div id="app">
    <b-container fluid class="h-100">
      <b-row class="h-100">
        <b-col cols="2" id="sidecol" class="h-100">
          <sidebar></sidebar>
        </b-col>
        <b-col cols="10" class="h-100">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
#app {
  width: 1280px;
  height: 720px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "Noto Sans TC";
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

#sidecol {
  background: #4cb5f5 0% 0% no-repeat padding-box;
  box-shadow: 3px 0px 6px #66666633;
}
</style>

<script>
import sidebar from "@/components/sidebar.vue";
export default {
  components: {
    sidebar
  }
};
</script>
