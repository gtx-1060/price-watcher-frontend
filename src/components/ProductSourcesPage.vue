<script setup>
  import Button from "@/components/Button.vue";
</script>

<template>
  <div class="flex-grow mt-16">
    <div class="w-fit ml-10">
      <h1 class="font-bold text-2xl mb-3">Добавление</h1>
      <div class="space-x-6 mb-4">
        <div class="inline-block">
          <h3>Адрес магазина</h3>
          <v-select class="w-40 inline-block" :options="['VK']" />
          <input class="h-9 inline-block mt-1 border border-gray-300 rounded px-2 ml-3" type="text" placeholder="Айди продавца">
        </div>
        <div class="inline-block">
          <h3>Название (любое)</h3>
          <input class="h-9 inline-block mt-1 border border-gray-300 rounded px-2" type="text" placeholder="Название">
        </div>
      </div>
      <Button text="Добавить"/>
      <div class="mt-10  w-full space-y-2">
        <div class="w-full flex justify-between font-semibold">
          <h4 class="w-20">Название</h4>
          <h4 class="w-20">Источник</h4>
          <h4 class="w-36">Время обновления</h4>
          <h4 class="w-20">Удаление</h4>
        </div>
        <div class="w-full h-px bg-gray-200"></div>
        <div v-for="product in productStores">
          <div class="w-full flex justify-between mb-2">
            <span class="w-20">{{ product.name }}</span>
            <span class="w-20">{{ product.type }}</span>
            <span class="w-36">{{ product.lastUpdated }}</span>
            <Button class="w-20" text="Удалить"/>
          </div>
          <div class="w-full h-px bg-gray-100"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSourcesPage",
  data() {
    return {
      productStores: [
        {
          name: 'bestphone',
          lastUpdated: '12.03.23',
          type: 'VK'
        },
        {
          name: 'store 2',
          lastUpdated: '12.03.23',
          type: 'VK'
        },
        {
          name: 'store 2 and',
          lastUpdated: '12.03.23',
          type: 'VK'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>