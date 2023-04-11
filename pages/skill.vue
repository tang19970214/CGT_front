<template>
  <section class="max-w-[1080px] px-3 md:px-6 lg:px-0">
    <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
      <div class="relative w-full mx-auto flex flex-col items-center gap-1">
        <img width="100%" src="~/static/images/youtubeEx.jpg" alt="【CGT 真空式脫泡攪拌機】特點介紹" class="h-full" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div class="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] -translate-y-3 bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/BLr5pxUuy6o', '【CGT 真空式脫泡攪拌機】特點介紹')">
            <fa class="text-white text-5xl ml-1.5" :icon="['fas', 'play']" />
          </div>
        </div>
        <label class="text-lg tracking-wider font-bold">脫泡攪拌機特點</label>
      </div>

      <div class="relative w-full mx-auto flex flex-col items-center gap-1">
        <img width="100%" src="~/static/images/youtubeEx1.jpg" alt="【真空式脫泡攪拌機】攪拌分散，除泡效果" class="h-full" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div class="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] -translate-y-3 bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/ghXq0TU-xA8', '【真空式脫泡攪拌機】攪拌分散，除泡效果')">
            <fa class="text-white text-5xl ml-1.5" :icon="['fas', 'play']" />
          </div>
        </div>
        <label class="text-lg tracking-wider font-bold">攪拌分散 除泡效果</label>
      </div>

      <div class="relative w-full mx-auto flex flex-col items-center gap-1">
        <img width="100%" src="~/static/images/youtubeEx2.jpg" alt="【真空式脫泡攪拌機】大容量材料攪拌" class="h-full" />
        <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div class="min-w-[80px] max-w-[80px] min-h-[80px] max-h-[80px] -translate-y-3 bg-[#2F80ED] rounded-full flex items-center justify-center cursor-pointer transition duration-300 hover:bg-opacity-80" @click="openVideoModal('https://www.youtube.com/embed/Qc5mgZhySFY', '【真空式脫泡攪拌機】大容量材料攪拌')">
            <fa class="text-white text-5xl ml-1.5" :icon="['fas', 'play']" />
          </div>
        </div>
        <label class="text-lg tracking-wider font-bold">大容量材料攪拌</label>
      </div>
    </div>

    <!-- 均勻攪拌、完美除泡、高效時間 -->
    <div class="w-full mt-3 bg-white p-6 box-border flex flex-col gap-8">
      <div v-for="i in 3" :key="i" class="w-full flex flex-col gap-8">
        <h1 class="text-[#106BAA] text-5xl font-bold pl-2 border-l-[12px] border-[#106BAA]">{{ effectList[i - 1].title }}</h1>

        <div :class="[effectList[i - 1].content.length > 1 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2']" class="w-full grid gap-5">
          <div v-for="(item, idx) in effectList[i - 1].content" :key="idx" class="flex flex-col gap-5">
            <img :src="item.imgUrl" :alt="effectList[i - 1].title">

            <div v-if="effectList[i - 1].content.length > 1" class="relative w-full flex items-center">
              <div v-if="idx > 0" class="absolute top-0 left-0 z-1 w-0 h-0 border-solid border-y-[18px] border-r-0 border-l-[16px] border-[transparent_transparent_transparent_white]"></div>
              <div class="w-[calc(100%-30px)] h-9 bg-[#75ACDD] py-1 px-3 text-white flex items-center justify-center">
                <p class="pl-2 text-sm md:text-base lg:text-lg whitespace-nowrap">{{ item.title }}</p>
              </div>
              <div :class="[idx < effectList[i - 1].content.length - 1 ? 'border-[transparent_transparent_transparent_#75ACDD]' : 'border-[#75ACDD]']" class="w-0 h-0 border-solid border-y-[18px] border-r-0 border-l-[16px]"></div>
            </div>

            <div v-else class="relative w-5/6 flex items-center">
              <div class="w-[calc(100%-30px)] h-9 bg-[#75ACDD] py-1 px-3 text-white flex items-center justify-center">
                <p class="pl-2 text-sm md:text-base lg:text-lg whitespace-nowrap">{{ item.title }}</p>
              </div>
              <div class="w-0 h-0 border-solid border-y-[18px] border-r-0 border-l-[16px] border-[transparent_transparent_transparent_#75ACDD]"></div>

              <div class="relative w-5 h-9 bg-[#75ACDD]">
                <div class="absolute top-0 left-0 w-0 h-0 border-solid border-y-[18px] border-r-0 border-l-[16px] border-[transparent_transparent_transparent_white]"></div>
                <div class="absolute top-0 -right-4 w-0 h-0 border-solid border-y-[18px] border-r-0 border-l-[16px] border-[transparent_transparent_transparent_#75ACDD]"></div>
              </div>
              <div class="ml-4 relative w-5 h-9 bg-[#75ACDD]">
                <div class="absolute top-0 left-0 w-0 h-0 border-solid border-y-[18px] border-r-0 border-l-[16px] border-[transparent_transparent_transparent_white]"></div>
                <div class="absolute top-0 -right-4 w-0 h-0 border-solid border-y-[18px] border-r-0 border-l-[16px] border-[transparent_transparent_transparent_#75ACDD]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 6大特點 -->
    <div class="w-full mt-3 bg-white p-6 box-border">
      <h1 class="text-[#106BAA] text-2xl md:text-5xl font-bold">真空式脫泡攪拌機<span class="text-5xl md:text-8xl">6</span>大特點
      </h1>
      <h2 class="py-0.5 px-2 md:px-5 bg-[#75AEDF] text-white text-lg md:text-[22px] inline-block tracking-wider mt-1">Six
        Characteristics of
        Vacuum Defoaming Mixer</h2>

      <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
        <div v-for="item in featuresList" :key="item.id" class="flex flex-col gap-5 text-base md:text-lg lg:text-xl">
          <img :src="item.imgUrl" :alt="item.title_tw">
          <p v-if="$cookies.get('lang') === 'zh-tw'">{{ item.title_tw }}</p>
          <p v-if="$cookies.get('lang') === 'en'" class="text-[#636363]">{{ item.title_en }}</p>
        </div>
      </div>
    </div>

    <!-- 全方位運用 -->
    <div class="w-full mt-3 bg-white p-6 box-border">
      <h1 class="text-[#106BAA] text-5xl font-bold pl-2 border-l-[12px] border-[#106BAA]">全方位運用</h1>

      <div class="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 place-items-start gap-3 lg:gap-8 mt-8">
        <div v-for="item in useList" :key="item.id" class="flex flex-col justify-center text-[#7AAFDF] font-bold">
          <img :src="item.imgUrl" :alt="item.title" class="w-full mb-2">
          <p>{{ item.title }}</p>
          <p class="text-sm">{{ item.desc }}</p>
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
          content: this.seoList?.seoDescription + ",攪拌比較" || "",
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

      // 效果
      effectList: {
        0: {
          title: "均勻攪拌",
          content: [
            {
              id: 1,
              imgUrl: require("~/static/images/effect/effect1.png"),
              title: "高比重金屬粉末攪拌效果呈現",
            },
            {
              id: 2,
              imgUrl: require("~/static/images/effect/effect2.png"),
              title: "AB膠+螢光粉攪拌效果呈現",
            },
            {
              id: 3,
              imgUrl: require("~/static/images/effect/effect3.png"),
              title: "石墨烯攪拌效果呈現",
            },
          ],
        },
        1: {
          title: "完美除泡",
          content: [
            {
              id: 4,
              imgUrl: require("~/static/images/effect/effect4.png"),
              title: "封裝油墨脫泡效果呈現",
            },
            {
              id: 5,
              imgUrl: require("~/static/images/effect/effect5.png"),
              title: "生醫用凝膠除泡效果呈現",
            },
            {
              id: 6,
              imgUrl: require("~/static/images/effect/effect6.png"),
              title: "防焊油墨(PCB綠漆)除泡效果呈現",
            },
          ],
        },
        2: {
          title: "高效時間",
          content: [
            {
              id: 7,
              imgUrl: require("~/static/images/effect/effect7.png"),
              title: "高黏度材料攪拌案例",
            },
          ],
        },
      },

      // 6大特點
      featuresList: [
        {
          id: 1,
          imgUrl: require("~/static/images/features/features1.png"),
          title_tw:
            "採雙軸心原理方式，搭配高效能之真空幫浦，使多種原料的混合更加均勻不分層，有效去除奈米級微小氣泡。",
          title_en:
            "Using biaxial centrifugation and vacuum pump with high efficiency, Vacuum Defoaming Mixer mixes a variety of raw materials well, and removes Nanoscale tiny bubbles effectively.",
        },
        {
          id: 2,
          imgUrl: require("~/static/images/features/features2.png"),
          title_tw:
            "獨特的雙馬達及高扭力設計，對於螢光粉或其他比重較高的原料混合，也能在無沉降的條件下進行均勻分散。",
          title_en:
            "With the unique design of double motors and high torque, Vacuum Defoaming Mixer also evenly disperses fiuorescent powder or other higher-proportioned raw materials under the condition of non-settlement.",
        },
        {
          id: 3,
          imgUrl: require("~/static/images/features/features3.png"),
          title_tw:
            "一次雙杯容量同時進行攪拌，增加雙倍產能，減少生產耗費工時。無葉片接觸設計更不污染原料，大幅提升產品良率。",
          title_en:
            "Vacuum Defoaming Mixer stirs double cups simultaneously, so it increases double capacity and reduces consumption of production time. It's design of no leaf contact doesn't pollute raw materials and increases product yield significantly.",
        },
        {
          id: 4,
          imgUrl: require("~/static/images/features/features4.png"),
          title_tw:
            "在高效能、低功率的獨創研發設計下，讓攪拌後的原料溫度控制在24~35℃左右。針對高黏度材料也只需四分鐘即完成脫泡，其效率極高。",
          title_en:
            "With the unique design of high efficiency and low power, Vacuum Defoaming Mixer controls the temperature around 24~25℃ after the raw material is stirred. It also takes only four minutes to finish defoaming high viscosity material, which is very efficient.",
        },
        {
          id: 5,
          imgUrl: require("~/static/images/features/features5.png"),
          title_tw:
            "採用人機操作模式，可依不同黏度之膠水設定記憶參數，可記憶到20組之多，產線人員操作極其簡單。",
          title_en:
            "Vacuum Defoaming Mixer adopts man-machine operation. Production line staff can set the memory parameters according to different viscosity of the glue. The memory parameters can be memorized up to 20 sets.",
        },
        {
          id: 6,
          imgUrl: require("~/static/images/features/features6.png"),
          title_tw:
            "故障警示燈、安全門及振動安全保護裝置設計，以確保操作人員及機器本體安全。",
          title_en:
            "Vacuum Defoaming Mixer has fault warning light, a safety door, and vibration protection device to ensure the safety of the operator and the mixer itself.",
        },
      ],

      // 全方位運用
      useList: [
        {
          id: 1,
          imgUrl: require("~/static/images/use/use1.png"),
          title: "LED用封止劑",
          desc: "(AB膠+螢光劑)",
        },
        {
          id: 2,
          imgUrl: require("~/static/images/use/use2.png"),
          title: "LCD面板",
          desc: "UV膠，液晶",
        },
        {
          id: 3,
          imgUrl: require("~/static/images/use/use3.png"),
          title: "PCB印刷電路",
          desc: "(綠漆，錫膏)",
        },
        {
          id: 4,
          imgUrl: require("~/static/images/use/use4.png"),
          title: "TP觸控面板",
          desc: "(銀漆，導電漿)",
        },
        {
          id: 5,
          imgUrl: require("~/static/images/use/use5.png"),
          title: "太陽能面板",
          desc: "(銀漆，銀鋁膠)",
        },
        {
          id: 6,
          imgUrl: require("~/static/images/use/use6.png"),
          title: "電子零件",
          desc: "(熱固型封裝膠)",
        },
        {
          id: 7,
          imgUrl: require("~/static/images/use/use7.png"),
          title: "車用產業",
          desc: "(感測產品材料)",
        },
        {
          id: 8,
          imgUrl: require("~/static/images/use/use8.png"),
          title: "生技醫療",
          desc: "(試劑、人造關節材料)",
        },
        {
          id: 9,
          imgUrl: require("~/static/images/use/use9.png"),
          title: "航太",
          desc: "(碳纖維複合材料)",
        },
        {
          id: 10,
          imgUrl: require("~/static/images/use/use10.png"),
          title: "研究機構",
          desc: "(電池正負極材料)",
        },
        {
          id: 11,
          imgUrl: require("~/static/images/use/use11.png"),
          title: "原物料產業",
          desc: "(石墨烯、奈米碳管材料)",
        },
        {
          id: 12,
          imgUrl: require("~/static/images/use/use12.png"),
          title: "印刷塗布、顏料",
          desc: "(各類油墨)",
        },
      ],

      // modal
      videoModalVisible: false,
      videoUrl: "",
      videoTitle: "",
    };
  },
  mounted() {
    if (Object.keys(this.$route.query).length === 0) {
      this.$router.push({
        name: "skill",
        query: {
          keywords: "攪拌比較",
        },
      });
    }
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