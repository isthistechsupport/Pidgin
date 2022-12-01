<template>
  <div class="contact__form">
    <span class="mandatory-fields">
      {{ $t("contact_page").mandatory_fields }}
    </span>
    <form ref="contactForm" @submit.prevent="submitForm" novalidate>
      <div class="form__field">
        <input
          type="text"
          :class="{ invalid: errors.name }"
          v-model="form.name"
          :placeholder="$t('contact_page').name_label"
        />
      </div>
      <div class="form__field">
        <input
          type="email"
          :class="{ invalid: errors.email }"
          v-model="form.email"
          :placeholder="$t('contact_page').email_label"
        />
      </div>
      <div class="form__field">
        <input
          type="tel"
          v-model="form.phone"
          :placeholder="$t('contact_page').phone_label"
        />
      </div>
      <div class="form__field">
        <input
          type="text"
          :class="{ invalid: errors.subject }"
          v-model="form.subject"
          :placeholder="$t('contact_page').subject_label"
        />
      </div>
      <div class="form__field">
        <textarea
          :class="{ invalid: errors.message }"
          v-model="form.message"
          :placeholder="$t('contact_page').message_label"
        >
        </textarea>
      </div>
      <div class="recaptcha"></div>
      <button class="submmit-form" :disabled="formSubmitted">
        {{ $t("contact_page").submit_button_label }}
      </button>
    </form>
    <span class="contactSentConfirmation">
      {{ $t("contact_page").contact_submitted }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
      errors: {
        name: false,
        email: false,
        subject: false,
        message: false,
      },
      formSubmitted: false,
      pidginContactEmail: "info@pidgin.com.co",
    };
  },

  methods: {
    sendEmail(
      customerName,
      customerEmail,
      customerPhone,
      emailSubject,
      emailBody
    ) {
      Email.send({
        SecureToken: "87fab385-70c5-48b2-bb90-eaca69a44bbc",
        To: this.pidginContactEmail,
        From: this.pidginContactEmail,
        FromName: "Pidgin",
        ReplyAddress: customerEmail,
        Cc: customerEmail,
        Subject: emailSubject,
        Body:
          this.$i18n.locale == "es"
            ? `Nombre: ${customerName}<br>
          Email: ${customerEmail}<br> 
          ${customerPhone ? "Número de teléfono: " : ""}${customerPhone}<br>
          <br>
          ${emailBody}`
            : `Name: ${customerName}<br>
          Email: ${customerEmail}<br> 
          ${customerPhone ? "Phone number: " : ""}${customerPhone}<br>
          <br>
          ${emailBody}`,
      }).then(() => this.triggerSentAnimation());
    },

    submitForm() {
      if (!this.form.name) {
        this.errors.name = true;
      } else {
        this.errors.name = false;
      }

      if (!this.form.email) {
        this.errors.email = true;
      } else {
        if (!this.validEmail(this.form.email)) {
          this.errors.email = true;
        } else {
          this.errors.email = false;
        }
      }

      if (!this.form.subject) {
        this.errors.subject = true;
      } else {
        this.errors.subject = false;
      }

      if (!this.form.message) {
        this.errors.message = true;
      } else {
        this.errors.message = false;
      }

      const formIsValid =
        !this.errors.name &&
        !this.errors.email &&
        !this.errors.subject &&
        !this.errors.message;

      if (formIsValid) {
        // console.log("Correcto", this.form);
        this.sendEmail(
          this.form.name,
          this.form.email,
          this.form.phone,
          this.form.subject,
          this.form.message
        );
        this.formSubmitted = true;
        setTimeout(() => {
          this.$refs.contactForm.reset();
        }, 100);
      } else {
        // console.log("Revisar");
      }
    },

    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    triggerSentAnimation() {
      let emaiLSentLabel = document.querySelector(".contactSentConfirmation");
      emaiLSentLabel.classList.add("formSent");

      setTimeout(() => {
        emaiLSentLabel.classList.remove("formSent");
      }, 3000);

      let contactFormBox = document.querySelector(".contact__form");
      contactFormBox.classList.add("expand");

      setTimeout(() => {
        contactFormBox.classList.remove("expand");
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.expand {
  padding-bottom: 48px !important;
}

.contact {
  &__form {
    @include effect-cards-shadow;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: $white;
    border-radius: 20px;
    padding: 30px;
    width: 50%;
    transition: padding 0.3s ease-out;

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
          border: 1px solid $blue-light-3;
          box-shadow: $blue-light-4 0px 0px 0px 4px;
        }
      }

      textarea {
        resize: none;
        height: 150px;
      }

      .invalid {
        border: 1px solid $pink-primary;
        box-shadow: $warning-red 0px 0px 0px 4px;
      }
    }
  }
}

.contactSentConfirmation {
  position: absolute;
  bottom: 16px;
  font-size: 0.75rem;
  font-weight: 300;
  left: 50%;
  opacity: 0;
  text-align: center;
  transform: translate(-50%, 100%);
  transition: all 0.3s ease-out;
  width: 100%;
}

.formSent {
  opacity: 1;
  transform: translateX(-50%);
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
