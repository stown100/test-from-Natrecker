<template>
  <div v-if="showPreloader" class="loading">
    <p class="hello"></p><div id="preloader"><div id="loader"></div></div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    showPreloader: {
      type: Boolean,
      default() {
        return [];
      },
    },
  },
};
</script>
