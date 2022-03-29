<template>
  <section class="w-full h-28 bg-[url('~/static/images/bgImg_footer.png')] bg-repeat">
    <div class="w-full h-full max-w-[1280px] mx-auto">
      <div class="w-full h-full flex items-center justify-center">
        <div class="flex items-center gap-3 lg:gap-5 px-3">
          <img class="w-28 md:w-32" src="~/static/images/logo_footer.png" alt="" />

          <div class="flex flex-col gap-1.5 lg:text-lg">
            <div class="flex items-center">
              <span class="min-w-[80px] text-justify">{{ $t("field.tel") }}：</span>
              <p>(02)2225-8288</p>
            </div>

            <div class="flex items-center">
              <span class="min-w-[80px] text-justify">{{ $t("field.fax") }}：</span>
              <p>(02)2225-8298</p>
            </div>

            <div class="flex items-center">
              <span class="min-w-[80px] text-justify">{{ $t("field.address") }}：</span>
              <p class="cursor-pointer hover:underline" @click="openMap()">{{ $t("about.address") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    openMap() {
      window.open("https://goo.gl/maps/fgJDF1d4FpDEf7L98");
    },
  },
};
</script>