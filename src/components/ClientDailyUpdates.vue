<template>
  <div class="main">
    <h3>Update your numbers for today...</h3>
    <div class="col-wrapper">
      <div class="left-col">
        <ClientDailyInput v-model="weight" v-bind:details="weightInfo" />
        <button @click="submitWeight">Submit Weight</button>
      </div>
      <div class="right-col">
        <div class="macro-inputs">
          <ClientDailyInput v-model="carbs" v-bind:details="details[0]" />
          <ClientDailyInput v-model="protein" v-bind:details="details[1]" />
          <ClientDailyInput v-model="fat" v-bind:details="details[2]" />
          <ClientDailyInput v-model="fiber" v-bind:details="details[3]" />
        </div>
        <div class="exercise-inputs">
          <ClientDailyInput v-model="exercise" v-bind:details="details[4]" />
          <ClientDailyInput v-model="notes" v-bind:details="details[5]" />
        </div>

        <button @click="submitMacrosExercise">Submit Macros and Exercise</button>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

import inputData from "./dailyInputs.json";
import ClientDailyInput from "./ClientDailyInput";

export default {
  components: {
    ClientDailyInput
  },
  data() {
    return {
      weight: null,
      carbs: null,
      protein: null,
      fat: null,
      fiber: null,
      exercise: null,
      notes: null,
      user: "uN1o7E21taQVZwieGmYl",
      details: inputData,
      weightInfo: null
    };
  },
  methods: {
    weightValidation(event) {
      //   if (event.keyCode == 46 || event.keyCode == 8) {
      //     return;
      //   }
      //   if (event.keyCode < 48 || event.keyCode > 57) {
      //     event.preventDefault();
      //   }
    },
    submitWeight() {
      const weightData = {
        client: this.user,
        date: new Date(),
        weight: this.weight
      };

      //   axios
      //     .post(
      //       "https://health-db-9afe2.firebaseapp.com/api/v1/weight/weight-log",
      //       data
      //     )
      //     .then(response => {
      //       console.log(response);
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
    },
    async submitMacrosExercise() {
      try {
        let [macros, exercise] = await Promise.all([
          this.dailyMacros(),
          this.dailyExercise()
        ]);
        console.log(macros, exercise);
      } catch (error) {
        console.log(error);
      }
    },

    async dailyMacros() {
      try {
        const macroData = {
          client: this.user,
          date: new Date(),
          protein: parseInt(this.protein),
          carbs: parseInt(this.carbs),
          fat: parseInt(this.fat),
          fiber: parseInt(this.fiber)
        };

        return await axios.post(
          "https://health-db-9afe2.firebaseapp.com/api/v1/macros/daily-macros",
          macroData
        );
      } catch (error) {
        console.log(error);
      }
    },
    async dailyExercise() {
      try {
        const exerciseData = {
          client: this.user,
          date: new Date(),
          exercise: this.exercise,
          notes: this.notes
        };

        return await axios.post(
          "https://health-db-9afe2.firebaseapp.com/api/v1/exercise/daily-exercise",
          exerciseData
        );
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.weight = "";
    this.weightInfo = this.details.shift();
    console.log(this.$auth);
  }
};
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}

.main {
  padding: 10px;
  margin: 10px;
  min-height: 200px;
  background-color: lightpink;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  display: flex;
  flex-direction: column;
  .col-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 175px;
    .left-col {
      padding: 10px;
    }
    .right-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;
      .macro-inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 12%;
        grid-column-gap: 10%;
      }
      .exercise-inputs {
        display: grid;
        grid-row-gap: 12%;
      }
    }
  }
}
</style>