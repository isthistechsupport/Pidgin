<template>
  <div class="about-us__cards">
    <div
      class="about-us__card"
      v-for="aboutCard in $t('about').about_values.about_values_cards"
      :key="aboutCard.id"
    >
      <h3 class="about-us__card__title">{{ aboutCard.title }}</h3>
      <p class="about-us__card__text">
        {{ aboutCard.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.about-us {
  &__cards {
    display: flex;
    align-items: center;
    column-gap: 30px;
    padding: 0;
  }

  &__card {
    @include effect-cards-shadow;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    background: $white;
    border-radius: 20px;
    max-width: 364px;
    padding: 30px;
    min-height: 226px;
    width: 100%;

    &__title {
      font-size: 1.5rem;
      font-weight: 600;
      color: $blue-primary;
      margin: 0;
    }

    &__text {
      color: $gray-1;
      font-size: 1rem;
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
      text-align: justify;
    }
  }
}

@media (max-width: 820px) {
  .about-us {
    &__cards {
      column-gap: 20px;
    }
  }
}

@media (max-width: 700px) {
  .about-us {
    &__cards {
      flex-direction: column;
      column-gap: 0;
      row-gap: 20px;
    }

    &__card {
      max-width: 466px;
      min-height: unset;
    }
  }
}
</style>
