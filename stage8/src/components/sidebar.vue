<template>
  <div id="sidebar">
    <b-container>
      <b-row>
        <b-col cols="12" class="logo text-center my-4">
          <img :src="'./img/cloud_24px.svg'" alt="" style="filter: invert(1)" />
          MCloud.
        </b-col>
        <b-col cols="12" class="nav my-2">
          <b-btn variant="upload" block pill>
            <img
              :src="'./img/upload.svg'"
              alt=""
              style="height: 30px; filter: invert(1) brightness(0.7) sepia(1) hue-rotate(150deg);"
            />
            &nbsp;上傳檔案
          </b-btn>
        </b-col>
        <b-col cols="12" class="nav my-2">
          <b-btn variant="nav" v-for="(n, idx) in navs" :key="idx" block>
            <img
              :src="`./img/${n.icon}`"
              alt=""
              style="height: 20px; filter: invert(1)"
            />
            &emsp;{{ n.name }}
          </b-btn>
        </b-col>
      </b-row>
      <b-row class="position-absolute" style="bottom: 0">
        <b-col cols="12" class="text-white">
          <b-row>
            <b-col cols="4">
              <b-img
                :src="'./img/afterglow-back-view-dawn-2825791.jpg'"
                rounded="circle"
                style="height:55px; width:55px"
              />
            </b-col>
            <b-col cols="8" class="text-white">
              <h5 class="font-weight-bold">Jennifer</h5>
              <h6>User</h6>
            </b-col>
          </b-row>
          <b-progress :value="12" :max="100" class="my-2"></b-progress>
          <p class="text-center">容量 1.2GB / 10GB</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.btn-upload {
  background: white;
  color: #4cb5f5;
  transition: all 0.25s;
  letter-spacing: 0;
  text-transform: uppercase;
  opacity: 1;
}

.btn-upload:hover {
  background: white;
  color: #4cb5f5;
  filter: drop-shadow(2px 2px 3px #15567d);
}

.btn-upload:focus {
  outline: none;
}

.logo {
  letter-spacing: 0;
  color: #ffffff;
  font-size: 24px;
}

.btn-nav {
  color: #fff;
  transition: all 0.25s;
  letter-spacing: 0;
  text-transform: uppercase;
  opacity: 1;
  transition: all 0.25s;
}

.btn-nav:hover {
  color: #fff;
}

.btn-nav:focus {
  outline: none;
}

.btn-nav::after {
  content: "";
  display: block;
  margin: 0 auto;
  width: 0%;
  border-top: 2px solid white;
  position: relative;
  top: 10px;
  transition: width 0.25s;
}

.btn-nav:hover::after {
  width: 80%;
}

.progress {
  border-radius: 8px;
  height: 10px;
}
</style>

<script>
export default {
  name: "sidebar",
  data() {
    let navs = [
      { icon: "folder.svg", name: "我的檔案" },
      { icon: "star.svg", name: "已加星號" },
      { icon: "sharing-content.svg", name: "檔案共享" },
      { icon: "garbage.svg", name: "垃圾桶" }
    ];
    return {
      navs
    };
  }
};
</script>
