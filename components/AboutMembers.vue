<template>
  <div class="about-members">
    <div class="about-members__header">
      <h2>Las caras del <b>nido</b></h2>
      <p>
        Nuestros cofundadores tienen 15 años de experiencia combinada en el
        sector de desarrollo y big-data, y han seleccionado personalmente los
        talentos que conforman el equipo a través de un proceso tanto ágil como
        riguroso.
      </p>
    </div>
    <div class="about-members__member__list">
      <AboutMember />
      <AboutMember />
      <AboutMember />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.about-members {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 70px;
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 24px;

  &__header {
    text-align: center;

    h2 {
      color: $black;
      font-size: 3rem;
      font-weight: 600;
      line-height: 1.2;
      margin: 0 0 50px;

      b {
        color: $blue-primary;
      }
    }

    p {
      color: $gray-1;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
    }
  }

  &__member {
    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 70px;
    }
  }
}

@media (max-width: 820px) {
  .about-members {
    max-width: 820px;
    padding: 100px 40px;

    &__member {
      &:nth-child(even) {
        flex-direction: column;
      }
    }
  }
}

@media (max-width: 600px) {
  .about-members {
    max-width: 600px;
    padding: 40px 20px 80px;
    row-gap: 40px;

    &__header {
      h2 {
        font-size: 2rem;
        margin: 0 0 30px;
      }

      p {
        font-size: 1rem;
      }
    }

    &__member {
      &__list {
        row-gap: 40px;
      }
    }
  }
}
</style>
