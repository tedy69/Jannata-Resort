<template>
  <section
    id="block-card-overlap"
    image-editor="img_background"
    data-name="BlockCardOverlapParallaxComponent"
    class="
      section
      block-card-section block-card-overlap
      jarallax
      reveal
      section___container
      q_active
      jarallax
    "
  >
    <div
      alt=""
      data-scroll=""
      data-scroll-speed="-2"
      class="bg-image is-inview jarallax-img"
      :style="{
        backgroundImage: `url(${
          data.model.featured.aws_file_url +
          '/' +
          data.model.featured.path +
          '/' +
          data.model.featured.filename.raw
        })`,
      }"
    ></div>
    <div class="q-container container-inner">
      <div class="columns overlap-wrapper type-1">
        <div class="column block-entry">
          <div class="inner">
            <h2 class="title rev_item">{{ data.model.title }}</h2>
            <div class="title-line"></div>
            <p class="rev_item">
              {{ data.model.description }}
            </p>
            <br />
            <div class="rev_item">
              <ButtonMagnetic
                title="READ THE STORY"
                type="text"
                colorFont="white"
              />
            </div>
          </div>
        </div>
      </div>
      <div image-binding="img_background"></div>
    </div>
  </section>
</template>

<script>
import ButtonMagnetic from "../Banner/ButtonMagnetic.vue";
export default {
  methods: {},
  components: { ButtonMagnetic },
  data() {
    return {
      data: {
        name: "Component Five",
        component_name: "ComponentFive",
        model: {
          title: "RELAXING WITH JANNATA.",
          description:
            "A sanctuary for the senses, Champaka Spa features a comfortable lounge area and three private treatment rooms for sessions of personal rejuvenation. This charming wellness facility overlooks a tropical valley that descends down to flowing river.",
          featured: {
            id: "5e6f379e9dae8c6e6bb078fc",
            created_at: "2020-03-16 08:23:58",
            updated_at: "2020-03-16 08:23:58",
            updatedBy: null,
            title: null,
            description: null,
            size: 79004,
            type: "IMG",
            original: "6fe77037-cba3-4b76-81d0-bac03e031898.jpg",
            path: "5e65fe109dae8c14dd70f7e0/pictures/homepage/15843470372741",
            is_aws: true,
            aws_file_url:
              "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
            filename: {
              big: "big/6fe77037-cba3-4b76-81d0-bac03e031898.jpg",
              raw: "raw/6fe77037-cba3-4b76-81d0-bac03e031898.jpg",
              blur: "blur/6fe77037-cba3-4b76-81d0-bac03e031898.jpg",
              medium: "medium/6fe77037-cba3-4b76-81d0-bac03e031898.jpg",
            },
          },
          link: {
            title: "Read More",
            url: "champaka-spa",
          },
        },
      },
    };
  },
};
</script>

<style>
.jarallax {
  padding: 0;
  min-height: 120vh;
  background-color: #000;
  position: relative;
  overflow: hidden;
}
.jarallax {
  padding: 0;
  min-height: 120vh;
  background-color: #000;
  position: relative;
  overflow: hidden;
}
.jarallax-img {
  font-family: "object-fit: cover;";
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 130%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.5;
  background: no-repeat 50%;
  background-size: cover;
}
.jarallax > .bg-image {
  font-family: "object-fit: cover;";
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 130%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.5;
  background: no-repeat 50%;
  background-size: cover;
}
.block-card-overlap .overlap-wrapper {
  position: relative;
  padding-bottom: 130px;
}
/* .block-card-overlap .block-entry {
  position: absolute;
  margin-top: 80px;
  top: 0;
  width: 54%;
  flex: none;
  z-index: 25;
} */
.block-card-overlap .type-1 .block-entry,
.block-card-overlap .type-3 .block-entry {
  right: 0;
}

.jarallax .block-entry {
  top: 10vh !important;
}

/* Mobile */
@media screen and (max-width: 1024px) {
  .block-card-overlap .overlap-wrapper {
    padding-bottom: 100px;
  }
}

@media screen and (max-width: 768px) {
  .block-card-overlap .overlap-wrapper {
    padding-bottom: 0;
  }
}

@media screen and (max-width: 540px) {
  .block-card-overlap .block-entry {
    width: calc(100% - 40px);
    position: relative;
    top: 0;
    margin: auto;
  }
}
</style>