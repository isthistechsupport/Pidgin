<template>
  <div class="newsletter">
    <p>{{ $t("footer").newsletter_title }}:</p>
    <form
      ref="newsletter"
      @submit.prevent="submitForm"
      novalidate
      :class="{ invalid: errors.email || errors.terms }"
    >
      <div class="input__email">
        <input
          type="email"
          placeholder="little.egg@pidgin.com.co"
          name="emailField"
          id="emailField"
          v-model="form.email"
        />
        <button id="emailFieldSubmit" :disabled="formSubmitted">
          {{ $t("footer").newsletter_send_button_label }}
        </button>
      </div>
      <div class="input__confirm">
        <input
          type="checkbox"
          name="newsletterConfirm"
          id="newsletterConfirm"
          v-model="form.terms"
        />
        <label for="newsletterConfirm">
          {{ $t("footer").newsletter_consent }}
        </label>
      </div>
    </form>
    <span class="newsletterSentConfirmation">
      {{ $t("footer").newsletter_sent }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        terms: "",
      },
      errors: {
        email: false,
        terms: false,
      },
      formSubmitted: false,
      pidginContactEmail: "info@pidgin.com.co",
    };
  },

  methods: {
    sendEmail(customerEmail) {
      Email.send({
        SecureToken: "87fab385-70c5-48b2-bb90-eaca69a44bbc",
        To: this.pidginContactEmail,
        From: this.pidginContactEmail,
        FromName: "Pidgin",
        ReplyAddress: customerEmail,
        Cc: customerEmail,
        Subject: "Newsletter",
        Body:
          this.$i18n.locale == "es"
            ? `${customerEmail}<br>
          Gracias por unirte a nuestro Newsletter, a través de este medio te estaremos compartiendo nuestras novedades.`
            : `${customerEmail}<br>
            Thanks for joining our Newsletter, we will be sharing our news with you.`,
      }).then(() => this.triggerSentAnimation());
    },

    submitForm() {
      if (!this.form.email) {
        this.errors.email = true;
      } else {
        if (!this.validEmail(this.form.email)) {
          this.errors.email = true;
        } else {
          this.errors.email = false;
        }
      }

      if (!this.form.terms) {
        this.errors.terms = true;
      } else {
        this.errors.terms = false;
      }

      const formIsValid = !this.errors.email && !this.errors.terms;

      if (formIsValid) {
        // console.log("Correcto", this.form);
        this.sendEmail(this.form.email);
        this.formSubmitted = true;
        setTimeout(() => {
          this.$refs.newsletter.reset();
        }, 100);
      } else {
        // console.log("Revisar");
      }
    },

    triggerSentAnimation() {
      let newsletterSentLabel = document.querySelector(
        ".newsletterSentConfirmation"
      );
      newsletterSentLabel.classList.add("formSent");

      setTimeout(() => {
        newsletterSentLabel.classList.remove("formSent");
      }, 3000);
    },

    validEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.newsletter {
  position: relative;

  p {
    color: $white;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0 14px;
  }

  form {
    .input__email {
      display: flex;
      border-radius: 10px;
      border: 1px solid $blue-primary;
      width: fit-content;
      overflow: hidden;
    }

    #emailField {
      background: $white;
      border: none;
      color: $black;
      font-family: $montserrat;
      font-size: 12px;
      font-style: italic;
      outline: 0;
      padding: 12px 0 12px 14px;
      width: 268px;

      &::placeholder {
        color: $black;
        font-family: $montserrat;
      }
    }

    #emailFieldSubmit {
      background: $blue-primary;
      border-left: 0;
      border: none;
      color: $white;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 28px 12px 32px;

      &:hover {
        @include effect-gradient-1;
      }

      &:active {
        background: $blue-light-1;
      }
    }

    .input__confirm {
      display: flex;
      align-content: center;
      column-gap: 5px;
      margin: 15px 0 0 0;

      label {
        color: $white;
        font-size: 0.75rem;
        font-weight: 300;
        margin: 0;
      }
    }
  }

  .invalid {
    .input__email {
      border: 1px solid $gray-1;
    }

    #emailFieldSubmit {
      background: $gray-1;
    }
  }
}

.newsletterSentConfirmation {
  position: absolute;
  bottom: -24px;
  color: $white;
  font-weight: 300;
  font-size: 0.75rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  width: 100%;
}

.formSent {
  opacity: 1;
}

@media (max-width: $tablet) {
  .newsletter {
    form {
      .input__confirm {
        label {
          font-size: 0.625rem;
        }
      }
    }
  }
}

@media (max-width: $mobile) {
  .newsletter {
    p {
      margin: 0 0 20px;
    }

    form {
      .input__email {
        width: 100%;
        max-width: 400px;

        #emailField {
          width: calc(100% - 100px);
        }

        #emailFieldSubmit {
          width: 100px;
        }
      }

      .input__confirm {
        grid-column-gap: 10px;

        input {
          height: 1rem;
        }

        label {
          font-size: 9px;
          max-width: 180px;
        }
      }
    }
  }
}
</style>
