<template>
  <section
    id="block-card-overlap"
    data-name="BlockCardOverlapComponent"
    class="
      section
      bg-vanilla bg-image-section-one
      block-card-section block-card-overlap
      reveal
      section___container
      q_active
    "
  >
    <div class="q-container container-inner">
      <div class="columns overlap-wrapper type-1">
        <div class="column block-picture wide">
          <figure
            class="picture"
            :style="{
              height: heightPic,
            }"
          >
            <div class="rev_clip" style="clip-path: inset(0px); opacity: 1">
              <img
                :src="
                  data.model.featured.aws_file_url +
                  '/' +
                  data.model.featured.path +
                  '/' +
                  data.model.featured.filename.raw
                "
                alt=""
                data-scroll
                data-scroll-speed="-2"
                class="clip_image is-inview"
                v-rellax="rellax.picture"
              />
            </div>
          </figure>
        </div>
        <div
          v-rellax="rellax.card"
          data-scroll
          data-scroll-speed="-2"
          class="column block-entry bg-white vs-div is-inview"
        >
          <div class="inner">
            <h2 class="title">
              <span class="q_split"
                ><span class="q_split_wrap rev_item">{{
                  data.model.title_one
                }}</span>

                <span class="q_split text-green"
                  ><span class="q_split_wrap rev_item">{{
                    data.model.title_two
                  }}</span></span
                >
              </span>
            </h2>
            <div class="title-line"></div>
            <div v-html="data.model.description"></div>
            <div class="rev_item">
              <ButtonMagnetic :title="data.model.link.title" type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonMagnetic from "../Banner/ButtonMagnetic.vue";
export default {
  data() {
    return {
      rellax: {
        picture: {
          speed: 4,
          center: true,
        },
        card: {
          speed: -4,
          center: true,
        },
      },
      heightPic: "590px",
      data: {
        name: "Component Four",
        component_name: "ComponentFour",
        model: {
          featured: {
            id: "5e78388d9dae8c62826241d8",
            created_at: "2020-03-23 04:18:21",
            updated_at: "2020-03-23 04:18:21",
            updatedBy: null,
            title: null,
            description: null,
            size: 195994,
            type: "IMG",
            original: "e061b86c-217c-4b9f-87ec-bc67b45db7a0.jpg",
            path: "5e65fe109dae8c14dd70f7e0/pictures/dining/15849371005791",
            is_aws: true,
            aws_file_url:
              "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
            filename: {
              big: "big/e061b86c-217c-4b9f-87ec-bc67b45db7a0.jpg",
              raw: "raw/e061b86c-217c-4b9f-87ec-bc67b45db7a0.jpg",
              blur: "blur/e061b86c-217c-4b9f-87ec-bc67b45db7a0.jpg",
              medium: "medium/e061b86c-217c-4b9f-87ec-bc67b45db7a0.jpg",
            },
          },
          title_one: "DINNER WITH",
          title_two: "JANNATA",
          description:
            "<p>Amateras Restaurant at Jannata Resort &amp; Spa serves an extensive menu of Western and Asian cuisine that is driven by quality ingredients.</p><p><br></p><p>The restaurant is located next to the lobby and extends out onto an open terrace for an alfresco dining experience. It is elevated over the main swimming pool with tropical views of lush valley greenery in the distance.</p>",
          link: {
            title: "Read More",
            url: "amateras-dining",
          },
        },
      },
    };
  },
  created() {
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 768) {
        this.heightPic = "250px";
        this.rellax.card = {
          speed: -2,
          center: true,
        };
        this.rellax.picture = {
          speed: 2,
          center: true,
        };
      } else {
        this.heightPic = "590px";
        this.rellax.card = {
          speed: -4,
          center: true,
        };
        this.rellax.picture = {
          speed: 4,
          center: true,
        };
      }
    },
  },
  components: { ButtonMagnetic },
};
</script>

<style>
</style>