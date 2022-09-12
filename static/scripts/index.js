function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i = 0; i < children.length; i++) {
    if (children[i] == node) return num;
    if (children[i].nodeType == 1) num++;
  }
  return -1;
}

function eq(index) {
  if (index >= 0 && index < this.length) return this[index];
  else return -1;
}

// var q_slide = document.getElementById("q_slide");
// console.log(q_slide);

// if (q_slide) {
//   qSlide(q_slide);
// }

// function preventDefault(e) {
//   e = e || window.event;
//   if (e.preventDefault) e.preventDefault();
//   e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

function headerAnimate() {
  var pageHeader = document.getElementById("page-top-banner");
  if (pageHeader) {
    var title = pageHeader.querySelector(".q_splitText");
    var text = pageHeader.querySelector("p");
    var btn = pageHeader.querySelector(".link");

    q_animate(title, "splitLeft", 100);
    q_animate(text, "slideTop", 1);
    if (btn) {
      q_animate(btn, "slideTop", 1);
    }
  }
}

function q_animate(element, animation, delay) {
  if (animation === "stagTop") {
    TweenMax.staggerFromTo(
      element,
      1,
      { alpha: 0, y: 100 },
      { alpha: 1, y: 0, ease: Expo.easeOut, delay: delay },
      0.1
    );
  }

  if (animation === "slideTop") {
    TweenMax.fromTo(
      element,
      1.5,
      { alpha: 0, y: 50 },
      { alpha: 1, y: 0, ease: Expo.easeOut, delay: delay }
    );
  } else if (animation === "sideLeft") {
    TweenMax.staggerFromTo(
      element,
      1.5,
      { alpha: 0, x: 120 },
      { alpha: 1, x: 0, ease: Expo.easeOut, delay: delay },
      0.2
    );
  } else if (animation === "sideRight") {
    TweenMax.staggerFromTo(
      element,
      1.5,
      { alpha: 0, x: -120 },
      { alpha: 1, x: 0, ease: Expo.easeOut, delay: delay },
      0.2
    );
  } else if (animation === "clipRight") {
    TweenMax.staggerTo(
      element,
      1,
      {
        clipPath: "inset(0px 0px 0px 0px)",
        ease: Expo.easeInOut,
        delay: delay,
      },
      0.1
    );
  } else if (animation === "splitLeft") {
    var content = element.textContent;
    var letters = content.split("");
    element.innerHTML = "";

    for (var idx = 0; idx < letters.length; idx++) {
      element.innerHTML += "<span>" + letters[idx] + "</span>";
    }

    var chars = element.querySelectorAll("span");

    TweenMax.set(chars, { x: 110, alpha: 0 });

    setTimeout(function () {
      TweenMax.staggerTo(
        chars,
        1.5,
        { x: 0, alpha: 1, ease: Power4.easeInOut },
        0.03
      );
    }, delay);
  } else if (animation === "splitRight") {
    var content = element.textContent;
    var letters = content.split("");
    element.innerHTML = "";

    for (var idx = 0; idx < letters.length; idx++) {
      element.innerHTML += "<span>" + letters[idx] + "</span>";
    }

    var chars = element.querySelectorAll("span");

    TweenMax.set(chars, { x: -110, alpha: 0 });

    setTimeout(function () {
      TweenMax.staggerTo(
        chars,
        1.5,
        { x: 0, alpha: 1, ease: Power4.easeInOut },
        -0.03
      );
    }, delay);
  }
}

function animateText() {
  var lettr = document.getElementById("lettr");
  var lines = lettr.querySelectorAll("font");
  for (var x = lines.length - 1; x >= 0; x--) {
    var line = lines[x];
    lineHandler(line);
  }
  function lineHandler(line) {
    var text = line.textContent;
    var wordSplit = text.split("");
    line.innerHTML = "";
    for (w = 0; w < wordSplit.length; w++) {
      line.innerHTML += "<span>" + wordSplit[w] + "</span>";
    }
    chars = line.querySelectorAll("span");
    for (var x = chars.length - 1; x >= 0; x--) {
      var char = chars[x];
      charHandler(char, x);
    }
    function charHandler(char, x) {
      char.style.transitionDelay = x * 0.1 + "s";
    }
  }
}

