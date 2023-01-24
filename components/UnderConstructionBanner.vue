<template>
  <div class="hero__container">
    <div class="pidgin-image__container">
      <img
        src="~/assets/images/png/under-construction.png"
        alt="Paloma Pidgin"
        class="pidgin-image__img"
      />
    </div>
    <div class="text__container">
      <div class="caption__es">
        <h2>Nuestro nido está en construcción</h2>
        <p>¿Quieres decirnos algo? Contáctanos:</p>
      </div>
      <div class="caption__en">
        <h4>Our nest is under construction</h4>
        <p>Wanna tell us something? Contact us:</p>
      </div>
    </div>
    <ButtonPrimary
      class="contact-section__button"
      v-bind:buttonLabel="$t('contact_section').contact_section_button.label"
      v-bind:buttonLink="$t('contact_section').contact_section_button.link"
    />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.hero__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 6rem auto 0;
  min-height: 90vh;
  padding: 0 48px;
}

.caption__es {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 15px;
  text-align: center;

  h2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  p {
    font-size: 24px;
    font-weight: 300;
  }
}

.caption__en {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: italic;
  margin: 0 0 15px;
  text-align: center;

  h4 {
    color: #7e7e7e;
    font-size: 18px;
    font-weight: 600;
  }

  p {
    color: #7e7e7e;
    font-size: 18px;
    font-weight: 300;
  }
}

@media (max-width: 480px) {
  .hero__container {
    margin-top: 0;
  }

  .pidgin-image__img {
    max-width: 296px;
  }

  .text__container {
    max-width: 240px;
  }

  .caption__es {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }
  }

  .caption__en {
    h4 {
      font-size: 13px;
    }

    p {
      font-size: 13px;
      margin: 0 auto;
      max-width: 200px;
    }
  }
}
</style>
