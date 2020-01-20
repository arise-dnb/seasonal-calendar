<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato|Playfair+Display&display=swap");

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
  color: #1f1f1f;
  background-color: #d4cac1;
  height: 100vh;
  width: 100vw;
  max-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
}
</style>
