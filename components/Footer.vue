<template>
  <footer class="footer">
    <div class="footer__layout">
      <div class="footer__layout__main">
        <div class="footer__logo">
          <NuxtLink to="/">
            <img
              src="~/assets/images/svg/logo-footer.svg"
              :alt="$t('footer').footer_logo_alt"
            />
          </NuxtLink>
        </div>
        <hr />
        <div class="footer__content">
          <div class="footer__content--left">
            <p>
              {{ $t("footer").title_newsletter }}
              <strong>{{ $t("footer").title_newsletter_underlined }}</strong
              >:
            </p>
            <NewsletterForm />
          </div>
          <div class="footer__content--right">
            <div class="social__links">
              <h3>{{ $t("footer").social_subtitle }}:</h3>
              <a
                class="social__link"
                v-for="item in $t('footer').social_media"
                :key="item.id"
                :href="item.link"
                target="blank"
              >
                {{ item.label }}
              </a>
            </div>
          </div>
        </div>
        <hr id="divider-mobile" />
      </div>
      <div class="legal__links">
        <NuxtLink
          v-for="item in $t('footer').legal_docs"
          :key="item.id"
          class="legal__link"
          :to="item.link"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
      <hr id="divider-mobile" />
      <div class="footer__layout__bottom">
        <div class="footer__caption">
          <div class="footer__credits">
            {{ $t("footer").credits_1 }}<a href="#">Kevin Coley</a
            >{{ $t("footer").credits_2 }}<a href="#">Abel Areiza</a>
          </div>
          <span>
            <b>{{ $t("footer").bottom_info }}</b>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

hr {
  background: white;
  margin: 0;
  width: 100%;
}

#divider-mobile {
  display: none;
}

.footer {
  background: $black;

  &__layout {
    display: flex;
    flex-direction: column;
    max-width: $laptop;
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;

    &__main {
      padding: 50px 0 0 0;
      width: 100%;
    }

    &__bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      width: 100%;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    padding: 50px 0;

    &--left {
      p {
        color: $white;
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 2rem;
        max-width: 364px;

        strong {
          font-weight: bold;
          text-decoration: underline;
        }
      }
    }
  }

  &__logo {
    padding: 0 0 50px;
  }

  &__caption {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      color: $white;
      font-size: 0.75rem;

      b {
        font-weight: bold;
      }
    }
  }

  &__credits {
    color: $white;
    font-size: 0.75rem;
    font-weight: 300;

    a {
      color: $white;
      text-decoration: underline;
    }
  }
}

.social {
  &__links {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 15px;
    text-decoration: none;

    h3 {
      color: $white;
      font-size: 18px;
      font-weight: 600;
      margin: 0;
    }
  }

  &__link {
    @include transition-ease-02;
    border-bottom: 1px solid transparent;
    color: $white;
    font-size: 1rem;
    font-weight: 400;
    text-align: right;
    text-decoration: none;
    width: fit-content;

    &:hover {
      border-bottom: 1px solid $white;
    }
  }
}

.legal {
  &__links {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0.75rem 0;
  }

  &__link {
    @include transition-ease-02;
    color: $white;
    font-size: 0.75rem;
    font-weight: 300;
    text-decoration: none;

    &:hover {
      color: $blue-light-1;
    }
  }
}

@media (max-width: $tablet) {
  .footer {
    &__layout {
      padding: 0 2.5rem;
    }

    &__credits {
      a {
        text-decoration: none;
      }
    }
  }

  .legal {
    &__link {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      text-align: center;
      width: fit-content;
      max-width: 170px;
    }
  }
}

@media (max-width: 600px) {
  #divider-mobile {
    display: block;
  }

  .footer {
    &__layout {
      max-width: $mobile;
      padding: 0 20px;

      &__main {
        padding: 30px 0 0 0;

        hr {
          background: white;
          margin: 0;
          width: 100%;
        }
      }

      &__bottom {
        align-items: center;
        justify-content: center;
        padding: 50px 0;
      }
    }

    &__caption {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      row-gap: 50px;
    }

    &__credits {
      max-width: 256px;
    }

    &__content {
      flex-direction: column;
      justify-content: center;

      &--left {
        p {
          font-size: 1rem;
          margin: 0 0 20px;
          max-width: 400px;
        }
      }

      &--right {
        display: none;
      }
    }
  }

  .legal {
    &__links {
      flex-direction: column;
      justify-content: center;
      row-gap: 10px;
      padding: 50px 0;
      max-width: 400px;
    }

    &__link {
      font-size: 0.75rem;
      text-align: left;
      width: fit-content;
      max-width: 100%;
    }
  }
}
</style>
