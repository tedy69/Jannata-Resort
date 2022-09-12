<template>
  <div>
    <div class="award">
      <a
        href="https://www.kayak.co.uk/2020-Best-Small-Hotel.2632503.113.awards"
        target="_blank"
        data-v-d995c41c=""
        ><img
          src="https://jannataresort.com/images/award.png"
          data-v-d995c41c=""
      /></a>
    </div>
    <div>
      <div
        id="mainNav"
        class="navbar-header"
        v-if="!showNavigation"
        @click="showNavigation = !showNavigation"
      >
        <div class="navbar-header-toggle">
          <div class="navbar-btn">
            <div class="navbar-btn-bars">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="navbar-btn-label">
              <span class="navbar-btn-label-menu">Menu</span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="bookNow"
        v-if="!showNavigation"
        class="navbar-header reservation"
      >
        <div class="navbar-header-toggle">
          <div class="navbar-btn">
            <div class="navbar-btn-bars">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="navbar-btn-label">
              <span class="navbar-btn-label-menu">Book Now</span>
            </div>
          </div>
        </div>
      </div>
      <div
        id="closePop"
        v-if="showNavigation"
        @click="showNavigation = !showNavigation"
        class="navbar-header close"
      >
        <div class="navbar-header-toggle">
          <div class="navbar-btn">
            <div class="navbar-btn-bars">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div class="navbar-btn-label">
              <span class="navbar-btn-label-menu">Close</span>
            </div>
          </div>
        </div>
      </div>
      <div id="navOverlay" style="opacity: 0"></div>
      <NavigationBar :show="showNavigation" />
      <NavigationMobile
        @click-nav-mobile="(show) => (showNavigation = show)"
        v-if="!showNavigation"
      />
    </div>
    <div
      id="mainContent"
      data-scroll-section-inview
      style="
        transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        opacity: 1;
        pointer-events: all;
      "
    >
      <header id="header" class="header">
        <div class="q-container">
          <div class="columns">
            <div class="column logo-wrap">
              <a href="/en" class="logo"
                ><img
                  src="https://jannataresort.com/_nuxt/img/1336c61.png"
                  alt=""
              /></a>
            </div>
          </div>
        </div>
      </header>
      <div>
        <Banner />
        <CardStory />
        <Accomodation />
        <Dinner />
        <Relaxing />
        <Testimonial />
        <PopUpHomepage />
      </div>
    </div>
  </div>
</template>

<script>
import pageTransition from "~/mixins/page-transitions.js";
import Vue from "vue";
import NavigationMobile from "../components/Navigation/NavigationMobile.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const enter = (el, done) => {
  console.info("enter child animation");
  let tl = Vue.prototype.$anime.timeline({
    duration: 350,
    easing: "easeInSine",
    complete: done,
  });

  tl.add({
    targets: ".logo",
    opacity: 1,
  })
    .add({
      targets: ".title",
      opacity: 1,
    })
    .add({
      targets: ".subtitle",
      opacity: 1,
    })
    .add({
      targets: ".links",
      opacity: 1,
    });
};

