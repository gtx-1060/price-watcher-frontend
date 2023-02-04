<template>
  <div class="rounded w-96 h-fit p-3 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all" :class="[computedColor[0]]">
    <div class="mb-1.5">
      <h2 class="font-bold text-lg">{{title}}</h2>
      <h3 class="text-small text-slate-500">Из {{text}}</h3>
    </div>

<!--    <div class="absolute right-3.5 top-3.5 space-x-1">-->
<!--      <icon-close class="inline-block"/>-->
<!--    </div>-->

    <div class="w-full h-1.5 absolute left-0 bottom-0 rounded-b" :class="[computedColor[1]]"></div>
  </div>
</template>

<script>
import IconClose from "./icons/IconClose.vue";

export default {
  name: "SimpleCard",
  components: {IconClose},
  props: {
    title: String,
    text: String,
    type: {
      type: String,
      default: "message",
      validator: (value) => ["message", "warning", "error"].includes(value)
    }
  },
  computed: {
    computedColor() {
      return {
        'message' : ['bg-blue-50', "bg-blue-400"],
        'warning' : ['bg-orange-50', "bg-orange-400"],
        'error'   : ['bg-red-50', "bg-red-400"]
      }[this.type];
    },
  },
}
</script>