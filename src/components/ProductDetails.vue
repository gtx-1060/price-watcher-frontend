<template>
  <div class="w-fill h-auto drop-shadow bg-white py-4 px-6 rounded-lg space-y-4">
    <div>
      <span>Выберите источник:</span>
      <div class="w-40 inline-block ml-4 z-50">
        <v-select :options="['Все', 'бэстфон', 'магазин 2']" />
      </div>
    </div>

    <div class="w-full h-px bg-gray-200"></div>

    <div class="bg-blue-200 h-96 w-full"></div>

    <div class="space-y-2">
      <h2 class="font-semibold text-lg">Описание</h2>
      <div class="space-y-1">
        <div>
          <span class="text-slate-500">Товар</span>
          <span class="absolute right-0">{{product}}</span>
        </div>
        <div class="w-full h-px bg-gray-100"></div>
        <div>
          <span class="text-slate-500">Источник</span>
          <span class="absolute right-0">{{productSource}}</span>
        </div>
        <div class="w-full h-px bg-gray-100"></div>
        <div>
          <span class="text-slate-500">Последнее сканирование</span>
          <span class="absolute right-0">{{lastScanned}}</span>
        </div>
      </div>
    </div>
    <div class="mt-2 space-x-2">
      <Button class="inline-block" text="Открыть в браузере"/>
    </div>
  </div>
</template>

<script>
import IconLoading from "@/components/icons/IconLoading.vue";
import Button from "@/components/Button.vue";

export default {
  name: "ProductDetails",
  components: {Button, IconLoading},
  props: {
    product: String,
    productSource: String,
    lastScanned: String
  }
}
</script>

<style scoped>

</style>