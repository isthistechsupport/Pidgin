<template>
  <div class="contact">
    <div class="contact__bg"></div>
    <div class="contact__content">
      <ContactHero />
      <div class="contact__body">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.contact {
  position: relative;
  overflow: hidden;

  &__content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 1.5rem;
  }

  &__bg {
    background-image: url("~/assets/images/svg/contact-us-bg.svg");
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: auto;
    height: 100%;
    position: absolute;
    top: 190px;
    width: 100%;
    z-index: -1;
  }

  &__body {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 30px;
    padding: 100px 0;
  }
}

@media (max-width: 820px) {
  .contact {
    &__content {
      max-width: 820px;
      padding: 0;
    }

    &__bg {
      background-image: url("~/assets/images/svg/contact-us-bg-tablet.svg");
      top: 137px;
    }

    &__body {
      flex-direction: column;
      align-items: center;
      column-gap: unset;
      row-gap: 50px;
      padding: 100px 2.5rem;
    }
  }
}

@media (max-width: 410px) {
  .contact {
    &__bg {
      background-image: url("~/assets/images/svg/contact-us-bg-mobile.svg");
      top: 90px;
    }

    &__content {
      max-width: 410px;
      padding: 0;
    }

    &__body {
      padding: 160px 20px 100px;
    }
  }
}
</style>
