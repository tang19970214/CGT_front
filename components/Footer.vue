<template>
  <section class="w-full md:h-28 p-5 bg-[#333333]">
    <div class="w-full h-full max-w-[1080px] mx-auto">
      <div class="w-full h-full flex flex-col gap-2 items-center justify-center text-white">
        <div class="w-full flex flex-col items-start md:flex-row md:items-center justify-center gap-5 lg:gap-32">
          <img class="h-12 md:h-16" src="~/static/images/CGT_LOGO_footer.png" alt="鉅鴻科技" />

          <div class="flex flex-col gap-2 lg:gap-1">
            <div class="flex items-center">
              <label>{{ $t("field.tel") }}：</label>
              <a href="tel:+886-2-22258288" class="hover:underline">{{ $t("about.tel") }}</a>
            </div>

            <div class="flex items-center">
              <label>{{ $t("field.fax") }}：</label>
              <p>{{ $t("about.fax") }}</p>
            </div>

            <div class="flex items-center">
              <label>{{ $t("field.address") }}：</label>
              <a class="hover:underline" href="https://goo.gl/maps/fgJDF1d4FpDEf7L98" target="_blank">{{ $t("about.address") }}</a>
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