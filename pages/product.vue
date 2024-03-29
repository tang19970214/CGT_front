<template>
  <section class="max-w-[1080px] relative md:px-6 lg:px-2 md:pt-6 flex gap-4">
    <div class="hidden md:block min-w-[200px] max-w-[200px]">
      <div class="w-full h-full">
        <ul class="relative flex flex-col py-2 text-lg bg-white">
          <li class="relative p-3 bg-white cursor-pointer transition duration-300 hover:shadow-md hover:bg-[#EFEFEF]" v-for="item in list" :key="item.id" @click="setActive(item.dtValue)">
            <h1 class="flex items-center justify-between tracking-wider text-lg hover:text-primary transition duration-300 ease-in-out" :class="{ 'text-primary font-bold': defaultMenu === item.dtValue, 'text-gray-500': defaultMenu !== item.dtValue }">
              <a :title="item.i18nName || item.name">{{ item.i18nName || item.name }}</a>
            </h1>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full md:w-[calc(100%-220px)] mx-auto p-3 md:p-0">
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
          i18nName: this.$t("product.menu.all"),
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
          data.map((i) => {
            let i18nName = "";
            switch (i.dtValue) {
              case "MJV":
                i18nName = this.$t("product.menu.mjv");
                break;
              case "MJH":
                i18nName = this.$t("product.menu.mjh");
                break;
              case "MJ":
                i18nName = this.$t("product.menu.mj");
                break;
              case "other":
                i18nName = this.$t("product.menu.other");
                break;
            }
            i.i18nName = i18nName;
            return i;
          });
          this.list.push(...data);
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