<template>
  <section class="w-full">
    <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
      <div class="relative w-full flex flex-col justify-between bg-white shadow-md cursor-pointer" @mouseenter="openImgHover(item, true)" @mouseleave="openImgHover(item)" @click="goProductInfoPage(item)" v-for="item in list" :key="item.id" data-aos="fade-up" data-aos-duration="1000">
        <div class="w-full">
          <img :src="`${imgUrl}/${item.files.filePath}`" :alt="item.title" :title="item.title" width="100%" height="100%" class="w-full object-cover" />
          <transition name="fade">
            <div class="w-full h-full bg-white bg-opacity-70 absolute top-0 left-0 z-10 flex flex-col items-center justify-center text-center" v-if="item.openHover">
              <strong class="lg:text-xl text-gray-700" v-for="(txt, idx) in splitStr(item.name)" :key="idx">{{ txt }}</strong>
            </div>
          </transition>
        </div>
        <div class="w-full bg-white p-3">
          <p v-for="(txt, $idx) in splitStr(item.name)" :key="$idx">{{ txt }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "product-index",
  props: {
    defaultMenu: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      listQuery: {
        CategoryId: "",
        LangCode: "",
        page: 1,
        limit: 999,
        key: undefined,
      },
      imgUrl: process.env.VUE_APP_IMG_URL,
      list: [],
      total: 0,
    };
  },
  watch: {
    $route(to) {
      this.listQuery.CategoryId = to.query?.id || "";
      this.getList();
    },
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
    async getList() {
      this.listQuery.CategoryId = this.$route?.query?.id;
      this.listQuery.LangCode = this.$cookies.get("lang") || "zh-tw";

      await this.api.product.load(this.listQuery).then((res) => {
        const { code, data, count } = res.data;
        if (code === 200) {
          this.list = data.map((i) => {
            i.files = JSON.parse(i.files);
            i.openHover = false;
            return i;
          });
          this.total = count;
        }
      });
    },
    openImgHover(item, bool = false) {
      const getItem = this.list.filter((i) => i.id === item.id);
      getItem[0].openHover = bool;
    },
    goProductInfoPage(item) {
      this.$router.push({
        name: "product-id",
        params: { id: item.id },
        query: { category: item.categoryId, model: item.productCode },
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>