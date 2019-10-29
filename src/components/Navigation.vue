<template>
  <div>
    <div class="main">
      <g-link to="/macros">Macros</g-link>
      <g-link to="/weight">Weight & Exercise</g-link>
      <g-link to="/check-in">Weekly Check-In</g-link>
      <g-link to="/progress">Progress</g-link>
      <g-link to="/chat">Chat</g-link>
      <g-link to="/resources">Resources</g-link>
      <g-link to="/profile">Profile</g-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 20vw;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding: 10px;
}
</style>