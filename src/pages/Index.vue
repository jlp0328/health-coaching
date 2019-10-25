<template>
  <ClientLayout>
    <Login />
  </ClientLayout>
</template>

<script>
import Login from "./Login";
import Weight from "./Weight";

export default {
  components: {
    Login,
    Weight
  },
  metaInfo: {
    title: "Daily weight"
  }
};
</script>

<style>
</style>
