<template>
  <section
    data-name="BlockCardComponent"
    class="
      section
      block-card-section
      bg-vanilla bg-image-section-one
      reveal
      section___container
      q_active
    "
  >
    <div class="q-container container-inner">
      <div class="columns block-card-shadow">
        <div class="column is-7 block-picture">
          <figure class="picture" style="height: 650px">
            <div
              data-scroll=""
              data-scroll-speed="-1"
              class="box wide is-inview"
            ></div>
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
                data-scroll=""
                data-scroll-speed="-0.95"
                class="clip_image is-inview"
              />
            </div>
          </figure>
        </div>
        <div class="column is-5 block-entry">
          <div class="inner">
            <h1 class="section-headline rev_item">
              <span class="q_split" v-html="data.model.title"></span>
            </h1>
            <div class="rev_item">
              <p v-html="data.model.description"></p>
            </div>
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
  components: { ButtonMagnetic },
  data() {
    return {
      data: {
        name: "Component Two",
        component_name: "ComponentTwo",
        model: {
          title: "THE <br>RESORT",
          description:
            "Jannata Resort & Spa is a boutique property with tranquil valley views in the rural village of Sebali, just outside of Ubud.<br><br>It is attuned to the surrounding environment through a thoughtful design that respects Bali’s rich artistry and cultural heritage.",
          featured: {
            id: "5e6f0fbd9dae8c6e6bb078d7",
            created_at: "2020-03-16 05:33:49",
            updated_at: "2020-03-16 05:33:49",
            updatedBy: null,
            title: null,
            description: null,
            size: 409040,
            type: "IMG",
            original: "0a92d769-ae4f-4a86-b5d6-67fbb4bc4472.jpg",
            path: "5e65fe109dae8c14dd70f7e0/pictures/homepage/15843368292441",
            is_aws: true,
            aws_file_url:
              "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
            filename: {
              big: "big/0a92d769-ae4f-4a86-b5d6-67fbb4bc4472.jpg",
              raw: "raw/0a92d769-ae4f-4a86-b5d6-67fbb4bc4472.jpg",
              blur: "blur/0a92d769-ae4f-4a86-b5d6-67fbb4bc4472.jpg",
              medium: "medium/0a92d769-ae4f-4a86-b5d6-67fbb4bc4472.jpg",
            },
          },
          link: {
            title: "READ THE STORY",
            url: "our-story",
          },
        },
      },
    };
  },
};
</script>

<style>
.bg-vanilla {
  background-color: #f0f0f5;
}

.bg-image-section-one {
  position: relative;
  overflow: hidden;
}

.bg-image-section-one:before {
  background-image: url("https://jannataresort.com/_nuxt/img/a109df5.png");
  top: -10vh;
  left: -25px;
  height: 100%;
  width: 250px;
}

.bg-image-section-one:after,
.bg-image-section-one:before {
  content: "";
  display: inline-block;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}

.block-card-shadow {
  padding: 50px 0 80px;
}

.block-card-shadow .block-picture {
  flex: none;
  width: 57.5%;
}
.block-card-shadow .block-entry {
  display: flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
  align-items: center;
  -webkit-align-items: center;
  flex: none;
  width: 42.5%;
}
.block-card-shadow .block-entry .inner {
  padding: 0 50px 0 100px;
}
.block-card-shadow .block-entry .section-headline {
  margin-top: 100px;
}
.block-card-shadow .block-picture .box.wide {
  position: absolute;
  top: 60px;
  right: -80%;
  width: 140%;
}
.block-card-shadow .block-picture .box {
  position: absolute;
  top: 60px;
  right: 0;
  width: 83%;
  height: 100%;
  background-color: #d8d6e2;
  z-index: 0;
}
.block-card-shadow .block-picture .picture .rev_clip {
  height: 100%;
  position: relative;
  z-index: 5;
}
.rev_clip img {
  position: absolute;
  max-width: 200%;
  width: 100%;
  min-width: 100%;
  min-height: 250px;
}
.block-card-shadow .block-picture .picture {
  position: relative;
  margin: 0;
  padding: 0 30px 0 20px;
  height: 100%;
}
.bg-image-section-one:after,
.bg-image-section-one:before {
  content: "";
  display: inline-block;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
}

/* Mobile */
@media screen and (max-width: 1024px) {
  .block-card-shadow .block-entry .inner {
    padding-left: 0;
  }
}

@media screen and (max-width: 768px) {
  .block-card-shadow {
    display: flex;
  }

  .block-card-shadow .block-entry .inner {
    padding-right: 25px;
  }
}

@media screen and (max-width: 540px) {
  .block-card-shadow {
    -webkit-box-flex-direction: column-reverse;
    -moz-box-flex-direction: column-reverse;
    flex-direction: column-reverse;
    padding: 25px 0;
  }
  .block-card-shadow .block-picture {
    width: 100%;
  }
  .block-card-shadow .block-entry {
    width: 100%;
    padding-top: 50px;
  }
  .block-card-shadow .block-picture .picture {
    padding: 0 20px 0 0;
  }
  .block-card-shadow .block-picture .box {
    display: none;
  }
  .block-card-shadow .block-entry .inner {
    padding: 0;
    text-align: left;
    margin-bottom: 30px;
  }
}
</style>