export default {
  data() {
    return {
      showNavigation: false,
    };
  },
  mixins: [pageTransition(enter)],
  mounted() {
    if (!process.server) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "/scripts/index.js";
      document.head.appendChild(script);
    }
    var q_slide = document.getElementById("q_slide");
    if (q_slide) {
      this.qSlide(q_slide);
    }
    this.handleAnimation();
  },
  methods: {
    qSlide(q_slide) {
      q_slide.classList.add("q_slide");
      // global vars
      var slides = q_slide.querySelectorAll(".slide");
      var pagination = q_slide.querySelector(".pagination");
      // trigger resize
      function triggerResize() {
        var ev = document.createEvent("HTMLEvents");
        ev.initEvent("resize", true, false);
        window.dispatchEvent(ev);
      }
      // autoplay function
      function autoPlay() {
        if (q_slide.getAttribute("autoplay") != null) {
          var q_slideDuration = 6000;
          var timeout = setTimeout(function () {
            q_slideNext(q_slide, false, true);
          }, q_slideDuration);
        }
      }
      // parallax init
      var q_slideFriction = 1; // no parallax
      if (q_slide.getAttribute("parallax") != null) {
        var q_slideFriction = q_slide.getAttribute("parallax") || 0.25;
      }
      // opacity init
      if (q_slide.getAttribute("opacity") != null) {
        var slideOpacity = q_slide.getAttribute("opacity") || 0.6;
      }
      // pagination update function
      function pageUpdate() {
        if (pagination) {
          var pages = pagination.querySelectorAll(".item");
          var activePage = pagination.querySelector(".q_current");
          var newSlide = q_slide.querySelector(".is-new");
          var index = indexInParent(newSlide);
          activePage.classList.remove("q_current");
          pages[index].classList.add("q_current");
        }
      }
      // switch slide function
      function q_slideSwitch(q_slide, index, auto) {
        if (q_slide.getAttribute("wait") === "true") return;
        var activeSlide = q_slide.querySelector(".q_current");
        var activeSlideImage = activeSlide.querySelector(".image-container");
        var newSlide = eq.call(slides, index);
        var newSlideImage = newSlide.querySelector(".image-container");
        var newSlideContent = newSlide.querySelector(".slide-content");
        var newSlideElements = newSlide.querySelectorAll(".caption > h1");
        var newSlideElementsThree = newSlide.querySelectorAll(".caption > p");
        if (newSlide === activeSlide) return;
        newSlide.classList.add("is-new");
        var timeout = 0;
        clearTimeout(timeout);
        pageUpdate();
        q_slide.setAttribute("wait", "true");
        if (indexInParent(newSlide) > indexInParent(activeSlide)) {
          // next slide
          var newSlideRight = 0;
          var newSlideLeft = "auto";
          var newSlideImageLeft =
            -q_slide.clientWidth * (1 - q_slideFriction) + "px";
          var newSlideContentLeft = "auto";
          var newSlideContentRight = 0;
          var activeSlideImageLeft =
            -q_slide.clientWidth * q_slideFriction + "px";
          var sideAnim = "sideLeft";
          var splitAnim = "splitLeft";
        } else {
          // prev slide
          var newSlideRight = "";
          var newSlideLeft = 0;
          var newSlideImageLeft = -q_slide.clientWidth * q_slideFriction + "px";
          var newSlideContentLeft = 0;
          var newSlideContentRight = "auto";
          var activeSlideImageLeft =
            q_slide.clientWidth * q_slideFriction + "px";
          var sideAnim = "sideRight";
          var splitAnim = "splitRight";
        }
        newSlide.style.display = "block";
        newSlide.style.width = 0;
        newSlide.style.right = newSlideRight;
        newSlide.style.left = newSlideLeft;
        newSlide.style.zIndex = 2;
        newSlideImage.style.width = q_slide.clientWidth + "px";
        activeSlideImage.style.transform = "translateX(0)";
        TweenMax.set(newSlideImage, { x: newSlideImageLeft });
        if (slideOpacity) {
          newSlideImage.style.opacity = slideOpacity;
        }
        newSlideContent.style.width = q_slide.clientWidth + "px";
        newSlideContent.style.right = newSlideContentRight;
        newSlideContent.style.left = newSlideContentLeft;
        if (slideOpacity) {
          TweenMax.to(activeSlideImage, 1.5, {
            x: activeSlideImageLeft,
            opacity: slideOpacity,
            ease: Expo.easeInOut,
          });
        } else {
          TweenMax.to(activeSlideImage, 1.5, {
            x: activeSlideImageLeft,
            ease: Expo.easeInOut,
          });
        }
        TweenMax.to(newSlide, 1.5, {
          width: q_slide.clientWidth,
          ease: Expo.easeInOut,
        });
        TweenMax.to(newSlideImage, 1.5, {
          x: 0,
          opacity: 1,
          ease: Expo.easeInOut,
          onComplete: function () {
            // switch active class
            newSlide.classList.add("q_current");
            newSlide.classList.remove("is-new");
            activeSlide.classList.remove("q_current");
            newSlideElements[0].removeAttribute("style");
            newSlideElementsThree[0].removeAttribute("style");
            newSlide.removeAttribute("style");
            // reset all styles
            newSlideImage.removeAttribute("style");
            newSlideContent.removeAttribute("style");
            activeSlideImage.removeAttribute("style");
            q_slide.setAttribute("wait", "false");
            if (auto) {
              autoPlay();
            }
          },
        });
        // caption animation
        if (q_slide.getAttribute("animate") != null) {
          var animation = q_slide.getAttribute("animate") || "stagTop";
          if (q_slide.getAttribute("animate") === "side") {
            var animation = sideAnim;
          }
          var letters = newSlide.querySelectorAll(".q_splitText");
          if (letters) {
            for (var i = letters.length - 1; i >= 0; i--) {
              var letter = letters[i];
              q_animate(letter, splitAnim, 100);
            }
          }
          q_animate(newSlideElements, animation, 0.3);
          q_animate(newSlideElementsThree, animation, 1.2);
        }
      }
      // next/prev slide switch calls
      function q_slideNext(q_slide, previous, auto) {
        var activeSlide = q_slide.querySelector(".q_current");
        var newSlide = null;
        if (previous) {
          newSlide = activeSlide.previousElementSibling;
          if (!newSlide) {
            newSlide = slides[slides.length - 1];
          }
        } else {
          newSlide = activeSlide.nextElementSibling;
          if (!newSlide) newSlide = slides[0];
        }
        q_slideSwitch(q_slide, indexInParent(newSlide), auto);
        triggerResize();
      }
      for (var i = slides.length - 1; i >= 0; i--) {
        var slide = slides[i];
        slide.classList.add("is-loaded");
      }
      // pagination click event
      if (pagination) {
        var pages = pagination.querySelectorAll(".item");
        for (var i = pages.length - 1; i >= 0; i--) {
          var page = pages[i];
          page.addEventListener("click", function (e) {
            q_slideSwitch(q_slide, indexInParent(e.target));
            triggerResize();
          });
        }
      }
      autoPlay(); // autoplay init
    },

    handleAnimation() {
      gsap.registerPlugin(ScrollTrigger);

      function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
          y = direction * 100;
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(
          elem,
          { x: x, y: y, autoAlpha: 0 },
          {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto",
          }
        );
      }
      function animateClipFrom(elem, direction) {
        direction = direction || 1;
        var x = -200,
          y = 0;
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(
          elem,
          { x: x, y: y, autoAlpha: 0 },
          {
            duration: 2.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto",
          }
        );
      }
      function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
      }
      gsap.utils.toArray(".rev_clip").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
          trigger: elem,
          onEnter: function () {
            animateClipFrom(elem);
          },
          onEnterBack: function () {
            animateClipFrom(elem, -1);
          },
          onLeave: function () {
            hide(elem);
          }, // assure that the element is hidden when scrolled into view
        });
      });
      gsap.utils.toArray(".rev_item").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
          trigger: elem,
          onEnter: function () {
            animateFrom(elem);
          },
          onEnterBack: function () {
            animateFrom(elem, -1);
          },
          onLeave: function () {
            hide(elem);
          }, // assure that the element is hidden when scrolled into view
        });
      });
    },
  },
  components: { NavigationMobile },
};
</script>

