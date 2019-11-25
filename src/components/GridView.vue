<template>
  <div id="imagewrapper">
    <div v-for="(image, index) in imgArray" :key="image.name + index" class="image">
      <b-img :src="image.src"></b-img>
      <div class="text">{{ image.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridView",
  data() {
    return {
      imgArray: [
        { name: "Mandarine", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Apfel", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Birne", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Orange", src: "https://picsum.photos/250/250/?image=58" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#immagewrapper {
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
