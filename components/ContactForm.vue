<template>
  <div class="contact__form">
    <span class="mandatory-fields">
      {{ $t("contact_page").mandatory_fields }}
    </span>
    <form action="POST">
      <div class="form__field">
        <input
          type="text"
          name="name"
          :placeholder="$t('contact_page').name_label"
        />
      </div>
      <div class="form__field">
        <input
          type="email"
          name="email"
          :placeholder="$t('contact_page').email_label"
        />
      </div>
      <div class="form__field">
        <input
          type="tel"
          name="phone"
          :placeholder="$t('contact_page').phone_label"
        />
      </div>
      <div class="form__field">
        <input
          type="text"
          name="subject"
          :placeholder="$t('contact_page').subject_label"
        />
      </div>
      <div class="form__field">
        <textarea
          name="message"
          :placeholder="$t('contact_page').message_label"
        />
      </div>
      <div class="recaptcha"></div>
      <ButtonPrimary
        :buttonLabel="$t('contact_page').submit_button_label"
        buttonLink="#"
      />
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.contact {
  &__form {
    @include effect-cards-shadow;
    display: flex;
    flex-direction: column;
    background-color: $white;
    border-radius: 20px;
    padding: 30px;
    width: 50%;

    .mandatory-fields {
      color: $black;
      font-size: 0.75rem;
      font-style: italic;
      font-weight: 300;
      margin: 0 0 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 30px;
      width: 100%;
    }
  }

  .form {
    &__field {
      width: 100%;

      input,
      textarea {
        background-color: $white;
        border-radius: 10px;
        border: 1px solid $blue-light-3;
        color: $blue-dark-2;
        font-size: 1rem;
        font-style: italic;
        font-weight: 300;
        line-height: 1.2;
        padding: 10px;
        width: 100%;

        &:focus-visible {
          outline: 0;
          box-shadow: $blue-light-4 0px 0px 0px 4px;
        }
      }

      textarea {
        resize: none;
        height: 150px;
      }
    }
  }
}

@media (max-width: 820px) {
  .contact {
    &__form {
      width: 100%;
      max-width: 561px;
    }
  }
}

@media (max-width: 600px) {
  .contact {
    &__form {
      padding: 30px 20px;
      max-width: unset;
      .mandatory-fields {
        text-align: center;
      }
    }
  }
}
</style>
