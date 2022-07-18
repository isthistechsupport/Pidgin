<template>
  <div class="services-intro">
    <div class="services-intro__content">
      <p>
        {{ $t("services_page").intro_text_1 }}
        <b>{{ $t("services_page").intro_text_2 }}</b>
        {{ $t("services_page").intro_text_3 }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.services-intro {
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    max-width: 1200px;
    padding: 100px 24px;

    p {
      @include body-28;
      text-align: center;

      b {
        color: $blue-primary;
        font-weight: 600;
      }
    }
  }
}

@media (max-width: 820px) {
  .services-intro {
    &__content {
      max-width: 820px;
      padding: 100px 40px;
    }
  }
}

@media (max-width: 600px) {
  .services-intro {
    &__content {
      max-width: 600px;
      padding: 50px 20px;

      p {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
