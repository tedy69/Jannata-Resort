<template>
  <section
    id="q_slide"
    autoplay
    animate
    mousefollow
    parallax
    opacity=".3"
    class="q_slide_section"
  >
    <div class="q_slide-inner">
      <div class="slides">
        <div
          class="slide"
          :class="{ q_current: index === 0 }"
          id="page-top-banner"
          v-for="(item, index) in data.model.dataSlider"
          :key="item.title + index.toString()"
        >
          <div class="slide-content">
            <div class="caption">
              <h1 class="q_splitText">
                {{ item.title.replace(" ", "&nbsp;") }}
              </h1>
              <p>
                {{ item.description }}
              </p>
              <ButtonMagnetic
                :title="item.link.title"
                type="button"
                style="padding: 3rem"
              />
            </div>
          </div>
          <ImageBanner :data="item.featured" />
        </div>
      </div>

      <!-- Pagination -->

      <div class="pagination">
        <div class="item q_current">
          <span class="icon">1</span>
        </div>
        <div class="item">
          <span class="icon">2</span>
        </div>
        <div class="item">
          <span class="icon">3</span>
        </div>
        <div class="item">
          <span class="icon">4</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ImageBanner from "./ImageBanner.vue";
import ButtonMagnetic from "./ButtonMagnetic.vue";
export default {
  name: "Banner",
  components: { ImageBanner, ButtonMagnetic },
  data() {
    return {
      data: {
        name: "Component One",
        component_name: "ComponentOne",
        model: {
          dataSlider: [
            {
              title: "EXCLUSIVE OFFERS",
              description:
                "Discover our amazing exclusive deals and get the very best for less.",
              link: {
                title: "Read more",
                attach: "",
                url: "exclusive-deals",
              },
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
              id: "a51ec325-bcfc-4bc3-8574-af2b72f7cd57",
            },
            {
              title: "ACCOMMODATION",
              description:
                "Every accommodation has a sense of discrete luxury, combining contemporary and Balinese décor.",
              link: {
                title: "Read more",
                attach: "",
                url: "accommodation/pool-villa",
              },
              featured: {
                id: "5e72e5ab9dae8c06c7d4c21f",
                created_at: "2020-03-19 03:23:23",
                updated_at: "2020-03-19 03:23:23",
                updatedBy: null,
                title: null,
                description: null,
                size: 217067,
                type: "IMG",
                original: "ff642f58-71fc-4cee-9d91-d525b1c641d2.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/homepage/15845882025441",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/ff642f58-71fc-4cee-9d91-d525b1c641d2.jpg",
                  raw: "raw/ff642f58-71fc-4cee-9d91-d525b1c641d2.jpg",
                  blur: "blur/ff642f58-71fc-4cee-9d91-d525b1c641d2.jpg",
                  medium: "medium/ff642f58-71fc-4cee-9d91-d525b1c641d2.jpg",
                },
              },
              id: "a51ec325-bcfc-4bc3-8574-af2b72f7cd57",
            },
            {
              title: "CHAMPAKA SPA ",
              description:
                "A truly luxurious experience for the senses, surrounded by the warmth of the Balinese nature.",
              link: {
                title: "Read more",
                attach: "",
                url: "champaka-spa",
              },
              featured: {
                id: "5e784bdd9dae8c262195e7a2",
                created_at: "2020-03-23 05:40:45",
                updated_at: "2020-03-23 05:40:45",
                updatedBy: null,
                title: null,
                description: null,
                size: 80506,
                type: "IMG",
                original: "e5740d7a-73ce-4643-8761-2f59c29a40f9.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/homepage/15849420444562",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/e5740d7a-73ce-4643-8761-2f59c29a40f9.jpg",
                  raw: "raw/e5740d7a-73ce-4643-8761-2f59c29a40f9.jpg",
                  blur: "blur/e5740d7a-73ce-4643-8761-2f59c29a40f9.jpg",
                  medium: "medium/e5740d7a-73ce-4643-8761-2f59c29a40f9.jpg",
                },
              },
              id: "a51ec325-bcfc-4bc3-8574-af2b72f7cd57",
            },
            {
              title: "AMATERAS ",
              description:
                "Experience the creativity and warmth of the Balinese cuisine in our romantic setting.",
              link: {
                title: "Read more",
                attach: "",
                url: "amateras-dining",
              },
              featured: {
                id: "5e784bdc9dae8c262195e7a1",
                created_at: "2020-03-23 05:40:44",
                updated_at: "2020-03-23 05:40:44",
                updatedBy: null,
                title: null,
                description: null,
                size: 209987,
                type: "IMG",
                original: "097470ab-7879-493e-bc98-5dc4fd09cb54.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/homepage/15849420411011",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/097470ab-7879-493e-bc98-5dc4fd09cb54.jpg",
                  raw: "raw/097470ab-7879-493e-bc98-5dc4fd09cb54.jpg",
                  blur: "blur/097470ab-7879-493e-bc98-5dc4fd09cb54.jpg",
                  medium: "medium/097470ab-7879-493e-bc98-5dc4fd09cb54.jpg",
                },
              },
              id: "a51ec325-bcfc-4bc3-8574-af2b72f7cd57",
            },
          ],
        },
      },
    };
  },
};
</script>

<style>
</style>