<template>
  <div class="main">
    <div class="left-col">
      <h3>
        Current Weekly Weight Average:
        <span>145.6</span>
      </h3>
      <h3>Goals for this week...</h3>
      <div class="weekly-goals">
        <p>
          Carbs:
          <span>135</span>
        </p>
        <p>
          Protein:
          <span>135</span>
        </p>
        <p>
          Fat:
          <span>135</span>
        </p>
        <p>
          Exercise:
          <span>Lift 4 days with 20 mins cardio. One day 35 minutes. 2 days of rest.</span>
        </p>
      </div>
    </div>
    <div class="right-col">
      <h3>
        Your next weekly check-in is:
        <span>Monday, October 28</span>
      </h3>
      <h3>
        Your next monthly check-in is:
        <span>Friday, November 1</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  padding: 10px;
  margin: 10px;
  background-color: lightcyan;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  .left-col {
    .weekly-goals {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr 1fr;
      :nth-child(4) {
        grid-column: span 3;
      }
    }
  }
  .right-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}
</style>