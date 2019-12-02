<template>
  <div class="dateheader">{{ date }}</div>
</template>

<script>
export default {
  name: "DateHeader",
  data() {
    return {
      date: ""
    };
  },

  mounted() {
    this.showDate();
  },

  methods: {
    showDate() {
      let today = new Date();
      let month = [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember"
      ];
      this.date = today.getDate() + "." + month[today.getMonth()];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dateheader {
  font-family: "Playfair Display", "serif";
  font-size: 20pt;
}
</style>
