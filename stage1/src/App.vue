<template>
  <div id="app">
    <div id="bg">
      <div id="particle"></div>
      <!-- Photo by Diego PH on Unsplash -->
      <img src="@/assets/img/diego-ph-222506-unsplash.jpg" alt="" />
    </div>
    <loading></loading>
    <home class="view hide" id="home"></home>
    <list class="view hide" id="list"></list>
    <foot id="foot"></foot>
  </div>
</template>

<style>
.light {
  animation: light 9s linear infinite;
}

@keyframes light {
  from {
    filter: drop-shadow(0px 0px 10px #ff0);
  }

  33% {
    filter: drop-shadow(0px 0px 10px #0ff);
  }

  66% {
    filter: drop-shadow(0px 0px 10px #f0f);
  }

  to {
    filter: drop-shadow(0px 0px 10px #ff0);
  }
}
</style>

<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#bg {
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: -1;
  overflow: hidden;
  top: 0;
}

#bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

#particle {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
}

.view {
  opacity: 1;
  transition: opacity 0.5s;
}

.hide {
  opacity: 0 !important;
  pointer-events: none;
}
</style>

<script>
import home from "@/views/Home.vue";
import list from "@/views/List.vue";
import loading from "@/components/loading.vue";
import foot from "@/components/foot.vue";
import { setTimeout } from "timers";
import { eventBus } from "@/main.js";
export default {
  data() {
    let currentPage = "home";
    return {
      currentPage
    };
  },
  components: {
    home,
    list,
    loading,
    foot
  },
  methods: {
    initParticles() {
      window.particlesJS("particle", {
        particles: {
          number: {
            value: 355,
            density: {
              enable: true,
              value_area: 789.1476416322727
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
              enable: true,
              speed: 0.2,
              opacity_min: 0,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  },
  mounted() {
    require("particles.js");
    this.$nextTick(() => {
      this.initParticles();
    });
  },
  created() {
    window.onload = () => {
      setTimeout(() => {
        let ld = this.$el.querySelectorAll("#loading");
        ld[0].classList.add("hide");
        setTimeout(() => {
          ld[0].style.display = "none";
        }, 500);
        let views = this.$el.querySelectorAll(".view");
        for (let i = 0; i < views.length; i++) {
          if (views[i].id == "home") {
            views[i].classList.remove("hide");
            views[i].style.display = "block";
          }
        }
        let foot = this.$el.querySelectorAll("#foot");
        foot[0].classList.remove("hide");
        foot[0].style.display = "block";
      }, 1000);
    };

    eventBus.$on("page", path => {
      if (path == this.currentPage) return false;
      let views = this.$el.querySelectorAll(".view");
      for (let i = 0; i < views.length; i++) {
        views[i].classList.add("hide");
      }
      let page = this.$el.querySelectorAll(`#${path}`);
      setTimeout(() => {
        for (let i = 0; i < views.length; i++) {
          views[i].style.height = 0;
        }
        page[0].classList.remove("hide");
        page[0].style.display = "block";
      }, 500);

      this.currentPage = path;
    });
  }
};
</script>
