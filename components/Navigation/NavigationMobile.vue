<template>
  <div id="navMobile" class="navbar-header-mobile">
    <a href="/en" class="logo"
      ><img src="https://jannataresort.com/_nuxt/img/1336c61.png" alt=""
    /></a>
    <div
      id="navMobileBtn"
      class="navbar-btn-bars"
      @click="$emit('click-nav-mobile', (show = !show))"
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.navbar-header-mobile {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #323037;
  z-index: 999;
}

.navbar-header-mobile .navbar-btn-bars {
  position: absolute;
  right: 30px;
  top: 30px;
  width: 65px;
  height: 15px;
  overflow: hidden;
}
.navbar-header-mobile .navbar-btn-bars div:first-child {
  top: 7px;
}
.navbar-header-mobile .navbar-btn-bars div {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 1px;
  background-color: #fff;
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
}
.navbar-header-mobile .navbar-btn-bars div:nth-child(3) {
  top: 14px;
}
.navbar-header-mobile .logo {
  width: 70px;
  display: block;
  margin: 10px auto;
}
.navbar-header-mobile .logo img {
  width: 100%;
}

@media screen and (max-width: 540px) {
  .navbar-header-mobile {
    display: block;
  }
}
</style>