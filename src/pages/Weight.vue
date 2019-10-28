<template>
  <ClientLayout>
    <div class="weight-exercise-container">
      <h2>Weight & Exercise</h2>
      <div class="current-week">
        <p>
          Current Week:
          <span>10/28/19 - 11/3/19</span>
        </p>

        <p>
          Current Weekly Weight Average:
          <span>143.28</span>
        </p>
      </div>
      <WeightExerciseLog />
    </div>
  </ClientLayout>
</template>

<script>
const axios = require("axios");
import WeightExerciseLog from "../components/WeightExerciseLog";

export default {
  components: {
    WeightExerciseLog
  },
  data() {
    return {
      user: this.$store.state.user.id
    };
  },
  methods: {
    async getDailyWeightRecords() {
      let weightLog = await axios.get(
        `https://health-db-9afe2.firebaseapp.com/api/v1/weight/weight-log/${this.user}`
      );

      console.log(weightLog);
    }
  },
  created() {
    this.getDailyWeightRecords();
  }
};
</script>

<style lang="scss" scoped>
.weight-exercise-container {
  display: flex;
  flex-direction: column;
  padding: $container-padding;
  margin: $container-margin;
}

.current-week {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>