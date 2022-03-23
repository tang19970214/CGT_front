<template>
  <transition name="fade">
    <div @click="closeModal($event)" class="fixed bg-[rgba(0,0,0,0.3)] backdrop-blur top-0 left-0 p-6 md:p-10 box-border w-screen min-h-screen flex justify-center z-40" :class="`items-${align}`" v-if="openModal">
      <div ref="modalScroll" class="max-h-90vh bg-white rounded-xl z-50 pb-2 overflow-y-auto absolute shadow-[0px_4px_4px_rgba(0,0,0,0.25)]" :class="width">
        <!-- header -->
        <div class="px-4 py-2 sticky top-0 z-10 bg-black bg-opacity-90">
          <div class="w-full flex items-center justify-between text-white">
            <strong class="text-xl tracking-wider">{{ title }}</strong>
            <fa class="text-2xl cursor-pointer" :icon="['fas', 'close']" @click="closeModal($event, 'close')" />
          </div>
        </div>
        <!-- body -->
        <div class="p-4 overflow-y-scroll">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    openModal: {
      type: Boolean,
      required: true,
      default: false,
    },
    height: {
      type: [Number, String],
      require: false,
      default: "h-1/2",
    },
    width: {
      type: [Number, String],
      required: false,
      default: "w-1/2",
    },
    align: {
      type: String,
      required: false,
      default: "center",
    },
    title: {
      type: String,
      required: false,
    },
  },
  methods: {
    closeModal(e, close = null) {
      if (close !== null) {
        this.$emit("closeModal");
      }
      const classList = Array.from(e.target.classList);
      if (classList.indexOf("backdrop-blur") !== -1 || classList.indexOf("fa-xmark") !== -1) {
        this.$emit("closeModal");
      } else return;
    },
  },
  watch: {
    openModal(bol) {
      if (bol) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.max-h-90vh {
  max-height: 90vh;
}
</style>