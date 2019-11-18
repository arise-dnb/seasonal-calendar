<template>
  <div class="search">
    <input
      type="text"
      v-model="filter"
      placeholder="Search..."
      v-on:keyup="emitToParent"
    />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      filter: ""
    };
  },
  methods: {
    // Define the method that emits data to the parent as the first parameter to `$emit()`.
    // This is referenced in the <template> call in the parent. The second parameter is the payload.
    emitToParent(event) {
      this.$emit("childToParent", this.filter);
    }
  }
};
</script>