<style lang="scss" scoped>
.award {
  position: fixed;
  top: 15px;
  right: 75px;
  z-index: 9999;
  width: 80px;
  height: 80px;
}

.navbar-header {
  z-index: 5;
  position: fixed;
  right: -20px;
  background-color: #fff;
  cursor: pointer;
  z-index: 70;
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  width: 80px;
  height: 110px;
  top: 30%;
  border: none;
  transform: translateX(0) translateY(-100%);
  color: #000;
}

.navbar-header:hover {
  transform: translateX(-10px) translateY(-100%);
}
.navbar-header .navbar-btn {
  position: absolute;
  width: 29px;
  height: 14px;
  margin: 0;
  transition: top 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  top: auto;
  right: 35px;
  bottom: 75px;
  left: auto;
}
.navbar-header .navbar-btn-bars {
  position: absolute;
  right: 0;
  width: 65px;
  height: 15px;
  overflow: hidden;
}

.navbar-header .navbar-btn-bars div:first-child {
  top: 7px;
}
.navbar-header .navbar-btn-bars div:nth-child(3) {
  top: 14px;
}
.navbar-header:hover .navbar-btn-bars div {
  width: 30px;
}
.navbar-header:hover .navbar-btn-bars div:nth-child(2),
.navbar-header:hover .navbar-btn-bars div:nth-child(3) {
  width: 0;
}

