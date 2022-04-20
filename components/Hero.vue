<template>
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__layout">
      <div class="hero__decorators-container">
        <div class="hero__decorators hero__decorators--left"></div>
        <div class="hero__decorators hero__decorators--right"></div>
      </div>
      <div class="hero__content">
        <div class="hero__title-container">
          <h1 class="hero__title">{{ $t("hero").title_hero }}</h1>
          <vue-typed-js
            :loop="true"
            :typeSpeed="150"
            :backSpeed="50"
            :cursorChar="''"
            :strings="$t('hero').title_hero_animated_text"
            :key="textAnimationKey"
          >
            <h2 class="hero__title">
              {{ $t("hero").title_connector }} <span class="typing"></span>
            </h2>
          </vue-typed-js>
        </div>
        <div class="hero__title-container--mobile">
          <h1 class="hero__title">
            {{ $t("hero").title_hero }} {{ $t("hero").title_connector }}
          </h1>
          <vue-typed-js
            :loop="true"
            :typeSpeed="150"
            :backSpeed="50"
            :cursorChar="''"
            :strings="$t('hero').title_hero_animated_text"
            :key="textAnimationKey"
          >
            <h2 class="hero__title">
              <span class="typing"></span>
            </h2>
          </vue-typed-js>
        </div>
        <p>
          {{ $t("hero").hero_paragraph }}
        </p>
        <ButtonPrimary
          v-bind:buttonLabel="$t('hero').hero_button.label"
          v-bind:buttonLink="$t('hero').hero_button.link"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["textAnimationKey"],
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.hero {
  display: flex;
  align-items: center;

  &__layout {
    display: flex;
    align-items: center;
    max-width: 1600px;
    margin: 74px auto 5rem;
    padding: 0 24px;
    width: 100%;
  }

  &__decorators {
    width: 240px;
    height: 380px;

    &-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100vw;
      position: relative;
      z-index: -1;
    }

    &--left {
      background-image: url("~/assets/images/svg/egg-1.svg"),
        url("~/assets/images/svg/egg-2.svg"),
        url("~/assets/images/svg/egg-3.svg");
      background-repeat: no-repeat;
      background-position: top center, center left, bottom right;
    }

    &--right {
      background-image: url("~/assets/images/svg/egg-4.svg"),
        url("~/assets/images/svg/egg-5.svg"),
        url("~/assets/images/svg/egg-6.svg");
      background-repeat: no-repeat;
      background-position: top center, center right, bottom left;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    max-width: $laptop;
    padding: 48px 1.5rem 8px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;

    & > div > div {
      justify-content: center;
    }

    h1,
    h2 {
      color: $black;
      font-size: 4rem;
      font-weight: 600;
      line-height: 1;
      margin: 0;
      text-align: center;

      span {
        color: $blue-dark-4;

        &:nth-child(2) {
          display: inline-block;
          background: $blue-primary;
          width: 1px;
          height: 1em;
          margin-left: 0.1em;
          margin-bottom: -0.12em;
        }
      }
    }

    p {
      color: $gray-1;
      font-size: 1.25rem;
      line-height: 1.2;
      font-weight: 300;
      text-align: center;
      margin: 0;
      max-width: 740px;
    }
  }

  &__title-container {
    &--mobile {
      display: none;
    }
  }

  &__decorators {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 820px) {
  .hero {
    position: relative;

    &__bg {
      position: absolute;
      background-image: url("~/assets/images/svg/hero-bg-tablet.svg");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      width: 100%;
      height: 100%;
    }

    &__layout {
      justify-content: center;
      max-width: $tablet;
      margin: 74px auto 5rem;
      padding: 0 24px;
    }

    &__decorators {
      display: none;

      &-container {
        display: none;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 30px;
      max-width: 754px;
      padding: 48px 1.5rem 8px;
      position: relative;
      left: unset;
      transform: unset;
      width: 100%;

      & > div > div {
        justify-content: center;
      }

      h1,
      h2 {
        color: $black;
        font-size: 3.5rem;
        font-weight: 600;
        line-height: 1;
        margin: 0;
        text-align: center;

        span {
          color: $blue-dark-4;

          &:nth-child(2) {
            display: inline-block;
            background: $blue-primary;
            width: 1px;
            height: 1em;
            margin-left: 0.1em;
            margin-bottom: -0.12em;
          }
        }
      }

      p {
        color: $gray-1;
        font-size: 1.25rem;
        line-height: 24px;
        font-weight: 300;
        text-align: center;
        margin: 0;
        max-width: 740px;
      }
    }
  }
}

@media (max-width: $mobile) {
  .hero {
    height: 500px;

    &__bg {
      background-image: url("~/assets/images/svg/hero-bg-mobile.svg");
      width: 100%;
      height: 100%;
    }

    &__layout {
      max-width: $mobile;
      margin: 2.5rem auto 0;
      padding: 0;
      width: 100%;
    }

    &__content {
      row-gap: 25px;
      max-width: $mobile;
      padding: 48px 20px 8px;
      position: absolute;

      h1,
      h2 {
        font-size: 2rem;
        margin: 0;
        max-width: 370px;
      }

      p {
        font-size: 1rem;
        max-width: 400px;
      }
    }

    &__title-container {
      display: none;

      &--mobile {
        display: block;
      }
    }
  }
}
</style>
