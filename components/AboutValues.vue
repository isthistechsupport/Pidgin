<template>
  <div class="about-us-values">
    <div class="about-us-values__gradient"></div>
    <div class="about-us-values__content">
      <p>Nos representan:</p>
      <AboutCards />
      <AboutElements />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.about-us-values {
  position: relative;

  &__gradient {
    @include effect-gradient-2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    padding: 50px 24px 100px;

    p {
      color: $gray-1;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
    }
  }
}

@media (max-width: 820px) {
  .about-us-values__content {
    row-gap: 50px;
    padding: 50px 40px 100px;
  }
}

@media (max-width: 700px) {
  .about-us-values {
    &__content {
      padding: 50px 20px;
    }
  }
}
</style>
