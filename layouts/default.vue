<template>
  <client-only>
    <section class="w-full min-h-screen font-sans bg-[#E5E5E5] bg-no-repeat bg-top bg-fixed bg-cover">
      <!-- <Loading /> -->
      <Header />
      <Nuxt class="w-full mx-auto pb-4 pt-0.5 md:pt-10 box-border min-h-[calc(100vh-112px-64px)] md:min-h-[calc(100vh-112px-80px)] lg:min-h-[calc(100vh-112px-112px)]" />
      <Footer />

      <!-- goTop -->
      <div v-if="showGoTop" class="animate-bounce fixed right-4 bottom-28 w-10 h-10 md:w-12 md:h-12 rounded flex items-center justify-center z-40 cursor-pointer md:text-2xl bg-white border border-[#e6e6e6]" @click="goTop()">
        <fa class="text-[#808080]" :icon="['fas', 'arrow-up']" />
      </div>
    </section>
  </client-only>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      // openHeaderBg: false,
      showGoTop: false,
      // scrollTop: "",
    };
  },
  // watch: {
  //   scrollTop(val) {
  //     if (+val > 50) {
  //       this.openHeaderBg = true;
  //     } else {
  //       this.openHeaderBg = false;
  //     }

  //     if (+val > 500) {
  //       this.showGoTop = true;
  //     } else {
  //       this.showGoTop = false;
  //     }
  //   },
  // },
  computed: {
    ...mapState(["locale"]),
  },
  methods: {
    ...mapActions(["INIT_LOCALE"]),
    init() {
      this.INIT_LOCALE();
      this.$i18n.locale = this.locale;
    },
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    },
    goTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.init();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>