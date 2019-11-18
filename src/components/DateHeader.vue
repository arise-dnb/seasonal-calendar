<template>
  <div>
    {{ date }}
  </div>
</template>

<script>
export default {
  name: "DateHeader",
  data() {
    return {
      date: ""
    };
  },
  mounted: {
    showDate() {
      let today = new Date();
      this.date = today.getDate() + "." + (today.getMonth() + 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
