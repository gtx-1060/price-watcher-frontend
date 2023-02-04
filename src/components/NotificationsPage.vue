<script setup>
  import ProductCard from "@/components/ProductCard.vue";
  import ProductDetails from "@/components/ProductDetails.vue";
</script>

<template>
  <div class="flex space-x-8 flex-grow">
    <div class="pt-4 pr-4 space-y-3 overflow-y-auto h-screen">
      <ProductCard title="iPhone 7 32Gb Rose Gold" store="бэстфон" old-price="33 000" new-price="35 000" type="warning"/>
      <ProductCard title="Iphone" store="бэстфон" old-price="33 000" new-price="35 000"/>
      <ProductCard title="Iphone" store="бэстфон" old-price="33 000" new-price="35 000"/>
      <ProductCard title="Iphone" store="бэстфон" old-price="33 000" new-price="35 000" type="error"/>
      <ProductCard title="Iphone" store="бэстфон" old-price="33 000" new-price="35 000"/>
    </div>
    <div class="flex-grow pr-6 pt-4">
      <ProductDetails product="Iphone" product-source="BESTPHONE" last-scanned="12.08.2019"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationsPage"
}
</script>

<style scoped>

</style>