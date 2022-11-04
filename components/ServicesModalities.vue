<template>
  <section>
    <div class="services-modalities">
      <div class="services-modalities__content">
        <p>
          {{ $t("services_page").modalities_intro_text_1 }}
        </p>
        <p>
          {{ $t("services_page").modalities_intro_text_2
          }}<strong>{{ $t("services_page").modalities_intro_text_3 }}</strong
          >{{ $t("services_page").modalities_intro_text_4 }}
        </p>
      </div>
    </div>

    <div class="service projects">
      <div class="service__container">
        <div class="service__info">
          <h3 class="service__title">
            {{ $t("services_page").projects_title }}
          </h3>
          <div class="service__text">
            <p>
              {{ $t("services_page").projects_text_1 }}
            </p>
            <p>
              {{ $t("services_page").projects_text_2 }}
            </p>
          </div>
          <TempButtonPrimary
            v-bind:buttonLabel="$t('first_step').first_step_button.label"
            buttonLink="mailto:contacto@pidgin.com.co?subject=Agendemos una cita"
          />
        </div>
        <div class="service__img">
          <img
            src="/images/projects.webp"
            alt="person planning on a white board"
          />
        </div>
      </div>
    </div>

    <div class="service headhunting">
      <div class="service__container">
        <div class="service__info">
          <h3 class="service__title">
            {{ $t("services_page").headhunting_title }}
          </h3>
          <div class="service__text">
            <p>
              {{ $t("services_page").headhunting_text_1 }}
            </p>
            <p>
              {{ $t("services_page").headhunting_text_2 }}
            </p>
          </div>
          <TempButtonPrimary
            v-bind:buttonLabel="$t('first_step').first_step_button.label"
            buttonLink="mailto:contacto@pidgin.com.co?subject=Agendemos una cita"
          />
        </div>
        <div class="service__img">
          <img
            src="/images/headhunting.webp"
            alt="person writting on a sheet"
          />
        </div>
      </div>
    </div>

    <GradientBarInverted />
    <div class="staffing" id="staffing_section">
      <div class="staffing__header">
        <h3 class="service__title">
          {{ $t("services_page").staffing_title }}
        </h3>
        <div class="service__text">
          <p>
            {{ $t("services_page").staffing_text_1 }}
          </p>
          <p>
            {{ $t("services_page").staffing_text_2 }}<br />
            {{ $t("services_page").staffing_text_3
            }}<b
              ><NuxtLink class="service-link" :to="localePath('/contact')">
                {{ $t("services_page").staffing_text_4 }}
              </NuxtLink></b
            >
          </p>
        </div>
      </div>
      <StaffingCards />
    </div>
  </section>
</template>

<script>
import StaffingCards from "./StaffingCards.vue";
import LanguagesSpinner from "./LanguagesSlideBar.vue";
import ServicesLanguages from "./ServicesLanguages.vue";
import GradientBarInverted from "./GradientBarInverted.vue";
export default {
  components: {
    StaffingCards,
    LanguagesSpinner,
    ServicesLanguages,
    GradientBarInverted,
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.services-modalities {
  background: $blue-dark-2;
  padding: 0 24px;

  &__content {
    margin: 0 auto;
    max-width: 665px;
    padding: 100px 0;
    width: 100%;

    p {
      @include subtitle-32;
      color: $white-secondary;
      text-align: center;

      strong {
        color: $blue-light-3;
        font-weight: 600;
      }

      &:first-child {
        margin-bottom: 2rem;
      }
    }
  }
}

.service {
  padding: 100px 0;
  width: 100%;

  &__container {
    display: flex;
    column-gap: 30px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 24px;
  }

  &__title {
    @include title-48;
    color: $black;
  }

  &__info {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    max-width: 660px;
    width: 60%;
  }

  &__text {
    p {
      @include body-20;

      &:first-child {
        margin-bottom: 1.25rem;
      }
    }

    b {
      a {
        color: $blue-primary;
        text-decoration: none;
      }
    }
  }

  &__img {
    border-radius: 20px;
    height: 400px;
    overflow: hidden;
    width: 40%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

.projects {
  background-color: $blue-light-6;
}

.headhunting {
  background-color: $blue-light-6;

  .service__container {
    flex-direction: row-reverse;
  }
}

.staffing {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px 100px;
  width: 100%;

  &__header {
    display: flex;
    flex-direction: column;
    row-gap: 50px;
    text-align: center;
  }
}

@media (max-width: $tablet) {
  .services-modalities {
    padding: 0;

    &__content {
      max-width: unset;
      padding: 100px 80px;
    }
  }

  .service {
    &__container {
      flex-direction: column-reverse;
      row-gap: 50px;
      column-gap: unset;
      max-width: unset;
      padding: 0 40px;
    }

    &__info {
      align-items: center;
      max-width: unset;
      width: 100%;
    }

    &__img {
      width: 100%;
    }
  }

  .headhunting {
    .service__container {
      flex-direction: column-reverse;
    }
  }

  .staffing {
    max-width: unset;
    padding: 0 40px 100px;

    &__header {
      margin: 0 auto;
      max-width: 560px;
    }
  }
}

@media (max-width: 600px) {
  .services-modalities {
    &__content {
      max-width: unset;
      padding: 100px 20px;

      p {
        @include subtitle-24;

        &:first-child {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

  .service {
    padding: 50px 0;

    &__container {
      padding: 0 20px;
    }

    &__title {
      @include subtitle-32;
    }

    &__text {
      p {
        @include body-16;

        &:first-child {
          margin-bottom: 1rem;
        }
      }
    }

    &__img {
      height: 300px;
    }
  }

  .staffing {
    max-width: unset;
    padding: 0 20px 50px;

    &__header {
      margin: 0 auto;
      max-width: 560px;
    }
  }
}
</style>
