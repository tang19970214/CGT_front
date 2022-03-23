<template>
  <section class="px-3 md:px-6 lg:px-0">
    <div class="w-full border border-[#d9d9d9] rounded bg-white p-5 shadow-md">
      <div class="pb-2 border-b border-[#d9d9d9]">
        <strong class="text-lg tracking-widest">{{ $t("menu.about") }}</strong>
      </div>

      <!-- 鉅鴻科技 -->
      <div class="w-full flex flex-col lg:flex-row items-center md:items-start lg:items-center justify-between py-2 box-border mb-8">
        <!-- desc -->
        <div class="w-auto flex flex-col md:flex-row items-center gap-2 px-4 md:px-0">
          <img class="w-20 h-20" src="~/static/images/logo_footer.png" alt="" />

          <div class="flex flex-col items-center md:items-start text-center gap-1">
            <h1 class="text-xl">鉅鴻科技 CGT TECHNOLOGY</h1>
            <p class="text-sm text-[#808080]">{{ $t("about.desc") }}</p>
          </div>
        </div>

        <!-- contact -->
        <div class="w-auto md:ml-20 lg:ml-auto flex flex-col gap-2 mt-4 lg:mt-0">
          <!-- 客服專線 -->
          <div class="w-auto flex gap-1.5">
            <fa class="text-[#808080] w-5 translate-y-1" :icon="['fas', 'phone-alt']" />
            <div class="w-auto flex flex-col gap-1.5 text-sm">
              <p>{{ $t("field.tel") }}</p>
              <p class="text-[#808080]">(02)2225-8288</p>
            </div>
          </div>
          <!-- 地址 -->
          <div class="w-auto flex gap-1.5">
            <fa class="text-[#808080] w-5 translate-y-1" :icon="['fas', 'map-marker-alt']" />
            <div class="w-auto flex flex-col gap-1.5 text-sm">
              <p>{{ $t("field.address") }}</p>
              <p class="text-[#808080]">{{ $t("about.address") }}</p>
            </div>
          </div>
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