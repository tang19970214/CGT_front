<template>
  <section>
    <VueSlickCarousel :arrows="true">
      <div v-for="item in carouselArr" :key="item.id" class="w-full relative">
        <a :href="item.links" class="pointer-events-none" target="_blank">
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
      imgUrl: process.env.VUE_APP_IMG_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .slick {
    &-prev,
    &-next {
      width: 40px;
      height: 70px;
      background: rgba(51, 51, 51, 0.1);
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
