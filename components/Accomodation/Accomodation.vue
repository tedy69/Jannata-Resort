<template>
  <section
    id="home_accommodation"
    data-name="BlockFullscreenComponent"
    class="
      section
      block-fullscreen
      bg-blue-dark bg-image-section-two
      reveal
      section___container
      q_active
    "
  >
    <div class="q-container container-inner">
      <div class="columns">
        <div class="column">&nbsp;</div>
        <div class="column is-7">
          <h1 class="section-headline rev_item">THE STAY</h1>
          <div class="rev_item">
            <p v-html="data.model.description"></p>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column villas-container">
          <GridImage :data="data" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import GridImage from "./GridImage.vue";
export default {
  data() {
    return {
      data: {
        name: "Component Three",
        component_name: "ComponentThree",
        model: {
          title: "THE STAY",
          description:
            "<p>Stylish accommodation option at Jannata Resort &amp; Spa incorporates a choice of 16 Deluxe Suites, 2 Deluxe Family Suite and 2 Pool Villas to anticipate all of your holiday needs. All categories are the epitome of Balinese luxury with customized interiors and essential home comforts.</p><p><br></p><p>During pandemic, our resort has applied health protocols to ensure that our guests are safe. Before check-in, guests are encouraged to wash their hands and our team will check guests' body temperature.</p><p><br></p><p>All the team members of Jannata Resort maintain the cleanliness in all areas including hotel rooms, restaurant, spa, kitchen. Every 4 hours disinfectant spray and physical distancing towards our pool decks, restaurant chairs, spa outlets are applied to ensure that our resort is in hygiene circumstance.</p><p><br></p><p>Masks, face shields, hand sanitizer and also washing hands counter are fully prepared to welcome the new normal era ensuring all guests and staffs are safe and healthy.<br></p><p><br></p>",
          dataSlider: [
            {
              title: "Slider Title",
              link: {
                title: "Deluxe Suite",
                url: "https://jannataresort.com/en/accommodation/deluxe-suite",
              },
              featured: {
                id: "5fa4f6979dae8c603924cc4d",
                created_at: "2020-11-06 07:09:11",
                updated_at: "2020-11-06 07:09:11",
                title: null,
                description: null,
                size: 271951,
                type: "IMG",
                original: "deluxes-suite_home1.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/3-img-homepage/16046465505451",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/deluxes-suite_home1.jpg",
                  raw: "raw/deluxes-suite_home1.jpg",
                  blur: "blur/deluxes-suite_home1.jpg",
                  medium: "medium/deluxes-suite_home1.jpg",
                },
              },
              featured_hover: {
                id: "5fa51c299dae8c603924cc7b",
                created_at: "2020-11-06 09:49:29",
                updated_at: "2020-11-06 09:49:29",
                title: null,
                description: null,
                size: 279961,
                type: "IMG",
                original: "deluxes-suite_home3.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/3-img-homepage/16046561692221",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/deluxes-suite_home3.jpg",
                  raw: "raw/deluxes-suite_home3.jpg",
                  blur: "blur/deluxes-suite_home3.jpg",
                  medium: "medium/deluxes-suite_home3.jpg",
                },
              },
              id: "4d4ea967-dca0-45ad-bb85-990632a9c6b5",
            },
            {
              title: "Slider Title",
              link: {
                title: "Superior Room",
                url: "https://jannataresort.com/en/accommodation/deluxe-twin",
              },
              featured: {
                id: "5fa4f7989dae8c603924cc5c",
                created_at: "2020-11-06 07:13:28",
                updated_at: "2020-11-06 07:13:28",
                title: null,
                description: null,
                size: 312847,
                type: "IMG",
                original: "superior-room_home2.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/3-img-homepage/16046468078752",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/superior-room_home2.jpg",
                  raw: "raw/superior-room_home2.jpg",
                  blur: "blur/superior-room_home2.jpg",
                  medium: "medium/superior-room_home2.jpg",
                },
              },
              featured_hover: {
                id: "5fa4f7979dae8c603924cc5b",
                created_at: "2020-11-06 07:13:27",
                updated_at: "2020-11-06 07:13:27",
                title: null,
                description: null,
                size: 268773,
                type: "IMG",
                original: "superior-room_home1.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/3-img-homepage/16046468070171",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/superior-room_home1.jpg",
                  raw: "raw/superior-room_home1.jpg",
                  blur: "blur/superior-room_home1.jpg",
                  medium: "medium/superior-room_home1.jpg",
                },
              },
              id: "4d4ea967-dca0-45ad-bb85-990632a9c6b5",
            },
            {
              title: "Slider Title",
              link: {
                title: "Pool Villa",
                url: "https://jannataresort.com/en/accommodation/pool-villa",
              },
              featured: {
                id: "5edf4cbd9dae8c54fa82ddfe",
                created_at: "2020-06-09 08:47:57",
                updated_at: "2020-06-09 08:47:57",
                title: null,
                description: null,
                size: 1760246,
                type: "IMG",
                original: "DJI_0593_JPG.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/accomodation/pool-villa/15916924764352",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/DJI_0593_JPG.jpg",
                  raw: "raw/DJI_0593_JPG.jpg",
                  blur: "blur/DJI_0593_JPG.jpg",
                  medium: "medium/DJI_0593_JPG.jpg",
                },
              },
              featured_hover: {
                id: "5fa62cc69dae8c603924ccf2",
                created_at: "2020-11-07 05:12:38",
                updated_at: "2020-11-07 05:12:38",
                title: null,
                description: null,
                size: 287924,
                type: "IMG",
                original: "pool-villa_home2.jpg",
                path: "5e65fe109dae8c14dd70f7e0/pictures/3-img-homepage/16047259573881",
                is_aws: true,
                aws_file_url:
                  "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com",
                filename: {
                  big: "big/pool-villa_home2.jpg",
                  raw: "raw/pool-villa_home2.jpg",
                  blur: "blur/pool-villa_home2.jpg",
                  medium: "medium/pool-villa_home2.jpg",
                },
              },
              id: "4d4ea967-dca0-45ad-bb85-990632a9c6b5",
            },
          ],
        },
      },
    };
  },

  components: { GridImage },
};
</script>

