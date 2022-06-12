<template>
  <section class="px-3 md:px-6">
    <Nuxt-child />
  </section>
</template>

<script>
export default {
  name: "news",
  async asyncData({ $api, route }) {
    if (process.server) {
      // SEO
      const seoRes = await $api.webSEO.load({ WebPath: route.name });
      const seoList = seoRes.data.result || {};
      return { seoList };
    }
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.news")}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.news")}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.news")}` },
        { name: "keywords", content: this.seoList?.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList?.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList?.seoDescription || "" },
      ],
    };
  },
};
</script>