<script setup>
import IconLoading from "@/components/icons/IconLoading.vue";
</script>

<template>
  <div class="w-fit h-fit px-3 py-1 bg-blue-600 rounded-lg text-cyan-50 cursor-pointer z-10 select-none
  hover:shadow-xl hover:shadow-blue-500 hover:-translate-y-0.5 transition-all">
    <span v-if="!loading">{{text}}</span>
    <IconLoading v-if="loading" class="fill-blue-300"/>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>