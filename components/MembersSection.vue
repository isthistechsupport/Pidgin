<template>
  <section class="members">
    <div class="bg__gradient"></div>
    <div class="members__content">
      <h2 class="members__title">
        {{ $t("members").members_title
        }}<span>{{ $t("members").members_title_highlighted }}</span>
      </h2>
      <div class="members__text">
        <p>
          {{ $t("members").members_paragraph }}
        </p>
      </div>
      <MemberCards />
      <ButtonPrimary
        class="members__button"
        v-bind:buttonLabel="$t('members').members_button.label"
        v-bind:buttonLink="$t('members').members_button.link"
      />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.members {
  position: relative;

  .bg__gradient {
    @include effect-gradient-2--inverted;
    width: 100%;
    height: 370px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 50px;
    margin: 0 auto;
    max-width: $laptop;
    padding: 70px 1.5rem;
    width: 100%;
  }

  &__title {
    color: $black;
    font-size: 3rem;
    font-weight: 600;
    margin: 0 0 10px;
    text-align: center;

    span {
      color: $blue-primary;
    }
  }

  &__text {
    color: $gray-1;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.2;
    text-align: center;
    width: 100%;
    max-width: 1110px;

    p {
      margin: 0;
    }
  }
}

@media (max-width: $tablet) {
  .members {
    .bg__gradient {
      height: 1036px;
    }

    &__content {
      row-gap: 50px;
      padding: 70px 2.5rem;
      width: min(100%, $tablet);
    }

    &__text {
      max-width: 754px;
    }
  }
}

@media (max-width: $mobile) {
  .members {
    .bg__gradient {
      height: 1004px;
    }

    &__content {
      row-gap: 30px;
      padding: 50px 20px;
      width: min(100%, $mobile);
    }

    &__title {
      font-size: 2rem;
      margin: 0;
      max-width: 400px;
    }

    &__text {
      font-size: 1rem;
      max-width: 400px;
    }
  }
}
</style>
