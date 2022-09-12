<template>
  <div id="accommodations" class="accommodations column-grid-container">
    <div
      class="accommodation-type column-item"
      v-for="item in data.model.dataSlider"
      :key="item.id + item.featured.filename.raw + ' accommodations'"
      @mouseover="
        onHover(
          item.featured_hover.aws_file_url +
            '/' +
            item.featured_hover.path +
            '/' +
            item.featured_hover.filename.raw
        )
      "
      @mouseleave="hover = false"
    >
      <br />
      <a :href="item.link.url"
        ><h4 class="accommodation-name">{{ item.link.title }}</h4>
        <div
          class="accommodation-bg"
          :style="{
            backgroundImage: `url(${
              item.featured.aws_file_url +
              '/' +
              item.featured.path +
              '/' +
              item.featured.filename.raw
            })`,
          }"
        >
          <div
            class="accommodation-bg-change"
            :style="{
              backgroundImage: `url(${background})`,
            }"
          ></div></div
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      hover: false,
      background: "",
    };
  },
  methods: {
    onHover(item) {
      this.background = item;
      this.hover = true;
    },
  },
};
</script>

<style>
</style>