<template>
  <div class="services__languages">
    <p>{{ $t("services_page").stack_text_1 }}</p>
    <LanguagesSlideBar />
    <p>{{ $t("services_page").stack_text_2 }}</p>
    <ButtonPrimary
      class="services-cta__button"
      v-bind:buttonLabel="$t('services_page').write_us_button_label"
      v-bind:buttonLink="$t('services_page').write_us_button_link"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.services__languages {
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  align-items: center;
  padding: 50px 0;

  p {
    @include body-20;
    padding: 0 24px;
    text-align: center;
  }
}

@media (max-width: $tablet) {
  .services__languages {
    padding: 100px 0 50px;

    p {
      padding: 0 40px;
      max-width: 600px;
    }
  }
}

@media (max-width: 600px) {
  .services__languages {
    padding: 70px 0 50px;

    p {
      padding: 0 20px;
      max-width: unset;
    }
  }
}
</style>
