<template>
  <div class="error">
    <div class="error__bg"></div>
    <div class="error__content">
      <div class="error__title">
        <h1>{{ $t("error").error_title }}</h1>
        <h2>{{ $t("error").error_subtitle }}</h2>
      </div>
      <div class="error__text">
        <p>
          {{ $t("error").error_text_1
          }}<NuxtLink to="/">{{ $t("error").error_text_link_label }}</NuxtLink
          >.
        </p>
        <p>{{ $t("error").error_text_2 }}</p>
      </div>
      <div class="error__buttons">
        <TempButtonPrimary
          v-bind:buttonLabel="$t('error').error_home_button.label"
          v-bind:buttonLink="$t('error').error_home_button.link"
        />
        <TempButtonSecondary
          v-bind:buttonLabel="$t('error').error_contact_button.label"
          buttonLink="mailto:contacto@pidgin.com.co?subject=Necesito hablar con ustedes - Contacto"
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

.error {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 90vh;

  &__bg {
    position: absolute;
    background-image: url("~/assets/images/svg/error-hero-bg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    max-width: 750px;
    margin: 0 auto;
  }

  &__title {
    text-align: center;

    h1 {
      color: $blue-primary;
      font-size: 3.75rem;
      font-weight: 700;
      margin: 0;
    }

    h2 {
      color: $gray-1;
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
    }
  }

  &__text {
    color: $gray-1;

    p {
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
      text-align: center;

      a {
        color: $blue-primary;
        text-decoration: none;
      }

      &:nth-child(1) {
        margin: 0 0 1.5rem;
      }
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
  }
}

@media (max-width: $tablet) {
  .error {
    &__bg {
      background-image: url("~/assets/images/svg/error-hero-bg-mobile.svg");
    }

    &__content {
      padding: 0 2.5rem;
    }
  }
}

@media (max-width: 600px) {
  .error {
    &__content {
      padding: 0 1.25rem;
    }

    &__title {
      h1 {
        font-size: 2.25rem;
      }

      h2 {
        font-size: 1.5rem;
      }
    }

    &__text {
      p {
        font-size: 1.25rem;

        &:nth-child(1) {
          margin: 0 0 1.25rem;
        }
      }
    }

    &__buttons {
      flex-direction: column;
      column-gap: 0;
      row-gap: 20px;
    }
  }
}
</style>
