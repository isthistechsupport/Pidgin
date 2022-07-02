<template>
  <div>
    <Navbar />
    <ServicesHero />
    <ServicesIntro />
    <ServicesStyle />
    <ServicesModalities />
    <ServicesLanguages />
    <GradientBar />
    <ServicesWriteUs />
    <Footer />
  </div>
</template>

<script>
import ServiceWriteUs from "../components/ServicesWriteUs.vue";
export default {
  name: "ServicesPage",
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
  components: { ServiceWriteUs },
};
</script>

<style lang="scss" scoped></style>
