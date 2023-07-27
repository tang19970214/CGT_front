<template>
  <section class="w-full flex flex-col">
    <div class="w-full md:border border-[#d9d9d9] bg-white shadow-md p-4">
      <div class="w-full grid grid-cols-12 gap-5 pb-16">
        <div class="col-span-12 lg:col-span-5">
          <img v-if="list.files" width="100%" class="object-cover pointer-events-none"
            :src="`${imgUrl}/${list.files.filePath}`" :alt="list.files.fileName" />
        </div>
        <div class="col-span-12 lg:col-span-7 w-full flex flex-col justify-between">
          <div class="w-full flex flex-col">
            <div class="w-full flex flex-col gap-2 pb-4 md:pb-7 border-b border-[#828282]">
              <strong class="text-xl md:text-2xl" v-for="(txt, idx) in splitStr(list.name)" :key="idx">{{ txt }}</strong>
              <span class="text-gray-500">{{ $t("product.productId") }}：{{ list.productCode }}</span>
            </div>

            <div class="w-full py-4">
              <div class="prodRule" v-html="list.spec"></div>
            </div>
          </div>

          <button
            class="w-full p-2 box-border border border-primary bg-primary text-white transition duration-300 hover:bg-white hover:text-primary"
            @click="openQue(list.name)">{{ $t("product.ask") }}</button>
        </div>
      </div>

      <!-- tab -->
      <div class="w-full flex items-center border-b border-[#828282]">
        <div :class="{ 'border-[#15619E]': item.id === defaultTab, 'cursor-pointer': item.id !== defaultTab }"
          class="px-6 py-2 border-b-4 border-transparent transition duration-500" v-for="item in tabList" :key="item.id"
          @click="defaultTab = item.id">
          {{ item.label }}
        </div>
      </div>
      <!-- tab1 content -->
      <div class="w-full pt-5" v-if="defaultTab === 1">
        <div v-html="list.contents"></div>
      </div>
      <!-- tab2 content -->
      <div class="w-full pt-5" v-if="defaultTab === 2">
        <img v-if="list.specFiles" class="mx-auto w-4/5" :src="`${imgUrl}/${list.specFiles.filePath}`"
          :alt="list.specFiles.fileName" />
      </div>
    </div>

    <!-- more product -->
    <div class="w-full mt-7 py-5 px-7 md:px-9">
      <VueSlickCarousel v-bind="settings">
        <div v-for="item in productList" :key="item.id">
          <img :class="{ 'cursor-not-allowed': $route.params.id === item.id }"
            class="mx-auto p-1 bg-white cursor-pointer hover:bg-white/70" width="95%"
            :src="`${imgUrl}/${item.files.filePath}`" :alt="item.name" @click="goProduct(item)" />
        </div>
      </VueSlickCarousel>
    </div>

    <!-- modal -->
    <Modal :openModal="openModal" :title="`${$t('product.ask')}...`" width="w-11/12 md:w-3/5 lg:w-2/5"
      @closeModal="openModal = false">
      <ValidationObserver ref="form" class="w-full flex flex-col gap-3">
        <div class="w-full text-[#606266] flex flex-col gap-2">
          <!-- 詢問商品 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700">{{
              $t("product.askProduct") }}</label>
            <div class="w-full form-group relative">
              <span class="text-lg font-bold">{{ temp.productName }}</span>
            </div>
          </div>
          <!-- 公司名稱 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700"
              for="companyName">{{ $t("field.companyName") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.companyName')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="companyName" type="text"
                    class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" v-model="temp.companyName" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 聯絡人 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700"
              for="name">{{ $t("field.name") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.name')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="name" type="text"
                    class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" v-model="temp.name" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 職稱 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700"
              for="jobTitle">{{ $t("field.jobTitle") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.jobTitle')" class="w-full">
                <div class="w-full relative">
                  <input id="jobTitle" type="text"
                    class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    v-model="temp.jobTitle" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 電子信箱 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700"
              for="email">{{ $t("field.email") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.email')" rules="required|email" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="email" type="text"
                    class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" v-model="temp.email" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 聯絡電話 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700"
              for="phone">{{ $t("field.phone") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.phone')" class="w-full">
                <div class="w-full relative">
                  <input id="phone" type="text"
                    class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    v-model="temp.phone" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 聯絡地址 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700"
              for="address">{{ $t("field.address") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.address')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="address" type="text"
                    class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                    :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" v-model="temp.address" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 詢問內容 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700"
              for="contents">{{ $t("field.content") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.content')" class="w-full">
                <div class="w-full relative">
                  <textarea id="contents" v-model="temp.contents" rows="7"
                    class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" />
                </div>
              </ValidationProvider>
            </div>
          </div>
        </div>

        <div class="w-full mt-5">
          <button
            class="w-full flex items-center justify-center gap-2 bg-black border border-black text-white text-lg font-bold p-2 cursor-pointer duration-300 hover:bg-white hover:text-black disabled:opacity-80 disabled:cursor-not-allowed"
            :disabled="btnLoading" @click="submit()">
            <fa v-if="btnLoading" class="animate-spin" :icon="['fas', 'spinner']" />
            <span>{{ $t("field.submit") }}</span>
          </button>
        </div>
      </ValidationObserver>
    </Modal>
  </section>
</template>

<script>
import { isJson } from '../../utils';

const formTemplate = {
  companyName: "",
  productName: "",
  email: "",
  name: "",
  jobTitle: "",
  phone: "",
  address: "",
  contents: "",
};

export default {
  name: "product-id",
  async asyncData({ app, $api, env, params, query }) {
    const imgUrl = env.VUE_APP_IMG_URL;

    const getParams = {
      LangCode: app.$cookies.get("lang") || "zh-tw",
      id: params.id
    }
    const { data: getData } = await $api.product.get(getParams);
    const { result: productInfo } = getData
    let getProduct = productInfo[0]
    getProduct.files = isJson(getProduct.files) ? JSON.parse(productInfo[0].files) : ''
    getProduct.specFiles = isJson(getProduct.specFiles) ? JSON.parse(productInfo[0].specFiles) : ''

    const listQuery = {
      CategoryId: query?.category,
      LangCode: app.$cookies.get("lang") || "zh-tw",
      page: 1,
      limit: 10,
      key: "",
    };

    const res = await $api.product.load(listQuery);
    const { data, count } = res.data;

    let productList = null;

    if (data.length > 0) {
      data.map((i) => {
        try {
          i.files = JSON.parse(i.files);
        } catch (error) {
          i.files = ''
          console.error(error);
        }
        return i;
      });

      productList = data.filter((i) => i.id !== params.id);
    }

    return { imgUrl, listQuery, list: getProduct, productList, total: count };
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.list.name}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.list.name}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.list.name}` },
        { name: "keywords", content: this.list.seoKeyword },
        { hid: "description", name: "description", content: this.list.seoDescription },
        { hid: "og:description", property: "og:description", content: this.list.seoDescription },
      ],
    };
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,

      settings: {
        lazyLoad: "ondemand",
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      },

      defaultTab: 1,
      tabList: [
        { id: 1, label: this.$t("product.productInfo") }, // "商品詳情"
        { id: 2, label: this.$t("product.productRule") }, // "商品規格"
      ],

      openModal: false,
      btnLoading: false,
      temp: JSON.parse(JSON.stringify(formTemplate)),
    };
  },
  computed: {
    splitStr() {
      return (str) => {
        return str?.split(" ") || [str];
      };
    },
  },
  methods: {
    getScreenWidth() {
      this.screenWidth = document.body.clientWidth;

      if (this.screenWidth < 768) {
        this.settings.slidesToShow = 2;
        this.settings.slidesToScroll = 2;
      } else {
        this.settings.slidesToShow = 3;
        this.settings.slidesToScroll = 3;
      }
    },

    // 圖片輪播
    changeImg(bool, idx) {
      if (idx) {
        this.$refs.c1.goTo(idx, true);
        this.$refs.c2.goTo(idx, true);
      } else {
        if (!bool) {
          this.$refs.c1.prev();
          this.$refs.c2.prev();
        } else {
          this.$refs.c1.next();
          this.$refs.c2.next();
        }
      }
    },
    openQue(productName) {
      this.temp.productName = productName;
      this.openModal = true;
    },
    async submit() {
      const status = await this.$refs.form.validate();
      if (status) {
        this.btnLoading = true;

        this.api.product
          .sendMail(this.temp)
          .then((res) => {
            if (res.data.code === 200) {
              this.$swal
                .fire({
                  icon: "success",
                  title: this.$t("swal.askSuccess"),
                  showConfirmButton: false,
                  showCancelButton: true,
                  cancelButtonText: this.$t("swal.close"),
                  cancelButtonColor: "#D35A5A",
                })
                .then(() => {
                  this.btnLoading = false;
                  this.openModal = false;
                  this.temp = JSON.parse(JSON.stringify(formTemplate));
                });
            } else {
              this.btnLoading = false;
            }
          })
          .catch(() => {
            this.btnLoading = false;
          });
      } else {
        this.$nextTick(() => {
          let isError = document.getElementsByClassName("is-error");
          isError[0].scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        });
      }
    },

    goProduct(item) {
      if (this.$route.params.id === item.id) return;
      this.$router.push({
        name: "product-id",
        params: { id: item.id },
        query: { category: this.$route.query.category, model: item.productCode },
      });
    },
  },
  mounted() {
    window.addEventListener("resize", this.getScreenWidth);

    if (this.screenWidth < 768) {
      this.settings.slidesToShow = 2;
      this.settings.slidesToScroll = 2;
    } else {
      this.settings.slidesToShow = 3;
      this.settings.slidesToScroll = 3;
    }

    const getTableClass = document.querySelector(".prodRule > table > tbody > tr > td:first-child");

    const getLang = this.$cookies.get("lang") || "zh-tw";
    if (!getTableClass) return
    if (getLang === "en") {
      getTableClass.style.minWidth = "160px";
      getTableClass.style.maxWidth = "160px";
    } else {
      getTableClass.style.minWidth = "80px";
      getTableClass.style.maxWidth = "80px";
    }
  },
};
</script>