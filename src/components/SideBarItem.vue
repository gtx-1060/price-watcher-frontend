<template>
  <div class="w-full h-14 flex items-center gap-4 cursor-pointer" @click="selectIt">
    <div v-if="selected" class="h-12 w-2 rounded-r-full bg-blue-600"></div>
    <h3 class="text-lg" :class="textStyles">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  props: {
    title: String,
    selectedItem: String,
  },
  computed: {
    textStyles() {
      return this.selected ? "font-semibold" : "text-slate-500 ml-4";
    },
    selected() {
      return this.selectedItem === this.title;
    }
  },
  methods: {
    selectIt() {
      this.$emit("select", this.title);
    }
  }
}
</script>

<style scoped>

</style>