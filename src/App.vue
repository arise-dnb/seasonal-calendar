<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato|Playfair+Display:400,700&display=swap");

html,
body {
  height: 100vh;
  width: 100vw;
}

#app {
  font-family: "Lato", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: #d4c9c1;
  height: 100vh;
  width: 100vw;
}
</style>
