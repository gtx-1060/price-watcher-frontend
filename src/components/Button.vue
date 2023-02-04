<script setup>
import IconLoading from "@/components/icons/IconLoading.vue";
</script>

<template>
  <div class="w-fit h-fit px-3 py-1.5 rounded-lg text-cyan-50 cursor-pointer z-10 select-none
  hover:-translate-y-0.5 transition-all" :class="[color, hoverStyle]">
    <span :class="textColor" v-if="!loading">{{text}}</span>
    <IconLoading v-if="loading" class="fill-blue-300"/>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: {
      type: String,
      default: "bg-blue-600"
    },
    textColor: {
      type: String,
      default: "text-white"
    },
    hoverStyle: {
      type: String,
      default: "hover:shadow-blue-500 hover:shadow-lg "
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>