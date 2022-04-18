<template>
  <div>
    <Navbar />
    <main>
      <Hero />
      <BenefitsSection />
      <FirstStepBanner />
      <MembersSection />
      <!-- <TestimonialsSection /> -->
      <ContactSection />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
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
