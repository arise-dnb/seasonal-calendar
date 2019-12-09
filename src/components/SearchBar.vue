<template>
  <div class="search">
    <input
      v-model="filter"
      class="search"
      type="text"
      placeholder="Search..."
      @keyup="emitToParent"
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

<style scoped>
.search {
  width: 100%;
  height: 40px;
  font-size: 16pt;
  border: none;
}
</style>
