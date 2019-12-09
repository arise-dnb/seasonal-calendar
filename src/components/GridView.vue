<template>
  <div class="imgWrapper">
    <div v-for="(image, index) in pictures" :key="image.name + index + 'g'" class="thumbnail">
      <b-img :src="image.src" fluid />
      <div class="text">{{ image.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: { pictures: Array } //default-Wert fehlt
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imgWrapper {
  padding: 10px 10px;
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: white;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
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
