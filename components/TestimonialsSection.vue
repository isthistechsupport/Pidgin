<template>
  <section class="testimonials">
    <div class="testimonials__layout">
      <div class="testimonials__decorators-container">
        <div
          class="testimonials__decorators testimonials__decorators--left"
        ></div>
        <div
          class="testimonials__decorators testimonials__decorators--right"
        ></div>
      </div>
      <div class="testimonials__content">testimonio? xd</div>
    </div>
    <div class="bg__gradient"></div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.testimonials {
  display: flex;
  align-items: center;
  position: relative;

  .bg__gradient {
    @include effect-gradient-2;
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -2;
  }

  &__layout {
    display: flex;
    align-items: center;
    max-width: 1600px;
    margin: 74px auto 0;
    padding: 0 24px;
    width: 100%;
  }

  &__decorators {
    width: 240px;
    height: 430px;

    &-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100vw;
      position: relative;
      z-index: -1;
    }

    &--left {
      background-image: url("~/assets/images/svg/egg-7.svg"),
        url("~/assets/images/svg/egg-8.svg"),
        url("~/assets/images/svg/egg-9.svg");
      background-repeat: no-repeat;
      background-position: top 10% left 4%, center right, bottom 12% left 18%;
    }

    &--right {
      background-image: url("~/assets/images/svg/egg-10.svg"),
        url("~/assets/images/svg/egg-11.svg");
      background-repeat: no-repeat;
      background-position: top 25% right 4%, bottom 25% left 30%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: $laptop;
    padding: 48px 1.5rem 8px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
  }
}

@media (max-width: $tablet) {
  .testimonials {
    &__layout {
      display: flex;
      align-items: center;
      max-width: 1600px;
      margin: 74px auto 0;
      padding: 0;
    }

    &__decorators {
      width: 128px;
      height: 390px;

      &--left {
        background-image: url("~/assets/images/svg/egg-12.svg"),
          url("~/assets/images/svg/egg-13.svg");
        background-repeat: no-repeat;
        background-position: top 25% left 15%, bottom 12% right 45%;
      }

      &--right {
        background-image: url("~/assets/images/svg/egg-14.svg"),
          url("~/assets/images/svg/egg-15.svg");
        background-repeat: no-repeat;
        background-position: top 20% right 0%, bottom 20% left 0;
      }
    }
  }
}
</style>
