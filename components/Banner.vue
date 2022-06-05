<template>
  <section>
    <VueSlickCarousel :arrows="true" v-bind="settings" autoplay v-if="carouselArr.length > 0">
      <div v-for="item in carouselArr" :key="item.id" class="w-full relative">
        <a :href="!!item.links ? item.links : false" target="_blank">
          <img class="w-full pointer-events-none h-full object-cover" :src="`${imgUrl}/${item.files}`" :alt="item.title" />
        </a>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  components: {},
  props: {
    carouselArr: {
      type: Array,
    },
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,

      imgUrl: process.env.VUE_APP_IMG_URL,
      settings: {
        centerMode: true,
        centerPadding: "100px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        speed: 1000,
      },
    };
  },
  methods: {
    getScreenWidth() {
      this.screenWidth = document.body.clientWidth;

      if (this.screenWidth < 430) {
        this.settings.centerPadding = "20px";
      } else if (this.screenWidth < 768) {
        this.settings.centerPadding = "40px";
      } else {
        this.settings.centerPadding = "100px";
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.getScreenWidth);

    if (this.screenWidth < 430) {
      this.settings.centerPadding = "20px";
    } else if (this.screenWidth < 768) {
      this.settings.centerPadding = "40px";
    } else {
      this.settings.centerPadding = "100px";
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getScreenWidth);
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .slick {
    &-prev,
    &-next {
      width: 50px;
      height: 50px;
      background: rgba(30, 151, 194, 0.5);
      border-radius: 100%;
    }

    &-prev {
      left: 0;
      &::before {
        content: "\f053";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }
    }
    &-next {
      right: 0;
      &::before {
        content: "\f054";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }
    }

    &-arrow {
      transition: all 0.3s;
      z-index: 19;
      &::before {
        opacity: 1;
      }

      &:hover {
        background: rgba(51, 51, 51, 0.3);
      }
    }
  }
}
</style>
