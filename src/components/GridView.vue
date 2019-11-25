<template>
  <div id="imagewrapper">
    <div v-for="(image, index) in pictures" :key="image.name + index + 'g'" class="image">
      <b-img :src="image.src"></b-img>
      <div class="text">{{ image.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridView",
  props: { pictures: Array }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imagewrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.image {
  max-width: 500px;
  margin: 10px;
  float: left;
  align-content: space-between;
}
.text {
  color: blue;
}
</style>
