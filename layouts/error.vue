<template>
  <div>
    <Navbar />
    <ErrorHero />
    <Footer />
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>
