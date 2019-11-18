<template>
  <div>
    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col v-for="(image, index) in imgArray" :key="image.name + index">
          <b-img thumbnail fluid :src="image.src"></b-img>
        </b-col>
      </b-row>
    </b-container>
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
<style scoped></style>
