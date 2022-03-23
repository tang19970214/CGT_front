<template>
  <section class="w-full h-28 bg-[url('~/static/images/bgImg_footer.png')] bg-repeat">
    <div class="w-full h-full max-w-[1280px] mx-auto">
      <div class="w-full h-full flex items-center justify-center">
        <div class="flex flex-col lg:flex-row items-center lg:gap-5">
          <img class="w-20 h-20" src="~/static/images/logo_footer.png" alt="" />

          <div class="flex flex-col gap-1.5 text-sm">
            <div class="flex items-center">
              <span class="min-w-[80px] text-justify">{{ $t("field.tel") }}：</span>
              <p>(02)2225-8288</p>
            </div>

            <div class="flex items-center">
              <span class="min-w-[80px] text-justify">{{ $t("field.address") }}：</span>
              <p>{{ $t("about.address") }}</p>
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
};
</script>