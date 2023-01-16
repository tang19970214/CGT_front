<template>
  <section class="px-3 md:px-6 lg:px-0 !py-4 bg-[url('~/static/images/about.jpeg')] bg-cover flex items-center">
    <div class="w-full md:max-w-[85%] xl:max-w-[1080px] mx-auto border border-[#d9d9d9] rounded bg-white bg-opacity-80 p-4 md:p-8 shadow-md">
      <!-- 鉅鴻科技 -->
      <div class="w-auto flex flex-col md:flex-row items-center gap-5 px-4 md:px-0 mt-4 mb-8 lg:mb-12">
        <div class="flex flex-col items-center md:items-start text-center gap-0.5">
          <h1 class="text-xl lg:text-2xl font-bold text-[#2F80ED]">{{ $t("about.company") }}</h1>
          <p class="text-sm md:text-base lg:text-lg text-[#808080]">{{ $t("about.desc") }}</p>
        </div>
      </div>

      <!-- 專業研發｜技術領先｜以客為尊｜品質保證 -->
      <div class="w-full">
        <strong class="text-lg lg:text-xl text-[#333333]">{{ $t("about.title") }}</strong>

        <div class="w-full flex flex-col gap-5 text-left mt-4 lg:text-lg tracking-wider">
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
    if (process.server) {
      // SEO
      const seoRes = await $api.webSEO.load({ WebPath: route.name });
      const seoList = seoRes.data.result || {};

      return { seoList };
    }
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜關於`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜關於` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜關於` },
        { name: "keywords", content: this.seoList?.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList?.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList?.seoDescription || "" },
      ],
    };
  },
};
</script>