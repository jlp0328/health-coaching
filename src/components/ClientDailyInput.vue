<template>
  <div v-bind:class="container">
    <label :for="this.details.name">{{this.details.label}}:</label>
    <input
      v-bind:class="notes"
      v-bind:value="value"
      @input="emitValue"
      :type="this.details.type"
      :step="this.details.step"
      :minlength="this.details.min"
      :maxlength="this.details.max"
      :name="this.details.name"
      :id="this.details.name"
    />
  </div>
</template>

<script>
export default {
  props: ["value", "details"],
  computed: {
    container: function() {
      return this.details.type === "text"
        ? "input-container-large"
        : "input-container-small";
    },
    notes: function() {
      return this.details.type === "text" ? "large" : "small";
    }
  },
  created() {},
  methods: {
    emitValue(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
label {
  text-transform: capitalize;
}

.small {
  min-width: 75px;
}

.large {
  min-width: 200px;
}

.input-container-small {
  display: grid;
  grid-template-columns: 45% 55%;
}

.input-container-large {
  display: grid;
  grid-template-columns: 20% 80%;
}
</style>