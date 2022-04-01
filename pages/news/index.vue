<template>
  <section class="w-full">
    <div class="w-full flex flex-col gap-3 lg:gap-5">
      <div class="w-full flex flex-col md:flex-row rounded-lg bg-white border shadow-lg p-4 gap-4" v-for="item in list" :key="item.id">
        <img class="w-full md:w-auto max-h-[200px] object-cover" :src="`${imgUrl}/${item.photo}`" :alt="item.title" />

        <div class="w-full box-border flex flex-col justify-between">
          <div class="w-full flex flex-col gap-2">
            <h5 class="text-gray-700 text-lg md:text-xl lg:text-2xl font-bold">{{ item.title }}</h5>
            <p class="newsContent text-gray-600 text-sm md:text-base">{{ item.summary }}</p>
            <p class="newsContent text-gray-600 text-sm md:text-base">{{ item.summary }}</p>
            <p class="newsContent text-gray-600 text-sm md:text-base">{{ item.summary }}</p>
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
  async asyncData({ app, $api, env }) {
    const imgUrl = env.VUE_APP_IMG_URL;
    const listQuery = {
      LangCode: app.$cookies.get("lang") || "zh-tw",
      page: 1,
      limit: 10,
    };

    const res = await $api.news.load(listQuery);
    const { code, data } = res.data;
    if (code !== 200) return;

    return { imgUrl, listQuery, list: data };
  },
  methods: {
    goNewsInfo(item) {
      this.$router.push({
        name: "news-id",
        params: { id: item.id },
      });
    },
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