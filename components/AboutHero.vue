<template>
  <div class="about-us-hero">
    <div class="about-us-hero__bg"></div>
    <div class="about-us-hero__content">
      <p>
        Somos <b>Pidgin</b>, una firma de desarrolladores bajo demanda,
        orientada a brindar soluciones a la medida para las necesidades de cada
        negocio. Nuestro amplio rango de servicios abarca desde consultoría y
        análisis hasta desarrollo de software.
      </p>
      <p>
        Buscamos ayudar a nuestros clientes a hacer crecer sus negocios,
        entendiendo sus desafíos como si fueran los nuestros.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.about-us-hero {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &__bg {
    position: absolute;
    background-image: url("~/assets/images/svg/about-us-hero-bg.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &__content {
    max-width: 1060px;
    padding: 10rem 24px;

    p {
      color: $gray-1;
      font-size: 2rem;
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
      text-align: center;

      &:first-child {
        margin-bottom: 2rem;
      }

      b {
        color: $blue-primary;
        font-weight: 600;
      }
    }
  }
}

@media (max-width: 820px) {
  .about-us-hero {
    &__bg {
      background-image: url("~/assets/images/svg/about-us-hero-tablet-bg.svg");
    }

    &__content {
      max-width: 820px;
      padding: 10rem 40px;
    }
  }
}

@media (max-width: 600px) {
  .about-us-hero {
    &__content {
      max-width: 600px;
      padding: 10rem 20px 9rem;

      p {
        font-size: 1.25rem;

        &:first-child {
          margin-bottom: 1.25rem;
        }
      }
    }
  }
}

@media (max-width: 390px) {
  .about-us-hero__bg {
    background-image: url("~/assets/images/svg/about-us-hero-mobile-bg.svg");
  }
}
</style>
