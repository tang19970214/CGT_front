<template>
  <section class="w-full md:px-5">
    <div class="w-full p-2 md:p-4 rounded-lg bg-white shadow-lg">
      <!-- head -->
      <div class="w-full p-2">
        <strong class="text-xl lg:text-2xl">{{ list.title }}</strong>
        <p class="text-gray-600 mt-1 text-lg">{{ list.summary }}</p>
      </div>

      <div class="w-full grid grid-cols-12 gap-4">
        <img width="100%" class="object-cover col-span-12 md:col-span-4" :src="`${imgUrl}/${list.photo}`" alt="" />

        <div id="ck" class="w-full col-span-12 md:col-span-8" v-html="list.contents"></div>
      </div>

      <div class="w-full text-center mt-10 mb-3">
        <button class="py-1 px-3 border border-primary text-primary rounded bg-white transition duration-300 hover:bg-primary hover:text-white" @click="$router.push({ name: 'news' })">{{ $t("field.goBack") }}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "news-id",
  data() {
    return {
      imgUrl: process.env.VUE_APP_IMG_URL,
      list: {},
    };
  },
  methods: {
    async getList(id) {
      await this.api.news.get({ id }).then((res) => {
        const { code, result } = res.data;
        if (code === 200) {
          this.list = result;
        }
      });
    },
  },
  mounted() {
    if (this.$route.params?.id) this.getList(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  strong {
    overflow-wrap: break-word !important;
    white-space: pre-wrap !important;
  }
}
</style>