function init() {
  var loadOverlay = document.getElementById("overlay_body");

  function id(v) {
    return document.getElementById(v);
  }

  function className(v) {
    return document.getElementsByClassName(v);
  }

  if (loadOverlay) {
    (function () {
      function loadbar() {
        var cont = className("content_outer_wraper"),
          ovrl = id("overlay_body"),
          logo = id("img_logo"),
          cvrl = id("content-overlay"),
          pvrl = id("progress-overlay"),
          itms = id("loading-items"),
          imgOverlay = className("img_overlay"),
          loaderHolder = className("loader_holder"),
          loaderLine = className("load_line"),
          imgBefore = className("load_img"),
          lettersLoad = id("progstat"),
          c = 0,
          img = document.images,
          tot = img.length;

        if (tot == 0) {
          setTimeout(function () {
            doneLoading();
          }, 2000);
        }

        setTimeout(function () {
          TweenMax.to(imgOverlay, 0, { opacity: 1, delay: 0 });
          TweenMax.to(logo, 0, { opacity: 1, ease: Expo.easeInOut, delay: 0 });
          TweenMax.to(lettersLoad, 0, {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 0,
          });
        }, 100);

        setTimeout(function () {
          TweenMax.to(cont, 0, {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
        }, 250);

        setTimeout(function () {
          TweenMax.to(imgBefore, 1.5, {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
        }, 500);

        if (matchMedia("only screen and (max-width: 991px)").matches) {
          TweenMax.to(lettersLoad, 1, {
            letterSpacing: "1px",
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
        } else {
          TweenMax.to(lettersLoad, 1, {
            letterSpacing: "3px",
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
        }

        TweenMax.to(loaderLine, 2, { scaleX: 1, opacity: 1, delay: 0.5 });
        TweenMax.to(imgOverlay, 1, {
          height: 0,
          opacity: 1,
          ease: Expo.easeInOut,
          delay: 0,
        });
        TweenMax.to(imgBefore, 1, {
          opacity: 1,
          ease: Expo.easeInOut,
          delay: 0,
        });

        function imgLoaded() {
          c += 1;
          var perc = ((100 / tot) * c) << 0;

          if (c === tot) {
            setTimeout(function () {
              doneLoading();
            }, 1000);
          }
        }

        function doneLoading() {
          TweenMax.to(loaderHolder, 1.5, {
            width: 0,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
          TweenMax.to(ovrl, 1.5, {
            width: 0,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
          TweenMax.to(pvrl, 1.5, {
            width: 0,
            ease: Expo.easeInOut,
            delay: 0.6,
          });
          TweenMax.to(cvrl, 1.5, {
            alpha: 0,
            ease: Power3.easeInOut,
            delay: 0.6,
          });
          TweenMax.to(itms, 1.3, {
            alpha: 0,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
          setTimeout(function () {
            ovrl.style.display = "none";
            cvrl.style.display = "none";
          }, 2200);
        }
        for (var i = 0; i < tot; i++) {
          var tImg = new Image();
          tImg.onload = imgLoaded;
          tImg.onerror = imgLoaded;
          tImg.src = img[i].src;
        }
      }

      document.addEventListener("DOMContentLoaded", loadbar, false);
    })();
  }

  var loadOverlayInsidePage = document.getElementById("inside_page_loader");

  if (loadOverlayInsidePage) {
    (function () {
      function insidePageLoad() {
        var cont = className("content_outer_wraper"),
          ovrlInside = id("inside_page_loader"),
          contentTop = className("inside_page_content"),
          bannerInside = className("inside_page_banner"),
          headingBottom = className("spilt_text_bottom");
        // headingBottom = className('spilt_text_bottom');
        // headingBottomBefore	= getBefore('spilt_text_bottom');

        TweenMax.to(ovrlInside, 0, {
          opacity: 0,
          zIndex: -1,
          ease: Expo.easeInOut,
          delay: 0.5,
        });

        TweenMax.to(headingBottom, 1.4, {
          className: "+=show",
          ease: Expo.easeInOut,
          delay: 2,
        });

        var bannerText = document.getElementById("inside_page_banner");

        if (bannerText) {
          function bannerTextAnim() {
            var headTop = bannerText.querySelector(".heading.top"),
              headBottom = bannerText.querySelector(".heading.bottom"),
              headBottomOne = bannerText.querySelector(".heading.bottom.one"),
              headBottomTwo = bannerText.querySelector(".heading.bottom.two");
            q_animate(headTop, "splitLeft", 800);
            q_animate(headBottom, "splitLeft", 1500);
          }
        }

        bannerTextAnim();

        setTimeout(function () {
          TweenMax.to(cont, 1.4, {
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
          TweenMax.to(bannerInside, 1.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut,
            delay: 0.5,
          });
          TweenMax.to(contentTop, 2, {
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut,
            delay: 0.6,
          });
        }, 250);
      }

      document.addEventListener("DOMContentLoaded", insidePageLoad, false);
    })();
  }
}

// pages slider
var pageSlider = document.getElementById("testimonial");
if (pageSlider) {
  var flkty = new Flickity(pageSlider, {
    // options
    pageDots: true,
    prevNextButtons: false,
    contain: true,
    wrapAround: true,
    autoPlay: 6000,
    selectedAttraction: 0.02,
    friction: 0.3,
  });
}

var popupSlider = document.querySelector(".popup-container");
if (popupSlider) {
  var flktyPopup = new Flickity(popupSlider, {
    // options
    pageDots: true,
    prevNextButtons: false,
    contain: true,
    wrapAround: true,
    autoPlay: 6000,
    selectedAttraction: 0.02,
    friction: 0.3,
  });
}

init();
