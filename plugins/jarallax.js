import "object-fit-images";
import { jarallax } from "jarallax";

window.addEventListener("load", function (event) {
  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.2,
  });
});