.navbar-header .navbar-btn-bars div {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 1px;
  background-color: #000;
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
}

.navbar-header .navbar-btn-label {
  position: absolute;
  top: 40px;
  right: 0;
  opacity: 1;
  transition: color 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  font: 400 9px/1.3 "Open Sans", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateX(7px) rotate(-90deg);
}

.navbar-header .navbar-btn-label span {
  display: block;
  width: 40px;
}

.navbar-header.reservation {
  transform: translateX(0) translateY(0);
  background-color: #5f5c68;
  color: #fff;
  height: 150px;
}

.navbar-header.reservation .navbar-btn {
  bottom: 110px;
}

.navbar-header.reservation:hover {
  transform: translateX(-10px) translateY(0);
  background-color: #679334;
}
.navbar-header .navbar-btn-bars {
  position: absolute;
  right: 0;
  width: 65px;
  height: 15px;
  overflow: hidden;
}
.navbar-header.reservation .navbar-btn-bars div {
  background-color: #fff;
}

.navbar-header.reservation .navbar-btn-bars div:first-child {
  right: 2px;
  width: 0;
}

.navbar-header .navbar-btn-bars div:first-child {
  top: 7px;
}
.navbar-header.reservation .navbar-btn-bars div:nth-child(2) {
  width: 20px;
  transform: translateX(-5px) translateY(0) rotate(45deg);
}

.navbar-header.reservation .navbar-btn-bars div:nth-child(3) {
  width: 20px;
  transform: translateX(-5px) translateY(0) rotate(-45deg);
}

.navbar-header.reservation:hover .navbar-btn-bars div:first-child {
  width: 30px;
}

.navbar-header.reservation:hover .navbar-btn-bars div:nth-child(2) {
  width: 20px;
  transform: translateX(2px) translateY(0) rotate(45deg);
}
.navbar-header.reservation:hover .navbar-btn-bars div:nth-child(3) {
  width: 20px;
  transform: translateX(2px) translateY(0) rotate(-45deg);
}
.navbar-header.reservation .navbar-btn-label {
  top: 60px;
  transform: translateX(22px) rotate(-90deg);
}

.navbar-header.reservation .navbar-btn-label span {
  display: block;
  width: 70px;
}

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

#header .logo-wrap {
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  z-index: 10;
}

.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
}

#header .logo-wrap .logo {
  display: inline-block;
  max-width: 120px;
}

body a:hover,
html a:hover {
  color: #679334;
}

.navbar-header.close {
  display: block;
  transform: translateX(0) translateY(-100%);
  background-color: transparent;
  color: #fff;
  right: -20px;
}

.navbar-header.close .navbar-btn-bars div {
  background-color: #fff;
}

// Mobile
@media screen and (max-width: 768px) {
  .award {
    top: auto;
    bottom: 30px;
    width: 60px;
    height: 60px;
    right: 15px;
  }
}

@media screen and (max-width: 540px) {
  #header .logo-wrap {
    display: none;
  }
}
</style>
