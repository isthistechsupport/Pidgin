<template>
  <div class="services-style">
    <div class="services-style__header">
      <h1>
        {{ $t("services_page").pidgin_style_title_1 }}
        <span>{{ $t("services_page").pidgin_style_title_2 }}</span>
        {{ $t("services_page").pidgin_style_title_3 }}
      </h1>
      <p>
        {{ $t("services_page").pidgin_style_text_1 }}
      </p>
      <p class="text--secondary">
        {{ $t("services_page").pidgin_style_text_2 }}
      </p>
    </div>
    <div class="services-style__steps">
      <ServicesSteps />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.services-style {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 1.5rem 150px;

  h1 {
    @include title-48;
    color: $black;
    text-align: center;
    margin-bottom: 50px;

    span {
      color: $blue-dark-4;
    }
  }

  p {
    @include body-20;
    text-align: center;
  }

  .text--secondary {
    color: $blue-primary;
  }
}

@media (max-width: $tablet) {
  .services-style {
    max-width: unset;
    width: 100%;
    padding: 100px 2.5rem 100px;

    &__header {
      margin: 0 auto;
      max-width: 560px;
    }
  }
}

@media (max-width: 600px) {
  .services-style {
    padding: 100px 20px 100px;

    h1 {
      @include subtitle-32;
      margin-bottom: 50px;
    }

    p {
      margin-bottom: 1rem;

      &:last-child {
        margin: 0;
      }
    }

    &__header {
      max-width: unset;
    }
  }
}
</style>
