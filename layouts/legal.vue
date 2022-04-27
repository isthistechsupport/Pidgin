<template>
  <div>
    <Navbar />
    <div class="legal-doc">
      <div class="bg__gradient"></div>
      <Nuxt />
      <div class="bg__gradient--inverted"></div>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
@import "~assets/scss/variables";

.legal-doc {
  position: relative;

  .bg__gradient {
    @include effect-gradient-2--inverted;
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    &--inverted {
      @include effect-gradient-2;
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 956px;
    padding: 100px 0;
  }

  &__section {
    p {
      &:last-child {
        margin-bottom: 30px;
      }
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    margin-bottom: 50px;
    text-align: center;

    h1 {
      color: $blue-primary;
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
      max-width: 720px;
    }
  }

  &__body {
    p,
    li {
      color: $gray-1;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;

      b {
        font-weight: 600;
      }
    }

    p {
      margin: 0 0 1.25rem;
    }

    ol,
    ul {
      list-style-position: outside;
      margin: 0 0 30px;
      padding-left: 24px;
    }

    li {
      margin: 0;
    }

    h3 {
      color: $blue-primary;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.2;
      margin: 0 0 30px;
    }
  }

  &__text {
    margin-bottom: 30px;
  }
}

@media (max-width: $tablet) {
  .legal-doc {
    &__content {
      max-width: $tablet;
      padding: 100px 40px;
    }
  }
}

@media (max-width: 600px) {
  .legal-doc {
    &__content {
      max-width: 600px;
      padding: 100px 20px;
    }

    &__header {
      h1 {
        font-size: 2rem;
        max-width: 230px;
      }
    }

    &__body {
      p,
      li {
        font-size: 1rem;
      }

      p {
        margin: 0 0 1rem;
      }

      ol {
        padding-left: 20px;
      }
    }
  }
}
</style>
