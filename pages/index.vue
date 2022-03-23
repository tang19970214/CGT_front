<template>
  <section>
    <Banner :carouselArr="list" />

    <a>
      <img width="100%" src="~/static/images/introduce.png" alt="" />
    </a>
  </section>
</template>

<script>
export default {
  name: "index",
  async asyncData({ $api, route }) {
    // SEO
    const seoRes = await $api.webSEO.load({ WebPath: route.name });
    const seoList = seoRes.data.result || {};

    // list
    const listQuery = {
      page: 1,
      limit: 999,
    };
    const res = await $api.banner.load(listQuery);
    const { code, data } = res.data;
    if (code !== 200) return;
    return { seoList, list: data };
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.index")}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.index")}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.index")}` },
        { name: "keywords", content: this.seoList.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList.seoDescription || "" },
      ],
    };
  },
  data() {
    return {};
  },
};
</script>
