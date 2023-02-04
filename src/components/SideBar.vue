<template>
  <div class="w-80 h-screen drop-shadow-2xl bg-white rounded-r-3xl py-10">
    <div class="w-fit mx-auto mb-8">
      <span class="text-xl">My logo</span>
    </div>

    <div v-for="item in routes">
      <SideBarItem :title="item.name" :selected-item="selected" @select="selectItem"/>
    </div>

    <div class="absolute bottom-5 left-4 w-full">
          <div class="bg-blue-400 w-16 h-16 rounded-full inline-block"></div>
          <span class="font-semibold absolute left-20 top-0">Name</span>
          <Button class="absolute right-10 bottom-1" text="Выйти" @click="this.$notify({title: 'title', text: 'text', type: NotificationType.Message})"/>
    </div>
  </div>
</template>

<script>
import SideBarItem from "@/components/SideBarItem.vue";
import Button from "@/components/Button.vue";
import {NotificationType} from "@/plugins/notifier";

export default {
  name: "SideBar",
  computed: {
    NotificationType() {
      return NotificationType
    }
  },
  components: {Button, SideBarItem},
  data() {
    return {
        selected: "Уведомления",
        routes: [
          {
          route : "/",
          name : "Уведомления"
          },
          {
            route : "/product-sources",
            name : "Продукты"
          },
        ]
    };
  },
  methods: {
    selectItem(barItem) {
      const address = this.routes.find(item => item.name === barItem);
      this.$router.push(address.route);
      this.selected = address.name;
    }
  }
}
</script>

<style scoped>

</style>