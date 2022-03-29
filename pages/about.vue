<template>
  <section class="px-3 md:px-6 lg:px-0">
    <div class="w-full border border-[#d9d9d9] rounded bg-white p-5 shadow-md">
      <div class="pb-2 border-b border-[#d9d9d9]">
        <strong class="text-lg tracking-widest">{{ $t("menu.about") }}</strong>
      </div>

      <!-- 鉅鴻科技 -->
      <div class="w-auto flex flex-col md:flex-row items-center gap-2 px-4 md:px-0 mt-2 mb-8">
        <img class="w-28" src="~/static/images/logo_footer.png" alt="" />

        <div class="flex flex-col items-center md:items-start text-center gap-1">
          <h1 class="text-xl">鉅鴻科技 CGT TECHNOLOGY</h1>
          <p class="text-sm text-[#808080]">{{ $t("about.desc") }}</p>
        </div>
      </div>

      <!-- 專業研發｜技術領先｜以客為尊｜品質保證 -->
      <div class="w-full text-center">
        <strong class="text-2xl text-primary">{{ $t("about.title") }}</strong>

        <div class="w-full flex flex-col gap-5 text-left mt-4">
          <p>{{ $t("about.content1") }}</p>
          <p>{{ $t("about.content2") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about",
  async asyncData({ $api, route }) {
    // SEO
    const seoRes = await $api.webSEO.load({ WebPath: route.name });
    const seoList = seoRes.data.result || {};

    return { seoList };
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜關於`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜關於` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜關於` },
        { name: "keywords", content: this.seoList.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList.seoDescription || "" },
      ],
    };
  },
};
</script>