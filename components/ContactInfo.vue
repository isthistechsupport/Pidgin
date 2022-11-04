<template>
  <div class="contact__info">
    <div class="contact__info__item">
      <h2 class="contact__info__title">{{ $t("contact_page").info_title }}</h2>
      <p class="contact__info__text">
        {{ $t("contact_page").info_text_1 }}
        <i>{{ $t("contact_page").info_text_2 }}</i>
        {{ $t("contact_page").info_text_3 }}
      </p>
    </div>
    <div class="contact__info__item">
      <h3>{{ $t("contact_page").info_email_title }}</h3>
      <a :href="$t('contact_page').info_email_link" target="blank">{{
        $t("contact_page").info_email_label
      }}</a>
    </div>
    <div class="contact__info__item">
      <h3>{{ $t("contact_page").info_wa_title }}</h3>
      <a :href="$t('contact_page').info_wa_link" target="blank">
        {{ $t("contact_page").info_wa_label }}
      </a>
    </div>
    <div class="contact__info__item">
      <p>
        {{ $t("contact_page").info_text_4 }}
        <a :href="$t('contact_page').support_mail_link" target="blank">
          {{ $t("contact_page").support_mail_label }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.contact {
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 30px;
    width: 50%;

    &__title {
      color: $black;
      font-size: 2rem;
      font-weight: 600;
      line-height: 1;
      margin: 0;
    }

    &__text {
      color: $gray-1;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;
      margin: 0;
      max-width: 463px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      max-width: 463px;

      h3 {
        color: $blue-primary;
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1;
        margin: 0;
      }

      a {
        color: $blue-primary;
        text-decoration: underline;

        &:hover {
          color: $blue-primary;
        }
      }

      p {
        color: $gray-1;
      }

      a,
      p {
        font-size: 1.25rem;
        font-weight: 300;
        line-height: 1.2;
        margin: 0;
      }
    }
  }
}

@media (max-width: 820px) {
  .contact {
    &__info {
      margin: 0 auto;
      width: unset;

      &__text {
        max-width: 561px;
      }

      &__item {
        max-width: 561px;
      }
    }
  }
}

@media (max-width: 600px) {
  .contact {
    &__info {
      &__text {
        font-size: 1rem;
        max-width: unset;
      }

      &__item {
        max-width: unset;

        a,
        p {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