<style>
#home_accommodation {
  padding: 150px 0;
}
.bg-image-section-two {
  position: relative;
  overflow: hidden;
}

.bg-blue-dark {
  background-color: #5f5c68;
}
.bg-image-section-two:before {
  background-image: url("https://jannataresort.com/_nuxt/img/a989adf.png");
  top: -1%;
  left: 20%;
  height: 100%;
  width: 300px;
}
.bg-image-section-two:after,
.bg-image-section-two:before {
  content: "";
  display: inline-block;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.4;
}
.bg-image-section-two:after {
  background-image: url("https://jannataresort.com/_nuxt/img/33d233c.png");
  bottom: -20%;
  right: 25%;
  height: 500px;
  width: 300px;
}
.bg-blue-dark .section-headline {
  color: #f0f0f5;
}
.bg-blue-dark p {
  color: #d8d6e2;
}
#home_accommodation .accommodations .accommodation-type {
  width: 33.33333%;
  float: left;
  height: 450px;
  position: relative;
}
#home_accommodation .accommodations .accommodation-type a {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
#home_accommodation
  .accommodations
  .accommodation-type
  a
  h4.accommodation-name {
  color: #fff;
  position: absolute;
  left: 20%;
  right: 20%;
  z-index: 2;
  bottom: 5%;
  font-size: 11px;
  line-height: 30px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0 0 35px;
  letter-spacing: 2px;
}
#home_accommodation .accommodations .accommodation-type a .accommodation-bg,
#home_accommodation
  .accommodations
  .accommodation-type
  a
  .accommodation-bg-change,
#home_accommodation .accommodations .accommodation-type a h4.accommodation-name,
#home_accommodation
  .accommodations
  .accommodation-type
  a
  h4.accommodation-name:before {
  transition: all 0.3s ease;
}
#home_accommodation .accommodations .accommodation-type a .accommodation-bg {
  width: 98%;
  position: absolute;
  right: 0;
  height: 100%;
  z-index: 1;
  background-color: transparent;
  overflow: hidden;
  background-size: 95%;
  background-position: 50%;
  background-repeat: no-repeat;
  margin: auto;
  background-size: auto 100%;
  transition: all 0.4s ease;
}
#home_accommodation
  .accommodations:hover
  .accommodation-type
  a
  .accommodation-bg-change {
  background-size: 300% 100%;
  transform: translateX(0);
  width: 100%;
}

#home_accommodation
  .accommodations
  .accommodation-type
  a
  .accommodation-bg-change {
  content: "";
  width: 98%;
  position: absolute;
  height: 100%;
  transform: translateX(-105%);
  background-color: #333107;
  background-size: cover;
}

#home_accommodation
  .accommodations
  .accommodation-type:first-child
  a
  .accommodation-bg-change {
  background-position: 0;
}
#home_accommodation
  .accommodations
  .accommodation-type:nth-child(2)
  a
  .accommodation-bg-change {
  background-position: 50%;
}
#home_accommodation
  .accommodations
  .accommodation-type:nth-child(3)
  a
  .accommodation-bg-change {
  background-position: 100%;
}
#home_accommodation
  .accommodations:hover
  .accommodation-type
  a
  h4.accommodation-name {
  transform: translateX(10px);
  opacity: 0.3;
}
#home_accommodation
  .accommodations
  .accommodation-type
  a
  h4.accommodation-name:before {
  content: "";
  display: block;
  height: 1px;
  width: 100px;
  background-color: hsla(0, 0%, 100%, 0.8);
  margin: 10px 0 0;
  position: relative;
  left: 0;
}

/*  Mobile */
@media screen and (max-width: 1024px) {
  #home_accommodation .accommodations .accommodation-type {
    height: 360px;
  }
  #home_accommodation
    .accommodations:hover
    .accommodation-type
    a
    h4.accommodation-name {
    opacity: 1;
    transform: translateX(0);
  }
  #home_accommodation
    .accommodations:hover
    .accommodation-type
    a:hover
    h4.accommodation-name:before {
    width: 100px;
  }
  #home_accommodation
    .accommodations:hover
    .accommodation-type
    a
    .accommodation-bg-change {
    transform: translateX(-105%);
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  #home_accommodation .accommodations .accommodation-type {
    margin: 0 auto 50px;
    height: 185px;
    width: calc(100% - 40px);
    float: none;
  }
  #home_accommodation .accommodations .accommodation-type a .accommodation-bg {
    background-size: 100%;
  }
  #home_accommodation
    .accommodations
    .accommodation-type
    a
    h4.accommodation-name {
    left: 10%;
  }
}
@media screen and (max-width: 540px) {
  #home_accommodation {
    padding: 50px 0;
  }
  #home_accommodation .section-headline {
    margin-bottom: 40px;
  }
  #home_accommodation .accommodations .accommodation-type {
    padding: 0;
    height: 150px;
    margin-bottom: 40px;
    width: 100%;
  }
}
</style>