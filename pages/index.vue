<template>
  <section class="md:pt-0 pb-0 bg-[#F3FFFE]">
    <Banner :carouselArr="list" />

    <div data-aos="fade-up" data-aos-duration="1500" class="w-full">
      <img width="100%" class="md:w-11/12 max-w-[1080px] mx-auto" :src="require(`~/static/images/introduce_${getLang}.png`)" alt="運用範疇" />
    </div>

    <!-- video1 -->
    <div data-aos="fade-up" data-aos-duration="1500" class="w-full p-4 md:p-10 box-border bg-[url('~/static/images/indexBg.png')] bg-cover bg-no-repeat">
      <div class="w-full max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-5">
        <!-- introduce -->
        <div class="w-full flex flex-col gap-2 text-[#15619E]">
          <h2 class="text-2xl">{{ $t("index.video1.title") }}</h2>
          <ul class="mt-1 list-decimal list-inside text-[#4F4F4F] flex flex-col gap-2">
            <li>{{ $t("index.video1.content1") }}</li>
            <li>{{ $t("index.video1.content2") }}</li>
            <li>{{ $t("index.video1.content3") }}</li>
            <li>{{ $t("index.video1.content4") }}</li>
          </ul>
        </div>
        <!-- video -->
        <div class="w-full">
          <div class="relative w-full mx-auto">
            <img width="100%" :src="require(`~/static/images/youtubeEx_${getLang}.jpg`)" alt="" />
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="min-w-[56px] max-w-[56px] min-h-[56px] max-h-[56px] bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/vzVJPMgCabk', '【CGT 真空式脫泡攪拌機】特點介紹')">
                <fa class="text-white text-2xl" :icon="['fas', 'play']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- video2 -->
    <div data-aos="fade-up" data-aos-duration="1000" class="w-full p-4 md:p-10 box-border bg-[url('~/static/images/indexBg1.png')] bg-cover bg-no-repeat">
      <div class="w-full max-w-[1080px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
        <!-- introduce -->
        <div class="w-full flex flex-col gap-1.5 text-white">
          <h2 class="text-2xl">{{ $t("index.video2.title") }}</h2>
          <ul class="mt-1 list-none flex flex-col gap-1">
            <li>{{ $t("index.video2.content1") }}</li>
            <li>{{ $t("index.video2.content2") }}</li>
            <li>{{ $t("index.video2.content3") }}</li>
            <li>{{ $t("index.video2.content4") }}</li>
            <li>{{ $t("index.video2.content5") }}</li>
            <li class="mt-3">{{ $t("index.video2.content6") }}</li>
            <li>{{ $t("index.video2.content7") }}</li>
          </ul>
        </div>
        <!-- video -->
        <div class="w-full">
          <div class="relative w-full mx-auto">
            <img width="100%" src="~/static/images/youtubeEx1.jpg" alt="【真空式脫泡攪拌機】攪拌分散，除泡效果" />
            <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div class="min-w-[56px] max-w-[56px] min-h-[56px] max-h-[56px] bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/aabcBODpbWA', '【真空式脫泡攪拌機】攪拌分散，除泡效果')">
                <fa class="text-white text-2xl" :icon="['fas', 'play']" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- hot product -->
    <div data-aos="fade-up" data-aos-duration="1000" class="w-full p-4 md:p-10 box-border bg-[url('~/static/images/indexBg2.png')] bg-cover bg-no-repeat">
      <div class="w-full text-center mb-10">
        <strong class="text-white text-2xl">{{ $t("index.ourProduct") }}</strong>
      </div>
      <div class="w-full max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="w-full flex flex-col bg-white p-1 rounded-lg cursor-pointer" v-for="item in hotProductList" :key="item.id" @click="goProduct(item)">
          <img width="100%" :src="`${imgUrl}/${item.files[0].filePath}`" :alt="item.files[0].fileName" />
          <div class="w-full p-4 pb-2">
            <h3 class="text-sm md:text-base lg:text-lg" v-for="(txt, idx) in splitStr(item.name)" :key="idx">{{ txt }}</h3>
          </div>
        </div>
      </div>
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
  name: "index",
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
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.index")}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.index")}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.index")}` },
        { name: "keywords", content: this.seoList?.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList?.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList?.seoDescription || "" },
      ],
    };
  },
  data() {
    return {
      getLang: this.$cookies.get("lang") || "zh-tw",

      imgUrl: process.env.VUE_APP_IMG_URL,
      list: [],
      hotProductList: [],

      // modal
      videoModalVisible: false,
      videoUrl: "",
      videoTitle: "",
    };
  },
  computed: {
    splitStr() {
      return (str) => {
        const strArr = str?.split(" ") || [str];
        return strArr.reverse();
      };
    },
  },
  methods: {
    async getBannerList() {
      const listQuery = {
        page: 1,
        limit: 999,
      };
      const res = await this.api.banner.load(listQuery);
      const { code, data } = res.data;
      if (code === 200) {
        this.list = data;
      }
    },
    async getHotProductList() {
      const params = {
        CategoryId: "",
        LangCode: this.$cookies.get("lang") || "zh-tw",
        isHot: true,
        page: 1,
        limit: 10,
        key: "",
      };

      try {
        const res = await this.api.product.load(params);

        this.hotProductList = res.data.data?.map((i) => {
          i.files = JSON.parse(i.files);
          return i;
        });
      } catch (error) {
        console.error(error);
      }
    },
    openVideoModal(url, str) {
      this.videoUrl = url;
      this.videoTitle = str;
      this.videoModalVisible = true;
    },
    goProduct(item) {
      this.$router.push({
        name: "product-id",
        params: { id: item.id },
        query: { category: item.categoryId },
      });
    },
  },
  mounted() {
    this.getBannerList();
    this.getHotProductList();
  },
};
</script>
