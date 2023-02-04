<template>
  <transition name="slide-fade">
    <div v-if="notification" class=" w-fit h-fit absolute bottom-5 right-5">
      <SimpleCard :title="notification.title" :text="notification.text" :type="notification.type"/>
    </div>
  </transition>
</template>

<script>
import SimpleCard from "@/components/SimpleCard.vue";

export default {
  name: "NotificationDisplay",
  inject: ['subscribe'],
  components: {SimpleCard},
  data() {
    return {
      notification: null
    };
  },
  methods: {
    updateNotification(notification) {
        this.notification = notification;
    }
  },
  created() {
    this.subscribe(this.updateNotification);
  }
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .1s ease;
  transform: translateY(10px);
  opacity: 0;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(.17,.67,.83,.67);
}
.slide-fade-enter-to {
  transform: translateY(-5px);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>