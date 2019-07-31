<template>
  <b-container class="headbar">
    <b-row align-h="between" class="text-white">
      <b-col cols="3">{{ time }}</b-col>
      <b-col cols="4">
        <i class="material-icons" v-if="network == 'wifi'">
          wifi
        </i>
        <i class="material-icons" v-else-if="network == 'cellular'">
          signal_cellular_alt
        </i>
        <i class="material-icons" v-else-if="network == 'ethernet'">
          settings_ethernet
        </i>
        &nbsp;
        <i class="material-icons battery" v-if="battery == 100">battery_full</i>
        <i
          class="material-icons battery"
          v-else-if="battery < 100 && battery >= 90"
        >
          battery_90
        </i>
        <i
          class="material-icons battery"
          v-else-if="battery < 90 && battery >= 80"
        >
          battery_80
        </i>
        <i
          class="material-icons battery"
          v-else-if="battery < 80 && battery >= 60"
        >
          battery_60
        </i>
        <i
          class="material-icons battery"
          v-else-if="battery < 60 && battery >= 50"
        >
          battery_50
        </i>
        <i
          class="material-icons battery"
          v-else-if="battery < 50 && battery >= 30"
        >
          battery_30
        </i>
        <i
          class="material-icons battery"
          v-else-if="battery < 30 && battery >= 20"
        >
          battery_20
        </i>
        <i class="material-icons battery" v-else>battery_alert</i>
      </b-col>
    </b-row>
  </b-container>
</template>

<style>
.battery {
  transform: rotate(90deg);
}

.headbar {
  font-size: 15px;
  text-align: center;
  padding-top: 14px;
}
</style>

<script>
export default {
  name: "headbar",
  data() {
    let time = "";
    let battery = 0;
    let network = "";

    return {
      time,
      battery,
      network
    };
  },
  methods: {
    refreshTime() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      this.time = `${this.padZero(h)}:${this.padZero(m)}`;
    },
    padZero(val) {
      return val < 10 ? "0" + val : val;
    }
  },
  created() {
    this.refreshTime();
    setInterval(() => {
      this.refreshTime();
    }, 1000);

    navigator.getBattery().then(battery => {
      this.battery = battery.level * 100;
    });

    this.network = navigator.connection.type;
    navigator.connection.addEventListener("change", () => {
      this.network = navigator.connection.type;
    });
  }
};
</script>
