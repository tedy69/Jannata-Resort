<template>
  <div>
    <div v-if="splashScreenEnabled" class="splashScreen">
      <div>
        <a href="#" class="logo-loading" data-v-373c9fb4=""
          ><img
            src="https://jannataresort.com/_nuxt/img/1336c61.png"
            data-v-373c9fb4=""
        /></a>
        <h5 id="progstat">Loading {{ progress }}%</h5>
      </div>
    </div>
    <div v-if="pageTransitionEnabled" class="pageTransScreen">
      <div>
        <a href="#" class="logo-loading" data-v-373c9fb4=""
          ><img
            src="https://jannataresort.com/_nuxt/img/1336c61.png"
            data-v-373c9fb4=""
        /></a>
        <h5 id="progstat">Loading {{ progress }}%</h5>
      </div>
    </div>
    <Nuxt />
  </div>
</template>
<script>
import { store } from "~/store/store.js";

export default {
  data() {
    return {
      progress: 0,
    };
  },

  computed: {
    pageTransitionEnabled() {
      return store.pageTransitionEnabled;
    },
    splashScreenEnabled() {
      return store.splashScreenEnabled;
    },
  },
  watch: {
    $route() {
      this.progress = 0;
      this.animateValue(0, 100, 1200);
    },
  },
  mounted() {
    this.animateValue(0, 100, 1200);
  },
  methods: {
    animateValue(start, end, duration) {
      var range = end - start,
        current = start,
        increment = end > start ? 1 : -1,
        stepTime = Math.abs(Math.floor(duration / range));

      var timer = setInterval(() => {
        current += increment;
        this.progress = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    },
  },
};
</script>
<style>
#overlay {
  position: fixed;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #5f5c68;
  overflow: hidden;
}

.logo-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 1;
  width: 120px;
  opacity: 0.5;
}
img {
  max-width: 100%;
  vertical-align: middle;
}
#progstat {
  color: #f0f0f5;
  font-size: 9px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(100px);
}

.splashScreen {
  background-color: #5f5c68;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}
.white {
  color: #fff;
}
.splashScreen h1 {
  color: #fff;
  display: block;
  transform: translateY(-300px);
  opacity: 0;
}

.pageTransScreen {
  background-color: #5f5c68;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
}
</style>
