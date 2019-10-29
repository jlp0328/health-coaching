<template>
  <div>
    <Navigation />
    <div class="main"></div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";

export default {
  components: {
    Navigation
  },
  data() {
    return {
      user: this.$store.state.user.id
    };
  },
  created() {
    console.log(this.user);
  }
};
</script>

<style lang="scss" scoped>
</style>