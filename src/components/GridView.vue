<template>
  <div id="imagewrapper">
    <div
      v-for="(image, index) in imgArray"
      :key="image.name + index"
      class="image"
    >
      <b-img :src="image.src"></b-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridView",
  data() {
    return {
      imgArray: [
        { name: "Apfel", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Apfel", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Apfel", src: "https://picsum.photos/250/250/?image=58" },
        { name: "Apfel", src: "https://picsum.photos/250/250/?image=58" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#immagewrapper {
  background-color: powderblue;
  display: flex;
  flex-wrap: wrap;
}
.image {
  max-width: 500px;
  float: left;
}
</style>
