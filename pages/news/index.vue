<template>
  <section class="w-full">
    <div class="w-full flex flex-col gap-3 lg:gap-5">
      <div class="w-full grid grid-cols-12 rounded-lg bg-white border shadow-lg p-4 gap-4 box-border" v-for="item in list" :key="item.id">
        <img v-lazy="`${imgUrl}/${item.photo}`" :title="item.title" :alt="item.title" width="100%" class="max-h-[300px] object-cover col-span-12 md:col-span-5" />

        <div class="col-span-12 md:col-span-7 flex flex-col justify-between">
          <div class="w-full flex flex-col gap-2">
            <h1 class="text-gray-700 text-lg md:text-xl lg:text-2xl font-bold">{{ item.title }}</h1>
            <h2 class="newsContent text-gray-600 text-sm md:text-base">{{ item.summary }}</h2>
          </div>
          <div class="w-full flex items-center justify-between mt-7 md:mt-0">
            <p class="text-gray-600 text-sm">{{ $t("field.postDate") }}：{{ $dayjs(item.postDate).format("YYYY-MM-DD") }}</p>
            <button class="py-1 px-3 border border-primary text-primary rounded bg-white transition duration-300 hover:bg-primary hover:text-white" @click="goNewsInfo(item)">{{ $t("field.info") }}...</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "news-index",
  data() {
    return {
      imgUrl: process.env.VUE_APP_IMG_URL,
      list: [],
    };
  },
  methods: {
    async getList() {
      const params = {
        LangCode: this.$cookies.get("lang") || "zh-tw",
        page: 1,
        limit: 999,
      };
      await this.api.news.load(params).then((res) => {
        const { code, data } = res.data;
        if (code === 200) {
          this.list = data?.reverse();
        }
      });
    },
    goNewsInfo(item) {
      this.$router.push({
        name: "news-id",
        params: { id: item.id },
      });
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
.newsContent {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>