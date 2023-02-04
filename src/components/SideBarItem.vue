<template>
    <div class="w-full h-14 flex items-center gap-4 cursor-pointer select-none" @click="selectIt">
      <transition name="slide">
        <div v-if="selected" class="h-11 w-1.5 rounded-r-full bg-blue-600"></div>
      </transition>
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
.slide-enter-active {
  transition: all .3s ease;
  transform: translateX(-10px);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.slide-leave-active {
  transition: all .2s ease;
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-leave-to + h3 {
  transition: all .2s linear;
}

.slide-leave-to + h3 {
  transform: translateX(-22px);
  /*opacity: 0;*/
}
</style>