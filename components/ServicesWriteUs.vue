<template>
  <section class="services-cta">
    <div class="services-cta__content">
      <div class="services-cta__info">
        <h2 class="services-cta__title">
          {{ $t("services_page").bottom_cta_title }}
        </h2>
        <div class="services-cta__text">
          <p>{{ $t("services_page").bottom_cta_text_1 }}</p>
          <p>{{ $t("services_page").bottom_cta_text_2 }}</p>
        </div>
        <ButtonPrimary
          class="services-cta__button"
          v-bind:buttonLabel="$t('services_page').write_us_button_label"
          v-bind:buttonLink="$t('services_page').write_us_button_link"
        />
      </div>
      <div class="services-cta__img">
        <img
          src="~/assets/images/png/flying-pidgin.png"
          :alt="$t('contact_section').contact_section_img_alt"
        />
        <div class="gradient-decorator"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.services-cta {
  background: $blue-dark-2;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $laptop;
    margin: 0 auto;
    width: 100%;
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    color: $white;
    padding: 0 1.5rem;
    margin-right: 25px;
    min-width: 366px;
  }

  &__title {
    font-size: 3rem;
    line-height: 1;
    font-weight: 600;
    max-width: 300px;
    margin: 0;
  }

  &__text {
    color: $white;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 300;
    max-width: 394px;

    p {
      margin: 0;

      &:nth-child(1) {
        margin: 0 0 1.5rem;
      }
    }
  }

  &__img {
    height: 400px;
    max-width: 650px;
    width: 60%;
    position: relative;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .gradient-decorator {
      @include effect-gradient-3;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 150px;
    }
  }
}

@media (max-width: $tablet) {
  .services-cta {
    &__content {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      max-width: $tablet;
      margin: 0 auto;
      width: 100%;
    }

    &__info {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      color: $white;
      padding: 0 1.5rem;
      margin-right: 25px;
      min-width: unset;
    }

    &__img {
      max-height: unset;
      width: 100%;
      height: 380px;
      position: relative;
      max-width: unset;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .gradient-decorator {
        @include effect-gradient-4;
        position: absolute;
        top: unset;
        bottom: 0;
        right: 0;
        height: 150px;
        width: 100%;
      }
    }

    &__info {
      row-gap: 30px;
      padding: 40px 40px 80px;
      margin-right: 0;
      width: 100%;
    }

    &__title {
      max-width: unset;
    }

    &__text {
      max-width: unset;

      p {
        &:nth-child(1) {
          margin: 0 0 1rem;
        }
      }
    }
  }
}

@media (max-width: $mobile) {
  .services-cta {
    &__content {
      max-width: $mobile;
    }

    &__info {
      padding: 40px 20px 60px;
    }

    &__img {
      height: 216px;

      .gradient-decorator {
        height: 90;
      }
    }

    &__title {
      font-size: 1.75rem;
      max-width: 300px;
    }

    &__text {
      font-size: 1rem;
      max-width: 400px;

      p {
        &:nth-child(1) {
          margin: 0 0 1rem;
        }
      }
    }
  }
}
</style>
