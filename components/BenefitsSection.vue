<template>
  <section class="benefits">
    <div class="bg__gradient"></div>
    <div class="benefits__content">
      <h2 class="benefits__title">
        {{ $t("benefits").benefits_title_1 }}
        <span>
          {{ $t("benefits").benefits_title_highlighted }}
        </span>
        {{ $t("benefits").benefits_title_2 }}
      </h2>
      <div class="benefits__text">
        <p>
          {{ $t("benefits").benefits_paragraph }}
        </p>
      </div>
      <BenefitCards />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.benefits {
  position: relative;

  .bg__gradient {
    @include effect-gradient-2;
    width: 100%;
    height: 212px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    margin: 4rem auto 0;
    max-width: $laptop;
    width: 100%;
  }

  &__title {
    color: $black;
    font-size: 3rem;
    font-weight: 600;
    margin: 0;

    span {
      color: $blue-primary;
    }
  }

  &__text {
    color: $gray-1;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.2;
    text-align: center;
    max-width: 820px;
    width: 100%;

    p {
      margin: 0;
    }
  }
}

@media (max-width: $tablet) {
  .benefits {
    &__title {
      text-align: center;
      max-width: 834px;
      padding: 0 1.5rem;
    }

    &__text {
      max-width: 600px;
    }
  }
}

@media (max-width: $mobile) {
  .benefits {
    &__content {
      margin: 6rem auto 0;
      max-width: $mobile;
      padding: 0 20px;
    }

    &__title {
      font-size: 2rem;
      max-width: 400px;
      padding: 0;
    }

    &__text {
      font-size: 1rem;
      max-width: 400px;
    }
  }
}
</style>
