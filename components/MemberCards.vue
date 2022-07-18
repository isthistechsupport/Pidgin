<template>
  <div class="members__cards">
    <div
      class="member__card"
      v-for="card in $t('members').members_cards"
      :key="card.id"
    >
      <div class="member__card__header">
        <div class="member__card__avatar">
          <img
            :src="require(`~/assets/images${card.member_card_img}`)"
            :alt="$t(card.member_card_alt)"
          />
        </div>
        <div class="member__card__title">
          <h3 class="member__card__name">{{ card.member_card_name }}</h3>
          <h4 class="member__card__job-title">
            {{ card.member_card_job_title }}
          </h4>
        </div>
      </div>
      <div class="member__card__description">
        <p>
          {{ card.member_card_description_1 }}
        </p>
        <p>
          {{ card.member_card_description_2 }}
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

.members {
  &__cards {
    display: flex;
    column-gap: 30px;
    padding: 0 1.5rem;
  }
}

.member__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  background: $white;
  border: 1px solid $blue-light-6;
  border-radius: 16px;
  max-width: 364px;
  padding: 30px;
  width: 100%;
  @include transition-ease-02;

  &:hover {
    @include effect-cards-shadow;
  }

  &__avatar {
    width: 100px;
    height: 100px;
    margin: 0 0 16px 0;

    img {
      border-radius: 50px;
      width: 100%;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__name {
    color: $black;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
  }

  &__job-title {
    color: $blue-primary;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
  }

  &__description {
    p {
      color: $gray-1;
      font-weight: 300;
      font-size: 0.875rem;
      line-height: 1.2;
      text-align: justify;
      margin: 0;

      &:nth-child(1) {
        margin: 0 0 1rem;
      }
    }
  }
}

@media (max-width: $tablet) {
  .members {
    &__cards {
      flex-direction: column;
      column-gap: unset;
      row-gap: 20px;
      padding: 0 1.5rem;
      width: 75%;
    }
  }

  .member__card {
    align-items: flex-start;
    row-gap: 20px;
    border-radius: 16px;
    max-width: 560px;
    padding: 30px;
    min-height: 262px;

    &__avatar {
      width: 80px;
      height: 80px;
      margin: 0 20px 0 0;

      img {
        border-radius: 40px;
        width: 100%;
      }
    }

    &__header {
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
    }

    &__name {
      text-align: left;
    }

    &__job-title {
      text-align: left;
    }
  }
}

@media (max-width: $mobile) {
  .members {
    &__cards {
      row-gap: 30px;
      margin: 20px 0;
      padding: 0;
      width: 100%;
    }
  }

  .member__card {
    max-width: 400px;
    min-height: 330px;
  }
}
</style>
