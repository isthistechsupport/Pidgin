<template>
  <div class="services-hero">
    <div class="services-hero__content">
      <div class="services-hero__text">
        <h1>
          {{ $t("services_page").hero_title_1 }}
          <span>{{ $t("services_page").hero_title_2 }}</span>
          {{ $t("services_page").hero_title_3 }}
        </h1>
        <p>
          {{ $t("services_page").hero_text }}
        </p>
        <ButtonPrimary
          v-bind:buttonLabel="$t('services_page').hero_button_label"
          v-bind:buttonLink="$t('services_page').hero_button_link"
        />
      </div>
      <div class="services-hero__img">
        <nuxt-img
          src="/images/developer.webp"
          alt="man wearing a black t-shirt using a laptop"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.services-hero {
  margin: 90px auto 0;
  max-width: 1200px;

  &__content {
    display: flex;
    column-gap: 30px;
    align-items: center;
    padding: 100px 1.5rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    h1 {
      color: $black;
      @include title-48;

      span {
        color: $blue-primary;
      }
    }

    p {
      @include body-20;
      max-width: 632px;
    }
  }

  &__img {
    @include effect-modal-shadow;
    border-radius: 20px;
    min-width: 364px;
    height: 400px;
    overflow: hidden;
    width: 50%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

@media (max-width: $tablet) {
  .services-hero {
    max-width: unset;
    width: 100%;

    &__content {
      column-gap: 20px;
      padding: 160px 2.5rem;
    }

    &__text {
      flex-shrink: 0;
      max-width: 464px;

      h1 {
        line-height: 1;
      }

      p {
        max-width: 100%;
      }
    }

    &__img {
      min-width: 270px;
      height: 320px;
      width: 40%;
    }
  }
}

@media (max-width: 825px) {
  .services-hero {
    &__text {
      flex-shrink: 1;

      h1 {
        @include subtitle-32;
      }
    }
  }
}

@media (max-width: 600px) {
  .services-hero {
    margin: 90px auto 0;

    &__content {
      flex-direction: column-reverse;
      row-gap: 50px;
      column-gap: unset;
      justify-content: center;
      padding: 80px 20px 100px;
    }

    &__text {
      align-items: center;

      h1 {
        @include subtitle-32;
        text-align: center;
      }

      p {
        @include body-16;
        max-width: unset;
        text-align: center;
      }
    }

    &__img {
      height: 250px;
      width: 100%;
    }
  }
}
</style>
