<template>
  <section class="w-full h-28 py-3 bg-[url('~/static/images/bgImg_footer.png')] bg-repeat">
    <div class="w-full h-full max-w-[1280px] mx-auto">
      <div class="w-full h-full flex flex-col gap-2 items-center justify-center">
        <div class="w-full flex items-center justify-center gap-3">
          <img class="w-28 md:w-32 -translate-y-2" src="~/static/images/logo_footer.png" alt="" />
          <div class="flex flex-col gap-2">
            <div class="flex flex-col md:flex-row gap-1 md:gap-3">
              <div class="flex items-center">
                <b>{{ $t("field.tel") }}</b
                >：
                <p class="text-xs md:text-sm lg:text-base">{{ $t("about.tel") }}</p>
              </div>
              <div class="flex items-center">
                <b>{{ $t("field.fax") }}</b
                >：
                <p class="text-xs md:text-sm lg:text-base">{{ $t("about.fax") }}</p>
              </div>
            </div>

            <div class="hidden md:block">
              <div class="w-full max-w-[400px] lg:max-w-full flex">
                <b>{{ $t("field.address") }}</b
                >：<a class="hover:underline text-xs md:text-sm lg:text-base" href="https://goo.gl/maps/fgJDF1d4FpDEf7L98" target="_blank">{{ $t("about.address") }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden w-full max-w-[330px] flex items-center justify-center">
          <b>{{ $t("field.address") }}</b
          >：<a class="hover:underline text-xs md:text-sm lg:text-base" href="https://goo.gl/maps/fgJDF1d4FpDEf7L98" target="_blank">{{ $t("about.address") }}</a>
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