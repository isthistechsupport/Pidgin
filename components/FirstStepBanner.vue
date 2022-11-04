<template>
  <section class="first-step">
    <div class="first-step__content">
      <div class="first-step__img">
        <nuxt-img
          src="/images/developer.webp"
          :alt="$t('first_step').first_step_image_alt"
        />
      </div>
      <div class="first-step__info">
        <h3 class="first-step__title">
          {{ $t("first_step").first_step_title }}
        </h3>
        <div class="first-step__text">
          <p>
            {{ $t("first_step").first_step_text_1_1
            }}<span>{{ $t("first_step").first_step_text_1_highlighted }}</span
            >{{ $t("first_step").first_step_text_1_2 }}
          </p>
          <p>
            {{ $t("first_step").first_step_text_2_1
            }}<span>{{ $t("first_step").first_step_text_2_highlighted }}</span
            >{{ $t("first_step").first_step_text_2_2 }}
          </p>
        </div>
        <!-- <ButtonPrimary
          class="first-step__button"
          v-bind:buttonLabel="$t('first_step').first_step_button.label"
          v-bind:buttonLink="$t('first_step').first_step_button.link"
        /> -->
        <TempButtonPrimary
          v-bind:buttonLabel="$t('first_step').first_step_button.label"
          buttonLink="mailto:contacto@pidgin.com.co?subject=Agendemos una cita"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.first-step {
  width: 100%;
  background: $blue-dark-2;

  &__content {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    max-width: $laptop;
    margin: 0 auto;
    width: 100%;
    padding: 269px 1.5rem 100px;
  }

  &__img {
    border-radius: 20px;
    width: min(100%, 565px);
    height: 400px;

    img {
      border-radius: 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    width: min(100%, 565px);
  }

  &__title {
    color: $white;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
  }

  &__text {
    color: $white;
    font-size: 1.25rem;
    line-height: 1.2;
    font-weight: 300;

    p {
      margin: 0;

      &:nth-child(1) {
        margin: 0 0 1.5rem;
      }
    }

    span {
      font-weight: 600;
    }
  }

  &__button {
    width: fit-content;
  }
}

@media (max-width: $tablet) {
  .first-step {
    &__content {
      max-width: $tablet;
      padding: 250px 2.5rem 100px;
    }

    &__img {
      width: min(100%, 367px);
      height: 482px;
      border-radius: 20px;

      img {
        object-fit: cover;
      }
    }

    &__info {
      width: min(100%, 367px);
    }
  }
}

@media (max-width: $mobile) {
  .first-step {
    &__content {
      flex-direction: column;
      column-gap: 0;
      row-gap: 50px;
      max-width: $mobile;
      padding: 194px 20px 50px;
    }

    &__img {
      width: min(100%, 400px);
      height: 250px;
      border-radius: 20px;
    }

    &__info {
      width: min(100%, 400px);
      row-gap: 20px;
    }

    &__text {
      font-size: 1rem;

      p {
        &:nth-child(1) {
          margin: 0 0 1rem;
        }
      }
    }
  }
}
</style>
