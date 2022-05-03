<template>
  <div>
    <Navbar />
    <AboutHero />
    <AboutValues />
    <AboutHistory />
    <AboutMembers />
    <GradientBar />
    <AboutContact />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "AboutUsPage",
  data() {
    return {
      textAnimationKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.textAnimationKey += 1;
    },
  },
};
</script>

<style lang="scss" scoped></style>
