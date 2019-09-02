<template>
  <div
    class="home h-100"
    :style="{ backgroundImage: 'url(./img/cloud_24px_bg@2x.png)' }"
  >
    <b-container class="p-5">
      <b-row>
        <b-col cols="12">
          <h5>我的檔案</h5>
          <table class="w-100 files">
            <tr class="border-bottom" style="border-color: #E6E6E6;">
              <th>名稱</th>
              <th>上次修改</th>
              <th>檔案大小</th>
              <th>擁有者</th>
              <th></th>
            </tr>
            <tr v-for="(f, idx) in files" :key="idx">
              <td>
                <img
                  :src="`./img/${f.icon}.png`"
                  alt=""
                  width="25"
                  height="25"
                />
                &emsp;{{ f.name }}
              </td>
              <td>{{ f.last_update }}</td>
              <td>{{ f.size }}</td>
              <td>{{ f.owner }}</td>
              <td>...</td>
            </tr>
          </table>

          <h5 class="mt-5">檔案共享</h5>
          <table class="w-100 files">
            <tr class="border-bottom" style="border-color: #E6E6E6;">
              <th>名稱</th>
              <th>上次修改</th>
              <th>檔案大小</th>
              <th>擁有者</th>
              <th></th>
            </tr>
            <tr v-for="(f, idx) in files" :key="idx">
              <td>
                <img
                  :src="`./img/${f.icon}.png`"
                  alt=""
                  width="25"
                  height="25"
                />
                &emsp;{{ f.name }}
              </td>
              <td>{{ f.last_update }}</td>
              <td>{{ f.size }}</td>
              <td>{{ f.owner }}</td>
              <td>...</td>
            </tr>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style>
.home {
  background-repeat: no-repeat;
  background-position: bottom right;
  overflow-y: auto;
}

.files tr {
  height: 60px;
  color: #666666;
}
</style>

<script>
export default {
  name: "home",
  data() {
    let files = [
      {
        icon: "mp4",
        name: "走吧！一起用日語去旅行.mp4",
        last_update: "2019/6/10",
        size: "6.5MB",
        owner: "Jennifer"
      },
      {
        icon: "doc",
        name: "20191011-1020日本東京自由行.doc",
        last_update: "2019/6/25",
        size: "2.3MB",
        owner: "Jennifer"
      },
      {
        icon: "pdf",
        name: "東京都內案內手冊.pdf",
        last_update: "2019/7/5",
        size: "4.6MB",
        owner: "Jennifer"
      },
      {
        icon: "img",
        name: "成田機場綠色窗口位置.png",
        last_update: "2019/8/10",
        size: "1.2MB",
        owner: "Jennifer"
      },
      {
        icon: "folder",
        name: "工作相關",
        last_update: "2019/8/30",
        size: "205MB",
        owner: "Jennifer"
      }
    ];
    let shared = [];
    return {
      files,
      shared
    };
  }
};
</script>
