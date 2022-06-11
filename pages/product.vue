<template>
  <section class="relative md:px-6 lg:px-2 grid grid-cols-12 gap-2">
    <div class="hidden md:block col-span-4 lg:col-span-2">
      <div class="w-full h-full px-1">
        <ul class="relative flex flex-col py-2 text-lg bg-white">
          <li class="relative p-3 bg-white cursor-pointer transition duration-300 hover:shadow-md hover:bg-[#EFEFEF]" v-for="item in list" :key="item.id" @click="setActive(item.dtValue)">
            <a class="flex items-center justify-between tracking-wider hover:text-primary transition duration-300 ease-in-out" :class="{ 'text-primary font-bold': defaultMenu === item.dtValue, 'text-gray-500': defaultMenu !== item.dtValue }">
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-12 md:col-span-8 lg:col-span-10">
      <Nuxt-child :defaultMenu="defaultMenu" />
    </div>
  </section>
</template>

<script>
export default {
  name: "product",
  async asyncData({ $api, route, query }) {
    // SEO
    const seoRes = await $api.webSEO.load({ WebPath: route.name });
    const seoList = seoRes.data.result || {};

    const defaultMenu = query.category || query.id || "";

    const listQuery = {
      page: 1,
      limit: 999,
    };

    let list = [
      {
        id: "",
        name: "全部",
        dtCode: "",
        dtValue: "",
        sort: 0,
      },
    ];
    const res = await $api.category.load(listQuery);
    const { code, data } = res.data;
    if (code !== 200) return;
    list.push(...data);

    return { seoList, defaultMenu, listQuery, list };
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.product")}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.product")}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.product")}` },
        { name: "keywords", content: this.seoList.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList.seoDescription || "" },
      ],
    };
  },
  watch: {
    $route(to) {
      if (to.query.category) {
        this.defaultMenu = to.query.category;
      }
    },
  },
  methods: {
    setActive(val) {
      // if (this.defaultMenu === val) return;
      this.defaultMenu = val;

      if (this.defaultMenu === "") {
        this.$router.push({ name: "product" });
      } else {
        this.$router.push({
          name: "product",
          query: { id: val },
        });
      }
    },
  },
};
</script>