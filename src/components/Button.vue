<template>
  <div class="w-fit h-fit px-3 py-1 bg-blue-600 rounded-lg text-cyan-50 cursor-pointer z-10 select-none
  hover:shadow-xl hover:shadow-blue-500 hover:-translate-y-0.5 transition-all">
    {{text}}
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  }
}
</script>

<style scoped>

</style>