<template>
  <section class="w-full">
    <div class="w-full p-2 md:p-4 rounded-lg bg-white shadow-lg">
      <!-- head -->
      <div class="w-full flex flex-col md:flex-row items-center gap-2 md:gap-4">
        <img class="w-full md:w-80 lg:w-96 object-cover" :src="`${imgUrl}/${list.photo}`" alt="" />

        <div class="w-full md:w-auto flex flex-col items-center">
          <strong class="text-lg md:text-xl lg:text-2xl">{{ list.title }}</strong>
          <p class="text-gray-600 text-sm md:text-base mt-4">{{ list.summary }}</p>
        </div>
      </div>

      <!-- content (CK) -->
      <div class="w-full mt-3 lg:mt-5">
        <div v-html="list.contents"></div>
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
  async asyncData({ $api, params, env }) {
    const imgUrl = env.VUE_APP_IMG_URL;
    const res = await $api.news.get({ id: params.id });
    const { code, result } = res.data;
    if (code !== 200) return;

    return { imgUrl, list: result };
  },
};
</script>