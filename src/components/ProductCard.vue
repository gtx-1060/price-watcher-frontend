<template>
  <div class="rounded w-96 h-fit p-3 shadow hover:shadow-lg hover:-translate-y-0.5 transition-all" :class="[computedColor[0]]">
    <div class="mb-1.5">
      <h2 class="font-bold text-lg">{{title}}</h2>
      <h3 class="text-small text-slate-500">Из {{store}}</h3>
    </div>

    <div class="flex gap-2 items-center mb-3">
      <div class="block">
        <div><span class="text-small text-slate-400">Старая цена</span></div>
        <div><span class="font-semibold">{{oldPrice}}</span></div>
      </div>
      <icon-arrow-right/>
      <div class="block">
        <div><span class="text-small text-slate-400">Новая цена</span></div>
        <div><span class="font-semibold">{{newPrice}}</span></div>
      </div>
    </div>

    <div>
      <span class="text-small text-slate-400  cursor-pointer">Подробнее</span>
    </div>

    <div class="absolute right-3.5 top-3.5 space-x-1">
      <icon-open-link class="inline-block"/>
      <icon-close class="inline-block"/>
    </div>

    <div class="w-full h-1.5 absolute left-0 bottom-0 rounded-b" :class="[computedColor[1]]"></div>
  </div>
</template>

<script lang="ts">
import ArrowRight from "./icons/IconArrowRight.vue";
import IconArrowRight from "./icons/IconArrowRight.vue";
import IconOpenLink from "./icons/IconOpenLink.vue";
import IconClose from "./icons/IconClose.vue";

export default {
  name: "ProductCard",
  components: {IconClose, IconOpenLink, IconArrowRight, ArrowRight},
  props: {
    title: String,
    store: String,
    oldPrice: String,
    newPrice: String,
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
  methods: {
  }
}
</script>