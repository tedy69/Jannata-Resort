<template>
  <div class="popup popup-homepage open" v-if="open">
    <div class="popup-container">
      <div class="block-content-wrap">
        <div class="columns">
          <div class="close" @click="open = !open">
            <i class="icon icon-plus"></i>
          </div>
          <figure class="column picture">
            <div class="wrap">
              <img
                src="https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/homepage/15882279350951/big/DJI_0587_JPG.jpg"
                alt=""
              />
            </div>
          </figure>
          <div class="column entry">
            <div class="inner">
              <span class="section-headline lines-middle text-gold"
                >Plan Your Ubud Escape</span
              >
              <span class="title">STAY SAFE</span>
              <div class="desc">
                <p>
                  Reserve your Bali holiday with no quarantine as we are a
                  certified CHSE resort in the heart of Ubud.&nbsp;
                </p>
              </div>
              <a
                href="https://chse.kemenparekraf.go.id/detail-tersertifikasi/perhotelan-101"
                class="button"
                ><i class="icon icon-angle-right"></i>
                View Certificate Here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style>
</style>