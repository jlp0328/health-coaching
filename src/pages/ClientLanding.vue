<template>
  <Client-Layout>
    <div class="client-landing">
      <h1>Welcome, {{this.$store.state.user.firstName}}!</h1>
      <ClientDashboard />
      <ClientDailyUpdates />
    </div>
  </Client-Layout>
</template>

<script>
import ClientDailyUpdates from "../components/ClientDailyUpdates";
import ClientDashboard from "../components/ClientDashboard";

export default {
  components: {
    ClientDailyUpdates,
    ClientDashboard
  },
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
    console.log(this.$auth);
  }
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.client-landing {
  display: flex;
  flex-direction: column;
}
</style>