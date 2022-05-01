<template>
  <div class="about-us__elements">
    <div class="about-us__element">
      <div class="about-us__element-img">
        <img src="~/assets/images/svg/value-ingenuity.svg" alt="" />
      </div>
      <div class="about-us__element__text">
        <h3>Ingenio</h3>
        <p>
          Innovamos constantemente creatividad, encontrando siempre la solución
          más eficiente.
        </p>
      </div>
    </div>
    <div class="about-us__element">
      <div class="about-us__element-img">
        <img src="~/assets/images/svg/value-ingenuity.svg" alt="" />
      </div>
      <div class="about-us__element__text">
        <h3>Ingenio</h3>
        <p>
          Innovamos constantemente creatividad, encontrando siempre la solución
          más eficiente.
        </p>
      </div>
    </div>
    <div class="about-us__element">
      <div class="about-us__element-img">
        <img src="~/assets/images/svg/value-ingenuity.svg" alt="" />
      </div>
      <div class="about-us__element__text">
        <h3>Ingenio</h3>
        <p>
          Innovamos constantemente creatividad, encontrando siempre la solución
          más eficiente.
        </p>
      </div>
    </div>
    <div class="about-us__element">
      <div class="about-us__element-img">
        <img src="~/assets/images/svg/value-ingenuity.svg" alt="" />
      </div>
      <div class="about-us__element__text">
        <h3>Ingenio</h3>
        <p>
          Innovamos constantemente creatividad, encontrando siempre la solución
          más eficiente.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.about-us {
  &__elements {
    display: flex;
    align-items: center;
    column-gap: 30px;
    margin-top: 50px;
    padding: 0;
  }

  &__element {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    max-width: 265px;
    padding: 5px 30px 0;
    min-height: 140px;
    width: 100%;

    &__text {
      text-align: center;

      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: $blue-primary;
        margin: 0 0 10px;
      }

      p {
        color: $gray-1;
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 1.2;
        margin: 0;
      }
    }
  }
}

@media (max-width: 820px) {
  .about-us {
    &__elements {
      display: flex;
      align-items: center;
      column-gap: 20px;
    }

    &__element {
      max-width: 175px;
      padding: 5px 0 0;
    }
  }
}

@media (max-width: 700px) {
  .about-us {
    &__elements {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 16px;
      row-gap: 40px;
      margin-top: 0;
    }

    &__element {
      max-width: 225px;
    }
  }
}
</style>
