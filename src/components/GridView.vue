<template>
  <div class="imgWrapper">
    <div v-for="(image, index) in pictures" :key="image.name + index" class="thumbnail">
      <b-img :id="image.name" :src="image.src" fluid @click="goToDetail(image.name, index)" />
      <div class="text">{{ image.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridView",
  // eslint-disable-next-line vue/require-default-prop
  props: { pictures: Array },
  data: function() {
    return {
      fruit_name: "test",
      entry: []
    };
  }, //default-Wert fehlt
  methods: {
    goToDetail(fruit_id, index) {
      this.entry = this.pictures[index];
      this.$router.push({
        name: "fruit",
        params: { fruit: this.entry }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgWrapper {
  padding: 10px 10px;
  width: 90%;
  max-height: 96%;
  height: auto;
  overflow-y: scroll;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: greenyellow;

  margin-left: auto;
  margin-right: auto;

  font-size: 20pt;
}
.thumbnail {
  max-width: 48%;
  margin: 1%;

  float: left;
  align-content: space-between;
}
.text {
  color: rgb(13, 13, 14);
}
</style>
