import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/viewAlbum",
      name: "viewAlbum",
      props: true,
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/ViewAlbum.vue")
    },
    {
      path: "/playing",
      name: "playing",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Playing.vue")
    }
  ]
});
