<template>
  <div class="image-container">
    <div class="image-wrapper">
      <img
        :src="data.aws_file_url + '/' + data.path + '/' + data.filename.raw"
        alt=""
        class="image"
      />
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
};
</script>

<style>
</style>