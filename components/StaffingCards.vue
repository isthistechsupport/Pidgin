<template>
  <div class="staffing__cards">
    <div
      class="staffing__card"
      v-for="profile in $t('services_page').profiles"
      :key="profile.id"
    >
      <div class="card__content">
        <h4 class="card__title">
          {{ profile.title }}
        </h4>
        <p class="card__text">
          {{ profile.description }}
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

.staffing {
  &__cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px 30px;
    padding: 100px 0 0;
  }

  &__card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    width: calc(32% - 10px);
    height: 250px;
    overflow: hidden;
    padding: 30px;
    transition: box-shadow 0.2s ease;

    &:nth-child(1) {
      background-image: url("~assets/images/jpg/fullstack.jpg");
    }

    &:nth-child(2) {
      background-image: url("~assets/images/jpg/backend.jpg");
    }

    &:nth-child(3) {
      background-image: url("~assets/images/jpg/frontend.jpg");
    }

    &:nth-child(4) {
      background-image: url("~assets/images/jpg/software-developer.jpg");
    }

    &:nth-child(5) {
      background-image: url("~assets/images/jpg/devops.jpg");
    }

    &:nth-child(6) {
      background-image: url("~assets/images/jpg/data-scientist.jpg");
    }

    &:nth-child(7) {
      background-image: url("~assets/images/jpg/security-engineer.jpg");
    }

    &:nth-child(8) {
      background-image: url("~assets/images/jpg/testing-engineer.jpg");
    }

    &:nth-child(9) {
      background-image: url("~assets/images/jpg/machine-learning.jpg");
    }

    &::after {
      position: absolute;
      content: "";
      background: linear-gradient(
        0deg,
        rgba(24, 26, 45, 0.8),
        rgba(24, 26, 45, 0.8)
      );
      height: 100%;
      width: 100%;
      opacity: 0.3;
      z-index: 0;
      transition: opacity 0.3s ease;
    }

    &:hover {
      @include effect-cards-shadow;
      cursor: pointer;
      transition: box-shadow 0.2s ease;

      .card__title {
        top: -100%;

        transition: top 0.6s ease;
      }

      .card__text {
        top: 50%;

        transition: top 0.6s ease;
      }

      &::after {
        opacity: 1;
        transition: opacity 0.3s ease;
      }
    }
  }
}

.card {
  &__content {
    z-index: 4;
  }

  &__title {
    @include subtitle-24;
    position: absolute;
    color: $white;
    max-width: 218px;
    text-align: center;
    left: 50%;
    top: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    transition: top 0.6s ease;
  }

  &__text {
    @include body-16--white;
    position: absolute;
    text-align: center;
    left: 50%;
    top: -150%;
    transform: translate(-50%, -50%);
    transition: top 0.6s ease;
    width: 100%;
    padding: 30px;
  }
}

@media (max-width: $tablet) {
  .staffing {
    &__cards {
      justify-content: center;
      gap: 30px 20px;
      padding: 70px 0 0;
    }

    &__card {
      justify-content: center;
      align-items: center;
      height: unset;
      width: calc(50% - 10px);

      &::after {
        opacity: 1;
        transition: unset;
      }

      &:hover {
        @include effect-cards-shadow;
        cursor: unset;

        .card__title {
          top: unset;
          transition: none;
        }

        .card__text {
          top: unset;
          transition: none;
        }

        &::after {
          opacity: 1;
          transition: none;
        }
      }
    }
  }

  .card {
    &__content {
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
    }

    &__title {
      position: relative;
      max-width: 218px;
      text-align: left;
      left: unset;
      top: unset;
      transform: none;
      transition: none;
    }

    &__text {
      position: relative;
      text-align: left;
      left: unset;
      top: unset;
      transform: none;
      transition: none;
      padding: 0;
    }
  }
}

@media (max-width: 600px) {
  .staffing {
    &__cards {
      gap: 20px 0;
    }

    &__card {
      padding: 50px 30px;
      width: 100%;
    }
  }

  .card {
    &__title {
      max-width: unset;
    }
  }
}
</style>
