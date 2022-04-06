<template>
  <section class="w-full flex flex-col gap-5">
    <div class="w-full border border-[#d9d9d9] bg-white shadow-md p-6 grid grid-cols-12 gap-5">
      <div class="col-span-12 md:col-span-7">
        <VueSlickCarousel v-bind="settings" ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true">
          <div v-for="(item, idx) in list.files" :key="idx">
            <img class="w-full object-cover pointer-events-none" :src="`${imgUrl}/${item.filePath}`" :alt="item.fileName" />
          </div>
        </VueSlickCarousel>
        <!-- 手機版輪播按鈕 -->
        <button @click="changeImg(false)" class="absolute left-3 top-1/4 z-10 w-8 h-8 shadow-md rounded-full bg-primary p-2.5 flex md:hidden justify-center items-center duration-300 hover:bg-primary">
          <fa icon="fa-solid fa-angle-left" class="text-white duration-300 group-hover:text-white"></fa>
        </button>
        <button @click="changeImg(true)" class="absolute right-3 top-1/4 z-10 w-8 h-8 shadow-md rounded-full bg-primary p-2.5 flex md:hidden justify-center items-center duration-300 hover:bg-primary">
          <fa icon="fa-solid fa-angle-right" class="text-white duration-300 group-hover:text-white"></fa>
        </button>
        <div class="relative w-full">
          <VueSlickCarousel :arrows="false" :slidesToShow="4" ref="c2" :asNavFor="$refs.c1" :focusOnSelect="true" class="mt-5 -mx-1">
            <div v-for="(item, idx) in list.files" :key="'S_' + idx" class="pr-2" @click="changeImg(idx)">
              <img class="w-full h-20 md:h-32 object-cover ml-1 pointer-events-none" :src="`${imgUrl}/${item.filePath}`" :alt="item.fileName" />
            </div>
          </VueSlickCarousel>
          <!-- 電腦版輪播按鈕 -->
          <button @click="changeImg(false)" class="absolute left-1 top-1/2 -translate-y-4 w-8 h-8 rounded-full bg-[#d9d9d9] p-2.5 hidden md:flex justify-center items-center duration-300 hover:bg-primary group">
            <fa icon="fa-solid fa-angle-left" class="text-black duration-300 group-hover:text-white"></fa>
          </button>
          <button @click="changeImg(true)" class="absolute right-1 top-1/2 -translate-y-4 w-8 h-8 rounded-full bg-[#d9d9d9] p-2.5 hidden md:flex justify-center items-center duration-300 hover:bg-primary group">
            <fa icon="fa-solid fa-angle-right" class="text-black duration-300 group-hover:text-white"></fa>
          </button>
        </div>
      </div>
      <div class="col-span-12 md:col-span-5 w-full flex flex-col gap-4">
        <span class="text-gray-500">{{ $t("product.productId") }}：{{ list.productCode }}</span>
        <strong class="text-lg">{{ list.name }}</strong>
        <button class="w-full p-3 box-border border border-primary bg-primary text-white transition duration-300 hover:bg-white hover:text-primary" @click="openQue(list.name)">{{ $t("product.ask") }}</button>
      </div>
    </div>

    <div class="w-full border border-[#d9d9d9] bg-white shadow-md p-6">
      <!-- title -->
      <div class="w-full pb-2 border-b border-[#d9d9d9]">
        <strong class="text-lg tracking-widest">{{ $t("product.info") }}</strong>
      </div>
      <!-- content -->
      <div class="w-full py-5 border-b border-[#d9d9d9]">
        <div v-html="list.contents"></div>
      </div>
      <!-- footer -->
      <div class="w-full flex pt-5 items-center justify-between">
        <strong>{{ list.name }}</strong>
        <button class="inline-block py-2 px-8 box-border border border-primary bg-primary text-white transition duration-300 hover:bg-white hover:text-primary" @click="openQue()">{{ $t("product.ask") }}</button>
      </div>
    </div>

    <!-- modal -->
    <Modal :openModal="openModal" :title="`${$t('product.ask')}...`" width="w-11/12 md:w-3/5 lg:w-2/5" @closeModal="openModal = false">
      <ValidationObserver ref="form" class="w-full flex flex-col gap-3">
        <div class="w-full text-[#606266] flex flex-col gap-2">
          <!-- 詢問商品 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700">{{ $t("product.askProduct") }}</label>
            <div class="w-full form-group relative">
              <span class="text-lg font-bold">{{ temp.productName }}</span>
            </div>
          </div>
          <!-- 公司名稱 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700" for="companyName">{{ $t("field.companyName") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.companyName')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="companyName" type="text" class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" :placeholder="$t('placeholder.companyName')" v-model="temp.companyName" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 聯絡人 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700" for="name">{{ $t("field.name") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.name')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="name" type="text" class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" :placeholder="$t('placeholder.name')" v-model="temp.name" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 職稱 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700" for="jobTitle">{{ $t("field.jobTitle") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.jobTitle')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="jobTitle" type="text" class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" :placeholder="$t('placeholder.jobTitle')" v-model="temp.jobTitle" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 電子信箱 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700" for="email">{{ $t("field.email") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.email')" rules="required|email" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="email" type="text" class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" :placeholder="$t('placeholder.email')" v-model="temp.email" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 聯絡電話 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700" for="phone">{{ $t("field.phone") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.phone')" rules="required|phone" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="phone" type="text" class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" :placeholder="$t('placeholder.phone')" v-model="temp.phone" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 聯絡地址 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700" for="address">{{ $t("field.address") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.address')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <input id="address" type="text" class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" :placeholder="$t('placeholder.formAddress')" v-model="temp.address" />
                </div>
              </ValidationProvider>
            </div>
          </div>
          <!-- 詢問內容 -->
          <div class="w-full flex items-center gap-2">
            <label class="form-label min-w-[100px] max-w-[100px] lg:text-lg tracking-widest inline-block text-gray-700" for="contents">{{ $t("field.content") }}</label>
            <div class="w-full form-group relative">
              <ValidationProvider :name="$t('field.content')" rules="required" v-slot="{ errors }" class="w-full">
                <div class="w-full relative">
                  <textarea id="contents" v-model="temp.contents" rows="7" class="form-control w-full py-2 px-3 bg-white border border-[#888888] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ '!border-[#EF4444] is-error': errors.length > 0 }" :placeholder="$t('placeholder.content')" />
                </div>
              </ValidationProvider>
            </div>
          </div>
        </div>

        <div class="w-full mt-5">
          <button class="w-full flex items-center justify-center gap-2 bg-black border border-black text-white text-lg font-bold p-2 cursor-pointer duration-300 hover:bg-white hover:text-black disabled:opacity-80 disabled:cursor-not-allowed" :disabled="btnLoading" @click="submit()">
            <fa v-if="btnLoading" class="animate-spin" :icon="['fas', 'spinner']" />
            <span>{{ $t("field.submit") }}</span>
          </button>
        </div>
      </ValidationObserver>
    </Modal>
  </section>
</template>

<script>
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
  async asyncData({ app, $api, env, params }) {
    const imgUrl = env.VUE_APP_IMG_URL;

    const listQuery = {
      CategoryId: "",
      LangCode: app.$cookies.get("lang") || "zh-tw",
      page: 1,
      limit: 10,
      key: params.id,
    };

    const res = await $api.product.load(listQuery);
    const { code, data, count } = res.data;
    if (data.length > 0) {
      data.map((i) => {
        i.files = JSON.parse(i.files);
        return i;
      });
    }
    if (code !== 200) return;

    return { imgUrl, listQuery, list: data[0], total: count };
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
      settings: {
        lazyLoad: "ondemand",
        arrows: false,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },

      openModal: false,
      btnLoading: false,
      temp: JSON.parse(JSON.stringify(formTemplate)),
    };
  },
  methods: {
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
  },
};
</script>