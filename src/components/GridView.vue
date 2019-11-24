<template>
  <div id="imagewrapper">
    <div
      v-for="(image, index) in imgArray"
      :key="image.name + index"
      class="image"
    >
      <b-img :src="image.src"></b-img>

      <div v-if="imgArray[index] % 2 === 0">
        <div class="break"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridView",
  data() {
    return {
      imgArray: [
        {
          name: "Apfel",
          src: "https://picsum.photos/250/250/?image=58"
        },
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
  background-color: rgb(12, 143, 160);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.image {
  max-width: 500px;
  margin: 5px;
  float: left;
  align-content: space-between;
}
.break {
  background-color: rgb(12, 143, 160);
  src: "https://picsum.photos/250/250/?image=58";
  src: "https://picsum.photos/250/250/?image=54";
}
</style>
