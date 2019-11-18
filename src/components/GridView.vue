<template>
  <div>
    <div
      v-for="(image, index) in imgArray"
      id="immagewrapper"
      :key="image.name + index"
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
.immagewrapper {
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
}
</style>
