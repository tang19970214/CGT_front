<template>
  <section class="max-w-[1080px] px-3 md:px-6 lg:px-0">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div class="relative w-full mx-auto flex flex-col items-center gap-1">
        <img width="100%" :src="require(`~/static/images/youtubeEx_${getLang}.jpg`)" alt="【CGT 真空式脫泡攪拌機】特點介紹" class="h-full" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div class="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] -translate-y-3 bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/vzVJPMgCabk', '【CGT 真空式脫泡攪拌機】特點介紹')">
            <fa class="text-white text-5xl ml-1.5" :icon="['fas', 'play']" />
          </div>
        </div>
        <label class="text-lg tracking-wider font-bold">脫泡攪拌機特點</label>
      </div>

      <div class="relative w-full mx-auto flex flex-col items-center gap-1">
        <img width="100%" src="~/static/images/youtubeEx1.jpg" alt="【真空式脫泡攪拌機】攪拌分散，除泡效果" class="h-full" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div class="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] -translate-y-3 bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/aabcBODpbWA', '【真空式脫泡攪拌機】攪拌分散，除泡效果')">
            <fa class="text-white text-5xl ml-1.5" :icon="['fas', 'play']" />
          </div>
        </div>
        <label class="text-lg tracking-wider font-bold">攪拌分散 除泡效果</label>
      </div>

      <div class="relative w-full mx-auto flex flex-col items-center gap-1">
        <img width="100%" src="~/static/images/youtubeEx2.jpg" alt="【真空式脫泡攪拌機】大容量材料攪拌" class="h-full" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div class="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] -translate-y-3 bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/Lzpxi6knvJo', '【真空式脫泡攪拌機】大容量材料攪拌')">
            <fa class="text-white text-5xl ml-1.5" :icon="['fas', 'play']" />
          </div>
        </div>
        <label class="text-lg tracking-wider font-bold">大容量材料攪拌</label>
      </div>
    </div>

    <div class="w-full grid grid-cols-1 gap-3 mt-8">
      <img v-for="i in 3" :key="i" width="100%" :src="require(`~/static/images/skill${i}_${getLang}.png`)" :alt="`技術應用${i}`" />
    </div>

    <!-- modal -->
    <Modal width="w-11/12 md:w-3/5 xl:w-2/3 max-w-[1080px]" :openModal="videoModalVisible" @closeModal="videoModalVisible = false">
      <div class="relative w-full h-0 pb-[50%]">
        <iframe class="absolute top-0 left-0 w-full h-full" :src="videoUrl" :title="videoTitle" frameborder="0" allowfullscreen></iframe>
      </div>
    </Modal>
  </section>
</template>

<script>
export default {
  name: "skill",
  async asyncData({ app, $api, route }) {
    if (process.server) {
      // SEO
      const seoRes = await $api.webSEO.load({ WebPath: route.name });
      const seoList = seoRes.data.result || {};

      return { seoList };
    }
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.skill")}`,
      meta: [
        {
          name: "title",
          content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.skill")}`,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.skill")}`,
        },
        { name: "keywords", content: this.seoList?.seoKeyword || "" },
        {
          hid: "description",
          name: "description",
          content: this.seoList?.seoDescription || "",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.seoList?.seoDescription || "",
        },
      ],
    };
  },
  data() {
    return {
      getLang: this.$cookies.get("lang") || "zh-tw",
      // modal
      videoModalVisible: false,
      videoUrl: "",
      videoTitle: "",
    };
  },
  methods: {
    openVideoModal(url, str) {
      this.videoUrl = url;
      this.videoTitle = str;
      this.videoModalVisible = true;
    },
  },
};
</script>