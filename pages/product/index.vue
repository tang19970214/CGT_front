<template>
  <section class="w-full">
    <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
      <div class="relative w-full bg-white shadow-md cursor-pointer" @mouseenter="openImgHover(item, true)" @mouseleave="openImgHover(item)" @click="goProductInfoPage(item)" v-for="item in list" :key="item.id" data-aos="fade-up" data-aos-duration="1000">
        <div class="w-full">
          <img v-if="item.files[0]" :src="`${imgUrl}/${item.files[0].filePath}`" :alt="item.title" :title="item.title" width="100%" />
          <transition name="fade">
            <div class="w-full h-full bg-white bg-opacity-70 absolute top-0 left-0 z-10 flex items-center justify-center text-center" v-if="item.openHover">
              <strong class="lg:text-xl text-gray-700">{{ item.name }}</strong>
            </div>
          </transition>
        </div>
        <div class="w-full bg-white p-3">
          <p>{{ item.name }}</p>
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
  async asyncData({ app, $api, env, query }) {
    const imgUrl = env.VUE_APP_IMG_URL;
    const listQuery = {
      CategoryId: query?.id,
      LangCode: app.$cookies.get("lang") || "zh-tw",
      page: 1,
      limit: 999,
      key: "",
    };

    const res = await $api.product.load(listQuery);
    const { code, data, count } = res.data;
    const list = data.map((i) => {
      i.files = JSON.parse(i.files);
      i.openHover = false;
      return i;
    });
    if (code !== 200) return;

    return { imgUrl, listQuery, list, total: count };
  },
  watch: {
    $route(to) {
      this.listQuery.CategoryId = to.query?.id || "";
      this.getList();
    },
  },
  methods: {
    getList() {
      this.api.product.load(this.listQuery).then((res) => {
        const { code, data } = res.data;
        if (code === 200) {
          this.list = data.map((i) => {
            i.files = JSON.parse(i.files);
            i.openHover = false;
            return i;
          });
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
        query: { category: item.categoryId },
      });
    },
  },
};
</script>