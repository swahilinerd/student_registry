<template>
  <router-view v-slot="{Component}">
        <transition name="slide" mode="out-in">
            <component :is="Component" :key="$route.path" />
        </transition>
  </router-view>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.title = "Student Online Application"
  }
}
</script>

<style lang="css"> 
    @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

    html, body {
    font-family: 'Roboto', sans-serif;
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: opacity 1s, transform 1s; 
    }

    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }
</style>
