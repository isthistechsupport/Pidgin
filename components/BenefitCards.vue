<template>
  <div class="benefits__cards">
    <div
      class="benefits__card"
      v-for="card in $t('benefits').benefits_cards"
      :key="card.id"
    >
      <div class="benefits__card__body">
        <img
          :src="require(`~/assets/images${card.benefit_card_img}`)"
          alt=""
          class="card__img"
        />
        <div class="card__text">
          <h3 class="card__title">{{ card.benefit_card_title }}</h3>
          <p>
            {{ card.benefit_card_text_1
            }}<span>{{ card.benefit_card_text_highlighted }}</span
            >{{ card.benefit_card_text_2 }}
          </p>
        </div>
      </div>
      <a :href="`${card.benefit_card_link_url}`" class="card__link"
        ><span>{{ card.benefit_card_link_label }}</span>
        <img src="~/assets/images/svg/icon-arrow-right.svg" alt=""
      /></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.benefits__cards {
  display: flex;
  column-gap: 30px;
  padding: 0 1.5rem;
  margin-bottom: -169px;
}

.benefits__card {
  @include effect-cards-shadow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
  background: $white;
  border-radius: 20px;
  max-width: 266px;
  padding: 30px;
  width: 100%;
  z-index: 2;

  &__body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  .card {
    &__img {
      width: fit-content;
    }

    &__title {
      color: $blue-primary;
      font-weight: 600;
      font-size: 1.25rem;
      margin-bottom: 10px;
    }

    &__text {
      p {
        color: $gray-1;
        font-weight: 300;
        font-size: 1rem;
        line-height: 1.2;
        margin: 0;

        span {
          font-weight: 600;
        }
      }
    }

    &__link {
      display: flex;
      align-items: center;
      color: $blue-primary;
      font-size: 1rem;
      line-height: 1.2;
      text-decoration: none;
      width: fit-content;

      span {
        @include transition-ease-02;
        border-bottom: 1px solid transparent;
      }

      img {
        margin-left: 0.25rem;
        transition: transform 200ms ease;
      }

      &:hover {
        img {
          transform: translateX(5px);
        }
      }
    }
  }
}

@media (max-width: $tablet) {
  .benefits__cards {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    grid-gap: 20px;
    align-items: center;
    padding: 0 2.5rem;
    margin-bottom: -148px;
  }

  .benefits__card {
    @include effect-cards-shadow;
    row-gap: 20px;
    border-radius: 20px;
    max-width: 367px;
    padding: 30px;
    min-height: 296px;

    .card {
      &__text {
        p {
          font-size: 15px;
        }
      }
    }
  }
}

@media (max-width: $mobile) {
  .benefits__cards {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    padding: 0;
    margin-bottom: -138px;
    margin-top: 20px;
  }

  .benefits__card {
    @include effect-cards-shadow;
    width: min(100%, 400px);
    max-width: 400px;
    padding: 20px;
    min-height: 276px;
  }
}
</style>
