<template>
  <section class="max-w-[1080px] relative md:px-6 lg:px-2 md:pt-6 flex gap-4">
    <div class="hidden md:block min-w-[200px] max-w-[200px]">
      <div class="w-full h-full">
        <ul class="relative flex flex-col py-2 text-lg bg-white">
          <li class="relative p-3 bg-white cursor-pointer transition duration-300 hover:shadow-md hover:bg-[#EFEFEF]" v-for="item in list" :key="item.id" @click="setActive(item.dtValue)">
            <a class="flex items-center justify-between tracking-wider hover:text-primary transition duration-300 ease-in-out" :class="{ 'text-primary font-bold': defaultMenu === item.dtValue, 'text-gray-500': defaultMenu !== item.dtValue }">
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full md:w-[calc(100%-220px)] m-auto p-3 md:p-0">
      <Nuxt-child :defaultMenu="defaultMenu" />
    </div>
  </section>
</template>

<script>
export default {
  name: "product",
  async asyncData({ $api, route }) {
    if (process.server) {
      // SEO
      const seoRes = await $api.webSEO.load({ WebPath: route.name });
      const seoList = seoRes.data.result || {};

      return { seoList };
    }
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.product")}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.product")}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.product")}` },
        { name: "keywords", content: this.seoList?.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList?.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList?.seoDescription || "" },
      ],
    };
  },
  data() {
    return {
      defaultMenu: null,
      list: [
        {
          id: "",
          name: "全部",
          dtCode: "",
          dtValue: "",
          sort: 0,
        },
      ],
    };
  },
  watch: {
    $route(to) {
      if (to.query?.category) {
        this.defaultMenu = to.query.category;
      }
    },
  },
  methods: {
    getList() {
      const params = {
        page: 1,
        limit: 999,
      };
      this.api.category.load(params).then((res) => {
        const { code, data } = res.data;
        if (code === 200) {
          this.list.push(...data);
          console.log(this.list);
        }
      });
    },
    setActive(val) {
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
  mounted() {
    this.defaultMenu = this.$route?.query?.category || this.$route?.query?.id || "";

    this.getList();
  },
};
</script>