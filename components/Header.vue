<template>
  <section
    class="sticky top-0 left-0 w-full h-16 md:h-20 lg:h-28 bg-white transition duration-300 z-20 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
    <div class="w-full max-w-[1080px] h-full mx-auto px-3 md:px-8 box-border flex items-center justify-between">
      <img class="w-44 md:w-48 lg:w-auto h-4/5 lg:h-3/5 object-contain" :class="{ 'cursor-pointer': !checkRoute('/') }"
        src="~/static/images/CGT_LOGO_header.png" alt="鉅鴻科技" @click="goPath('/')" />

      <!-- menu -->
      <div @click="openPhoneMenu = !openPhoneMenu" class="md:hidden transition duration-200 z-40">
        <fa class="text-3xl" :icon="['fax', `${openPhoneMenu ? 'times' : 'bars'}`]" />
      </div>

      <div class="hidden md:block ml-auto">
        <ul class="flex items-center gap-4">
          <li class="text-lg lg:text-xl text-primary border-b-2 transition duration-300 hover:border-primary"
            :class="{ 'font-bold border-primary': checkRoute(item.value), 'cursor-pointer border-transparent': !checkRoute(item.value) }"
            v-for="item in menuList" :key="item.id" @click="goPath(item.value)">{{ item.label }}</li>
          <li class="text-primary text-lg lg:text-xl">
            <div class="flex justify-center dropdown relative">
              <fa class="cursor-pointer transition duration-300 hover:scale-110" :icon="['fas', 'globe']"
                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" />
              <ul
                class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-1 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                aria-labelledby="dropdownMenuButton1">
                <li class="py-1 px-4 transition duration-300 hover:bg-primary hover:bg-opacity-10"
                  :class="{ 'text-primary font-bold bg-primary bg-opacity-10': checkLocale(item.langCode), 'cursor-pointer': !checkLocale(item.langCode) }"
                  v-for="(item, idx) in locales" :key="idx" @click="changeLang(item.langCode)">
                  <p class="dropdown-item text-sm whitespace-nowrap">{{ item.langName }}</p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- phone menu -->
    <transition name="fade">
      <div v-if="openPhoneMenu" class="fixed z-[20] top-0 left-0 bg-white bg-opacity-95 w-screen h-screen">
        <div class="w-full h-full flex items-center justify-center">
          <ul class="text-xl tracking-wider text-gray-700 flex flex-col gap-5">
            <li :class="{ 'text-primary font-bold': checkRoute('/') }" @click="goPath('/')">{{ $t("menu.index") || "首頁" }}
            </li>
            <li v-for="item in menuList" :key="item.id" @click="goPath(item.value)">
              <span :class="{ 'text-primary font-bold': checkRoute(item.value) }">{{ item.label }}</span>
              <ul v-if="item.value === '/product'" class="ml-4 mt-2 text-xl flex flex-col gap-1">
                <li :class="{ 'text-primary font-bold': checkProduct(item.dtValue) }"
                  v-for="item in setLangName(productCategory)" :key="item.id" @click.stop="goProductPath(item.dtValue)">{{
                    item.name }}</li>
              </ul>
            </li>
            <li>
              <a class="inline-block text-2xl" data-bs-toggle="collapse" href="#langCollapse" role="button"
                aria-expanded="false" aria-controls="langCollapse">
                <fa :icon="['fas', 'globe']" />
              </a>

              <!-- 語言 -->
              <ul class="collapse" id="langCollapse">
                <li class="px-2 transition duration-300 hover:bg-primary hover:bg-opacity-10"
                  :class="{ 'text-primary font-bold bg-primary bg-opacity-10': checkLocale(item.langCode), 'cursor-pointer': !checkLocale(item.langCode) }"
                  v-for="(item, idx) in locales" :key="idx" @click="changeLang(item.langCode)">
                  <p class="dropdown-item whitespace-nowrap">{{ item.langName }}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import Cookies from "js-cookie";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      menuList: [
        { id: 1, label: this.$t("menu.about"), value: "/about" }, // 關於
        { id: 2, label: this.$t("menu.product"), value: "/product" }, // 商品介紹
        { id: 3, label: this.$t("menu.skill"), value: "/skill" }, // 技術應用
        { id: 4, label: this.$t("menu.news"), value: "/news" }, // 最新消息
        { id: 5, label: this.$t("menu.contact"), value: "/contact" }, // 聯絡我們
      ],

      openPhoneMenu: false,
    };
  },
  watch: {
    openPhoneMenu(bol) {
      if (bol) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  computed: {
    ...mapState(["locales", "productCategory"]),
    checkRoute() {
      return (path) => {
        return this.$route.path === path || this.$route.matched[0]?.path === path;
      };
    },
    checkProduct() {
      return (val) => {
        return (this.$route.query?.id || "") === val && (this.$route.path === "/product" || this.$route.matched[0].path);
      };
    },
    checkLocale() {
      return (val) => {
        const getLang = Cookies.get("lang") || "zh-tw";
        return getLang === val;
      };
    },
    setLangName() {
      return (arr) => {
        const newArr = JSON.parse(JSON.stringify(arr));
        newArr?.map((i) => {
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
          i.name = i18nName || i.name;
          return i;
        });
        return newArr;
      };
    },
  },
  methods: {
    ...mapMutations(["SET_LANG"]),
    changeLang(val) {
      if (this.checkLocale(val)) return;
      this.langValue = val;
      this.SET_LANG(val);
      this.$i18n.locale = val;
      window.location.reload();
    },
    goPath(val) {
      if (this.$route.path === val && val === "/product") return;
      this.$router.push({
        name: "product",
        query: { id: val },
      });
      this.$router.push(val);
      this.openPhoneMenu = false;
    },
    goProductPath(val) {
      if (!val) {
        this.$router.push({ name: "product" });
      } else {
        this.$router.push({
          name: "product",
          query: { id: val },
        });
      }
      this.openPhoneMenu = false;
    },
  },
};
</script>
