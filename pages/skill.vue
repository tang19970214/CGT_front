<template>
  <section class="px-3 md:px-6 lg:px-0">
    <div class="w-full grid grid-cols-1 gap-3">
      <img class="w-full" :src="require(`~/static/images/skill${i}.png`)" alt="" v-for="i in 3" :key="i" />
    </div>

    <iframe class="w-full h-[30vh] md:h-[70vh] lg:h-[80vh] mt-5" src="https://www.youtube.com/embed/5H70ZAjz6Jc" title="【CGT 真空式脫泡攪拌機】~MJ-2000V" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </section>
</template>

<script>
export default {
  name: "skill",
  async asyncData({ $api, route }) {
    // SEO
    const seoRes = await $api.webSEO.load({ WebPath: route.name });
    const seoList = seoRes.data.result || {};

    return { seoList };
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.skill")}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.skill")}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.skill")}` },
        { name: "keywords", content: this.seoList.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList.seoDescription || "" },
      ],
    };
  },
};
</script>