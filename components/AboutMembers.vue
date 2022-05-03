<template>
  <div class="about-members">
    <div class="about-members__header">
      <h2>
        {{ $t("about").about_members.title
        }}<b>{{ $t("about").about_members.title_highlighted }}</b>
      </h2>
      <p>
        {{ $t("about").about_members.text }}
      </p>
    </div>
    <div class="about-members__member__list">
      <AboutMemberCard
        v-for="memberCard in $t('about').about_members.members"
        :key="memberCard.id"
        :imgPath="memberCard.member_card_img"
        :name="memberCard.name"
        :jobTitle="memberCard.job_title"
        :text1="memberCard.paragraph_1"
        :text2="memberCard.paragraph_2"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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

  &__member__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 70px;

    .member-card {
      &:nth-child(even) {
        flex-direction: row-reverse;
      }

      &:nth-child(1) {
        .member-card {
          &__header h3 {
            color: $pink-primary;
          }
        }
      }

      &:nth-child(2) {
        .member-card {
          &__header h3 {
            color: $green-primary;
          }
        }
      }

      &:nth-child(3) {
        .member-card {
          &__header h3 {
            color: $blue-light-2;
          }
        }
      }
    }
  }
}

@media (max-width: 820px) {
  .about-members {
    max-width: 820px;
    padding: 100px 40px;

    .member-card {
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

    .member-card {
      &__list {
        row-gap: 40px;
      }
    }
  }
}
</style>
