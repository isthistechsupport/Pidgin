<template>
  <div>
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~assets/scss/variables";
@import "~assets/scss/legal";

html,
* {
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  font-family: $montserrat !important;
}
</style>
