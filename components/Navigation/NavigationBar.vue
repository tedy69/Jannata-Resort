<template>
  <div
    id="navContent"
    style="transform: translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)"
  >
    <div class="q-container container-inner">
      <div class="language-container">
        <a href="/en/homepage" class="active"> EN </a
        ><a href="/fr/homepage" class=""> FR </a
        ><a href="/ru/domashnyaya-stranitsa" class=""> RU </a
        ><a href="/jp/homepage" class=""> JP </a
        ><a href="/de/homepage" class=""> DE </a>
      </div>
      <div id="menu_screen">
        <div
          v-if="hoveredMenu"
          class="screen_item"
          :style="{
            backgroundImage: `url(${data.image})`,
            opacity: 1,
          }"
        ></div>
      </div>
      <div class="columns">
        <div class="column">
          <ul class="main_nav">
            <li
              v-for="item in menu_list"
              :key="item.name + ' navContent'"
              @mouseover="hoveredMenuList(item)"
              @mouseleave="hoveredMenu = false"
            >
              <span class="q_split"
                ><span class="q_split_wrap"
                  ><a :href="item.link">{{ item.name }}</a></span
                ></span
              >
            </li>
          </ul>
        </div>
        <div class="column">
          <h5>Accommodations</h5>
          <ul class="main_nav">
            <li
              v-for="item in menu_list_accomodation"
              :key="item.name + ' navContent'"
              @mouseover="hoveredMenuList(item)"
              @mouseleave="hoveredMenu = false"
            >
              <span class="q_split"
                ><span class="q_split_wrap"
                  ><a :href="item.link">{{ item.name }}</a></span
                ></span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hoveredMenu: false,
      data: {},
      menu_list: [
        {
          name: "Homepage",
          link: "/en/homepage",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839890897111/big/497791fc-9913-4222-aab1-04a242ab0905.jpg",
        },
        {
          name: "Our Story",
          link: "/en/our-story",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839891402451/big/d1276b64-27bc-4c45-96fd-6b509414815f.jpg",
        },
        {
          name: "Exclusive Deals",
          link: "/en/exclusive-deals",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839891949331/big/ee593781-7b4a-4913-9a34-c8089d48881f.jpg",
        },
        {
          name: "Spa & Yoga",
          link: "/en/spa-yoga",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15955727747142/big/Spa.jpeg",
        },
        {
          name: "Amateras Dining",
          link: "/en/amateras-dining",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839892950111/big/dabfeefe-8d8a-4807-9461-6935887f6443.jpg",
        },
        {
          name: "Wedding",
          link: "/en/wedding",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839893417411/big/26c85850-dc44-4091-9a28-7e19929e5a19.jpg",
        },
        {
          name: "Ubud & Beyond",
          link: "/en/ubud-beyond",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839893862141/big/8210cc2b-1ed4-4e3c-923c-06e146ded6ac.jpg",
        },
        {
          name: "Location & Contact",
          link: "/en/location-contact",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15839894353531/big/01d07a63-a15d-41ba-b37c-666780d38f8e.jpg",
        },
      ],
      menu_list_accomodation: [
        {
          name: "Pool Villa",
          link: "/en/accommodation/pool-villa",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15846171336191/big/b13efd11-4c1d-4dca-85d3-c27153b0fcf8.jpg",
        },
        {
          name: "Deluxe Suite",
          link: "/en/accommodation/deluxe-suite",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15955727741741/big/Deluxe.jpeg",
        },
        {
          name: "Superior Room",
          link: "/en/accommodation/superior-room",
          image:
            "https://vold-chain-hotel.s3-ap-southeast-1.amazonaws.com/5e65fe109dae8c14dd70f7e0/pictures/hover/15846172989141/big/65babf25-94c1-4149-bbe4-63843d40cabc.jpg",
        },
      ],
    };
  },
  watch: {
    show(val) {
      var tl = gsap
        .timeline({
          paused: false,
          reversed: true,
          onReverseComplete() {
            gsap.set("#navContent", {
              transform: "translate(100%, 0%) matrix(1, 0, 0, 1, 0, 0)",
            });
          },
        })
        .set("#navContent", { transform: "matrix(1, 0, 0, 1, 0, 0)" })
        .fromTo(
          "#navContent",
          { x: 200 },
          {
            x: 0,
            duration: 1,
          }
        )
        .fromTo(
          "#navContent",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
          },
          0
        );
      if (val === true) {
        tl.play();
      } else {
        tl.reverse();
      }
    },
  },
  mounted() {
    this.$axios
      .get("/homepage.json")
      .then((response) => {
        this.data = response.data;
        console.log(this.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    hoveredMenuList(item) {
      this.data = item;
      this.hoveredMenu = true;
    },
  },
};
</script>

<style>
#navContent {
  width: 80%;
  background: #323037;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

#navContent,
#navOverlay {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
}

.language-container {
  position: absolute;
  text-transform: uppercase;
  top: 60px;
}

#navContent #menu_screen {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 60%;
  height: 70%;
  max-height: 500px;
  background: rgba(0, 0, 0, 0.1);
}

#navContent #menu_screen .screen_item {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background: no-repeat 50%;
  background-size: cover;
}

#navContent .main_nav {
  margin: 0;
  padding: 0;
}

.q_split,
.q_split_wrap {
  display: block;
}

.q_split {
  overflow: hidden;
}

#navContent .main_nav li a {
  display: block;
  font: 400 20px/2 "Playfair Display", serif;
  color: #d8d6e2;
  text-transform: uppercase;
  letter-spacing: 3px;
  transition: all 0.2s ease;
  position: relative;
}

#navContent h5 {
  color: #d8d6e2;
  opacity: 0.3;
}

.language-container a.active {
  color: #679334;
}

.language-container a {
  color: #d8d6e2;
  padding: 0 5px;
}

/* Mobile */

@media screen and (max-width: 768px) {
  .language-container {
    top: 20px;
    right: 10px;
  }
}

@media screen and (max-width: 540px) {
  .navbar-header {
    display: none;
  }
  #navContent {
    width: 100%;
  }
}
</style>