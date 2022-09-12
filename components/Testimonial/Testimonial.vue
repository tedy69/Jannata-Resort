<template>
  <section
    id="page_summary"
    data-name="SlideTestimonialComponent"
    class="
      section
      our-story-summary
      bg-image-section-one
      testi
      section___container
    "
  >
    <div class="q-container container-inner">
      <div class="columns type-1">
        <div id="testimonial" class="column" tabindex="0">
          <div
            class="slide"
            v-for="(item, index) in data.model.dataSlider"
            :key="item.title + index"
          >
            <p>
              {{ item.description }}
            </p>
            <small>{{ item.title }}</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: "Component Six",
        component_name: "ComponentSix",
        model: {
          dataSlider: [
            {
              title: " — Sara B, Germany",
              description:
                "This hotel is just so beautiful and peaceful. The staff is amazing, very kind and competent, always with a smile on their face and always there for you. The room we were in was beautiful, clean, very big. The bathroom was to die for, and the view breathtaking.",
              id: "e19d53e1-999c-4703-8aef-7265f886531d",
            },
            {
              title: "— Nikita B, Australia",
              description:
                "The resort excelled in all ways. The staff is super friendly &amp;amp; helpful, the food is amazing (specially their Al carte breakfast), the room and infinity pool has fantastic views overlooking the rice paddy fields and the jungle.",
              id: "e19d53e1-999c-4703-8aef-7265f886531d",
            },
            {
              title: "— Michael S, Canada",
              description:
                "I loved Jannata , i loved the people providing the service there, Always smiling always nice, they are so friendly that i really missed them during the rest of my trip and they made it harder for the other hotel staff to beat their friendly nice service.",
              id: "e19d53e1-999c-4703-8aef-7265f886531d",
            },
            {
              title: "— Laurenbull29, Germany",
              description:
                "We could not thank all the staff at Jannata Resort and Spa enough! We stayed for 3 night at the end of October for our Honeymoon. We was upgraded to a pool villa for our stay and treated like royalty, Our private infinity pool was so beautiful and the views from our villa were breath taking!",
              id: "e19d53e1-999c-4703-8aef-7265f886531d",
            },
            {
              title: "— Laurenbull29, Germany",
              description:
                "We could not thank all the staff at Jannata Resort and Spa enough! We stayed for 3 night at the end of October for our Honeymoon. We was upgraded to a pool villa for our stay and treated like royalty, Our private infinity pool was so beautiful and the views from our villa were breath taking!",
              id: "e19d53e1-999c-4703-8aef-7265f886531d",
            },
          ],
        },
      },
    };
  },
};
</script>

<style>
#page_summary {
  position: relative;
  z-index: 1;
  background: #f0f0f5;
}
.our-story-summary {
  padding-bottom: 150px;
}
#page_summary .type-1 .column {
  max-width: 570px;
  margin: auto;
  text-align: center;
}
#testiTwo {
  position: relative;
}
.testi .slide {
  width: 100%;
  padding-bottom: 50px;
}
#page_summary .type-1 p {
  text-align: center;
  margin: 0;
  font-size: 20px;
}
#page_summary .type-1 .pages-headline,
#page_summary .type-1 p {
  font-family: "Playfair Display", serif;
}
#page_summary .type-1 small {
  display: block;
  font-size: 15px;
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .our-story-summary {
    padding-bottom: 40px;
  }
  #page_summary .type-1 p {
    font-size: 14px;
    line-height: 26px;
  }
}

@media screen and (max-width: 540px) {
  #page_summary .type-1 p {
    text-align: left;
    font-size: 12px;
    line-height: 24px;
  }
  #page_summary .type-1 small {
    font-size: 12px;
  }
}
</style>