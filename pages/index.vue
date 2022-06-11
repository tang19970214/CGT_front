<template>
  <section class="md:pt-0 pb-0 bg-[#F3FFFE]">
    <Banner :carouselArr="list" />

    <div class="w-full">
      <img width="100%" class="md:w-11/12 max-w-[1080px] mx-auto" src="~/static/images/introduce.png" alt="運用範疇" />
    </div>

    <!-- video1 -->
    <div class="w-full p-4 md:p-10 box-border bg-[url('~/static/images/indexBg.png')] bg-cover bg-no-repeat">
      <div class="w-full max-w-[1080px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-5">
        <!-- introduce -->
        <div class="w-full flex flex-col gap-2 text-[#15619E]">
          <h1 class="hidden lg:block text-5xl">CGT</h1>
          <h2 class="text-2xl">真空式脫泡攪拌機</h2>
          <ul class="mt-1 list-decimal list-inside text-[#4F4F4F] flex flex-col gap-2">
            <li>採用雙軸離心和真空泵，高效率， 真空消泡混合機混合各種原料，有效去除納米級微小氣泡。</li>
            <li>兩個大扭矩伺服電機，使混合後的螢光粉或金屬粉可均勻分佈。</li>
            <li>兩杯同時混合，產能翻倍，減少生產時間， 無刀片接觸設計不污染材料，提高生產力。</li>
            <li>高性能、低功耗設計，物料攪拌後溫度約24~35°C， 只需3-5分鐘完成高粘度材料的消泡，即非常有效。</li>
          </ul>
        </div>
        <!-- video -->
        <div class="w-full">
          <div class="relative w-full mx-auto">
            <img width="100%" src="~/static/images/youtubeEx.jpg" alt="" />
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
    <div class="w-full p-4 md:p-10 box-border bg-[url('~/static/images/indexBg1.png')] bg-cover bg-no-repeat">
      <div class="w-full max-w-[1080px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-center gap-5">
        <!-- introduce -->
        <div class="w-full flex flex-col gap-1.5 text-white">
          <h1 class="hidden lg:block text-5xl">CGT</h1>
          <h2 class="text-2xl">【真空式脫泡攪拌機】攪拌分散，除泡效果</h2>
          <ul class="mt-1 list-none flex flex-col gap-1">
            <li>研發實驗室微小量輕鬆攪拌</li>
            <li>有效去除奈米微米級氣泡</li>
            <li>多種模式材料運轉設定</li>
            <li>均勻攪拌 , 完美分散</li>
            <li>除泡效果極佳</li>
            <li class="mt-3">#鉅鴻科技有限公司 #CGT #真空式 #離心式</li>
            <li>#客製化 #均勻攪拌 #完美除泡 #脫泡效果</li>
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
    <div class="w-full p-4 md:p-10 box-border bg-[url('~/static/images/indexBg2.png')] bg-cover bg-no-repeat">
      <div class="w-full text-center mb-10">
        <strong class="text-white text-2xl">{{ $t("index.ourProduct") }}</strong>
      </div>
      <div class="w-full max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="w-full flex flex-col bg-white p-1 rounded-lg cursor-pointer" v-for="item in hotProductList" :key="item.id" @click="goProduct(item)">
          <img width="100%" :src="`${imgUrl}/${item.files[0].filePath}`" :alt="item.files[0].fileName" />
          <div class="w-full p-4 pb-2">
            <h3 class="text-sm md:text-base lg:text-lg">{{ item.name }}</h3>
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
  async asyncData({ $api, env, route }) {
    const imgUrl = env.VUE_APP_IMG_URL;
    // SEO
    const seoRes = await $api.webSEO.load({ WebPath: route.name });
    const seoList = seoRes.data.result || {};

    return { imgUrl, seoList };
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
    return {
      list: [],
      hotProductList: [],

      // modal
      videoModalVisible: false,
      videoUrl: "",
      videoTitle: "",
    };
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
