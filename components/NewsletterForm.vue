<template>
  <div class="newsletter">
    <p>{{ $t("footer").newsletter_title }}:</p>
    <form action="/">
      <div class="input__email">
        <input
          type="email"
          placeholder="little.egg@pidgin.com.co"
          name="emailField"
          id="emailField"
        />
        <input
          id="emailFieldSubmit"
          type="submit"
          :value="$t('footer').newsletter_send_button_label.label"
        />
      </div>
      <div class="input__confirm">
        <input
          type="checkbox"
          name="newsletterConfirm"
          id="newsletterConfirm"
        />
        <label for="newsletterConfirm"
          >{{ $t("footer").newsletter_consent }}
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.newsletter {
  p {
    color: $white;
    font-size: 1rem;
    font-weight: 400;
    margin: 0 0 14px;
  }

  form {
    .input__email {
      display: flex;
    }

    #emailField {
      background: $white;
      border-radius: 10px 0 0 10px;
      border: 1px solid $blue-primary;
      border-right: 0;
      color: $black;
      font-family: $montserrat;
      font-size: 12px;
      font-style: italic;
      padding: 12px 0 12px 14px;
      width: 268px;

      &::placeholder {
        color: $black;
        font-family: $montserrat;
      }
    }

    #emailFieldSubmit {
      background: $blue-primary;
      border-radius: 0 10px 10px 0;
      border-left: 0;
      border: none;
      color: $white;
      font-size: 12px;
      font-weight: bold;
      padding: 12px 28px 12px 32px;
    }

    .input__confirm {
      display: flex;
      align-content: center;
      column-gap: 5px;
      margin: 17px 0 0 0;

      label {
        color: $white;
        font-size: 0.75rem;
        font-weight: 300;
        margin: 0;
      }
    }
  }
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
