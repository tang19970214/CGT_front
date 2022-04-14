<template>
  <section class="px-3 md:px-6 lg:px-0">
    <div class="w-full border border-[#d9d9d9] rounded bg-white p-5 shadow-md">
      <div class="pb-2 border-b border-[#d9d9d9]">
        <strong class="text-lg tracking-widest">{{ $t("contact.pageTitle") }}</strong>
      </div>

      <div class="w-full flex flex-col lg:flex-row gap-2 items-center md:items-start justify-between py-2 box-border">
        <!-- contact -->
        <div class="w-full xl:w-auto flex flex-col md:flex-row lg:flex-col lg:gap-3 mb-5 lg:mb-0 lg:text-lg">
          <div class="w-full lg:w-auto flex flex-col gap-2 mb-5 lg:mb-0">
            <!-- 電話 -->
            <div class="w-auto flex gap-1.5">
              <fa class="text-[#808080] w-5 translate-y-1" :icon="['fas', 'phone-alt']" />
              <div class="w-auto flex flex-col gap-1.5">
                <p>{{ $t("field.tel") }}</p>
                <p class="text-[#808080]">{{ $t("about.tel") }}</p>
              </div>
            </div>
            <!-- 傳真 -->
            <div class="w-auto flex gap-1.5">
              <fa class="text-[#808080] w-5 translate-y-1" :icon="['fas', 'fax']" />
              <div class="w-auto flex flex-col gap-1.5">
                <p>{{ $t("field.fax") }}</p>
                <p class="text-[#808080]">{{ $t("about.fax") }}</p>
              </div>
            </div>
            <!-- 地址 -->
            <div class="w-auto flex gap-1.5">
              <fa class="text-[#808080] w-5 translate-y-1" :icon="['fas', 'map-marker-alt']" />
              <div class="w-auto flex flex-col gap-1.5">
                <p>{{ $t("field.address") }}</p>
                <a class="hover:underline text-[#808080]" href="https://goo.gl/maps/fgJDF1d4FpDEf7L98" target="_blank">{{ $t("about.address") }}</a>
                <!-- <p class="text-[#808080]">{{ $t("about.address") }}</p> -->
              </div>
            </div>
          </div>
          <!-- google map -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.76050502949!2d121.47740921500574!3d25.00825268398444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9cff4a72547%3A0xb1b5d20d08f2726a!2zQ0dUIOmJhem0u-enkeaKgOaciemZkOWFrOWPuA!5e0!3m2!1szh-TW!2stw!4v1648627407948!5m2!1szh-TW!2stw"
            class="w-full lg:w-96 xl:w-[500px] h-48 lg:h-64"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <!-- form -->
        <div class="w-full xl:w-auto xl:ml-auto">
          <!-- 公司名稱，聯絡人，職稱，連絡電話，聯絡地址，Email，詢問機型，詢問內容 -->
          <ValidationObserver ref="form" class="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <div class="flex flex-col gap-2">
              <!-- 公司名稱 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="companyName">{{ $t("field.companyName") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.companyName')" rules="required" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <input id="companyName" type="text" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.companyName')" v-model="temp.companyName" />
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- 聯絡人 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="name">{{ $t("field.name") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.name')" rules="required" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <input id="name" type="text" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.name')" v-model="temp.name" />
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- 職稱 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="jobTitle">{{ $t("field.jobTitle") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.jobTitle')" rules="required" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <input id="jobTitle" type="text" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.jobTitle')" v-model="temp.jobTitle" />
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- 電子信箱 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="email">{{ $t("field.email") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.email')" rules="required|email" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <input id="email" type="text" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.email')" v-model="temp.email" />
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- 詢問機型 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="productName">{{ $t("field.productName") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.productName')" rules="required" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <input id="productName" type="text" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.productName')" v-model="temp.productName" />
                    </div>
                  </ValidationProvider>
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <!-- 聯絡電話 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="phone">{{ $t("field.phone") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.phone')" rules="required|phone" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <input id="phone" type="text" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.phone')" v-model="temp.phone" />
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- 聯絡地址 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="address">{{ $t("field.formAddress") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.formAddress')" rules="required" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <input id="address" type="text" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.formAddress')" v-model="temp.address" />
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- 詢問內容 -->
              <div class="flex flex-col gap-1 text-sm lg:text-lg">
                <label class="form-label tracking-widest inline-block text-gray-700" for="content">{{ $t("field.content") }}</label>
                <div class="form-group relative">
                  <ValidationProvider :name="$t('field.content')" rules="required" v-slot="{ errors }" class="w-full">
                    <div class="w-full relative">
                      <textarea name="content" id="content" cols="30" rows="8" class="form-control w-full p-2 text-gray-700 border border-[#d9d9d9] transition ease-in-out focus:text-gray-700 focus:border-blue-600 focus:outline-none" :class="{ 'border-[#EF4444]': errors.length > 0 }" :placeholder="$t('placeholder.content')" v-model="temp.contents"></textarea>
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <!-- button -->
              <button class="w-40 ml-auto inline-block p-2.5 bg-[#37acda] rounded text-white tracking-widest hover:bg-opacity-80 disabled:opacity-80 disabled:cursor-not-allowed" @click="submit()" :disabled="btnLoading">
                <fa v-if="btnLoading" class="animate-spin" :icon="['fas', 'spinner']" />
                <span>{{ $t("field.submit") }}</span>
              </button>
            </div>
          </ValidationObserver>
        </div>
      </div>
    </div>
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
  name: "contact",
  async asyncData({ $api, route }) {
    // SEO
    const seoRes = await $api.webSEO.load({ WebPath: route.name });
    const seoList = seoRes.data.result || {};

    return { seoList };
  },
  head() {
    return {
      title: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.contact")}`,
      meta: [
        { name: "title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.contact")}` },
        { hid: "og:title", property: "og:title", content: `${process.env.VUE_APP_WEBNAME}｜${this.$t("menu.contact")}` },
        { name: "keywords", content: this.seoList.seoKeyword || "" },
        { hid: "description", name: "description", content: this.seoList.seoDescription || "" },
        { hid: "og:description", property: "og:description", content: this.seoList.seoDescription || "" },
      ],
    };
  },
  data() {
    return {
      btnLoading: false,
      temp: JSON.parse(JSON.stringify(formTemplate)),
    };
  },
  methods: {
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
                  title: this.$t("swal.submitSuccess"),
                  showConfirmButton: false,
                  showCancelButton: true,
                  cancelButtonText: this.$t("swal.close"),
                  cancelButtonColor: "#D35A5A",
                })
                .then(() => {
                  this.btnLoading = false;
                  this.temp = JSON.parse(JSON.stringify(formTemplate));
                  this.$refs.form.reset();
                });
            } else {
              this.btnLoading = false;
            }
          })
          .catch(() => {
            this.btnLoading = false;
          });
      }
    },
  },
};
</script>