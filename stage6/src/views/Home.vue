<template>
  <div
    class="home position-relative"
    :style="{ backgroundImage: 'url(img/1.png)' }"
  >
    <b-container id="nav">
      <b-row align-h="center">
        <b-col cols="9">
          <b-row>
            <b-col cols="1-5">
              <img src="img/Mask Group 3.svg" alt="" height="40" /> 關於我們
            </b-col>
            <b-col cols="1-5"
              ><img src="img/Mask Group 4.svg" alt="" height="40" /> 客房介紹
            </b-col>
            <b-col cols="1-5">
              <img src="img/Mask Group 5.svg" alt="" height="40" /> 住宿服務
            </b-col>
            <b-col cols="1-5">
              <img src="img/Mask Group 6.svg" alt="" height="40" /> 交通指引
            </b-col>
            <b-col cols="1-5">
              <img src="img/Mask Group 7.svg" alt="" height="40" /> 最新消息
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container id="content">
      <b-row>
        <b-col cols="1"></b-col>
        <b-col cols="6">
          <b-row align-h="center">
            <b-col cols="12" class="py-3 my-5">
              <b-row align-h="center">
                <b-col cols="10">
                  <img
                    src="img/logo.svg"
                    alt=""
                    width="125"
                    class="float-left"
                  />
                  <h1 class="text-title">&nbsp;&nbsp;綠柳宿旅</h1>
                  <h2 class="text-title">&nbsp;&nbsp;Green Willow Lodge</h2>
                </b-col>
              </b-row>
            </b-col>
            <b-col
              cols="12"
              class="text-white text-center"
              style="background: #2D3047"
            >
              客房介紹
            </b-col>
            <b-col class="mt-2" cols="12">
              <b-row>
                <b-col cols="4" class="my-2">
                  <img
                    src="img/photo-1501127122-f385ca6ddd9d@2x.png"
                    class="w-100 h-100"
                  />
                </b-col>
                <b-col cols="4" class="my-2">
                  <img
                    src="img/photo-1552902019-ebcd97aa9aa0@2x.png"
                    class="w-100 h-100"
                  />
                </b-col>
                <b-col cols="4" class="my-2">
                  <img
                    src="img/photo-1558211583-03ed8a0b3d5f@2x.png"
                    class="w-100 h-100"
                  />
                </b-col>
                <b-col cols="4" class="my-2">
                  <img
                    src="img/photo-1501876725168-00c445821c9e@2x.png"
                    class="w-100 h-100"
                  />
                </b-col>
                <b-col cols="4" class="my-2">
                  <img
                    src="img/photo-1519974719765-e6559eac2575@2x.png"
                    class="w-100 h-100"
                  />
                </b-col>
                <b-col cols="4" class="my-2">
                  <img
                    src="img/photo-1526880792616-4217886b9dc2@2x.png"
                    class="w-100 h-100"
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid id="footer">
      <b-container class="h-100">
        <b-row class="h-100" align-v="center">
          <b-col cols="1">
            <img src="img/220px-QRcode_image.svg@2x.png" class="w-100" />
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="5">
                <p class="m-0">Tel： 02-24884712</p>
                <p class="m-0">Fax： 02-84884712</p>
              </b-col>
              <b-col cols="7">
                <p class="m-0">Email： reloading.hotel@gmail.com</p>
                <p class="m-0">Add： 新北市小山區五月鄉三雲裡5號之1</p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="5" class="text-center">
            繁體中文 | 简体中文 | 日本語 | English | 한국어
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<style>
.home {
  width: 1280px;
  height: 720px;
  background-attachment: fixed;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 1.5rem;
}
.text-title {
  color: #5b6391;
}

#nav {
  height: 40px;
}

#footer {
  height: 60px;
  background: #2d3047;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  color: #959cc4;
  white-space: nowrap;
}

#content {
  height: calc(100% - 100px);
}
</style>
<style type="text/css">
.col-1-5,
.col-sm-1-5,
.col-md-1-5,
.col-lg-1-5 {
  position: relative;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;
}

.col-1-5 {
  width: 20%;
  float: left;
}

@media (min-width: 768px) {
  .col-sm-1-5 {
    width: 20%;
    float: left;
  }
}

@media (min-width: 992px) {
  .col-md-1-5 {
    width: 20%;
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-1-5 {
    width: 20%;
    float: left;
  }
}
</style>

<script>
export default {
  name: "home",
  components: {}
};
</script>
