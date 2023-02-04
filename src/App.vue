<script setup>
import SideBar from "@/components/SideBar.vue";
import NotificationDisplay from "@/components/NotificationDisplay.vue";
</script>

<template>
  <main>
    <div class="flex space-x-12">
      <SideBar/>
      <router-view></router-view>
      <NotificationDisplay />
    </div>
  </main>
</template>

<style scoped>

</style>
