<template>
  <div class="main">
    <header></header>
    <Navigation />
    <slot />
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  components: {
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
}
</style>