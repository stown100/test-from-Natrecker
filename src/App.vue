<template>
  <Header />
  <router-view></router-view>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Header from ".//components/Header.vue"
export default defineComponent({
  name: 'App',
  components: {
    Header
  }
})
</script>
