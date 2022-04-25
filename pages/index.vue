<template>
  <div>
    <Navbar />
    <Hero v-bind:textAnimationKey="textAnimationKey" />
    <BenefitsSection />
    <FirstStepBanner />
    <MembersSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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

<style lang="scss">
@import "~assets/scss/variables";

html,
* {
  margin: 0;
  padding: 0;
}

body {
  box-sizing: border-box;
  font-family: $montserrat;
}
</style>
