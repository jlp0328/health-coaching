<template>
  <div>
    <h2>Good morning!</h2>
    <div id="weight">
      <label for="daily-weight">What is your weight today?</label>
      <input
        v-model="weight"
        @keydown="weightValidation"
        type="number"
        step="0.1"
        minlength="2"
        maxlength="5"
        name="daily-weight"
        id="daily-weight"
      />
      <button @click="submitWeight">Submit</button>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  data() {
    return {
      weight: 0,
      user: "uN1o7E21taQVZwieGmYl"
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
      let data = {
        client: this.user,
        date: new Date(),
        weight: this.weight
      };
      console.log(data);

      axios
        .post(
          "https://health-db-9afe2.firebaseapp.com/api/v1/weight/weight-log",
          data
        )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.weight = "";
    console.log(this.$auth)
  }
};
</script>

<style lang="scss" scoped>
</style>