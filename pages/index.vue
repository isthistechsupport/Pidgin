<template>
  <div>
    <Hero />
    <BenefitsSection />
    <FirstStepBanner />
    <MembersSection />
    <ContactSection />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Pidgin - Home",
    };
  },
  layout: "layout",
};
</script>
