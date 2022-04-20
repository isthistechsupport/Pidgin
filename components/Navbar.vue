<template>
  <header class="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">
        <NuxtLink to="/">
          <img
            src="~/assets/images/svg/logo-navbar.svg"
            :alt="$t('navbar_logo_alt')"
          />
        </NuxtLink>
      </div>
      <div class="navbar__logo--mobile">
        <NuxtLink to="/">
          <img
            src="~/assets/images/svg/logo-navbar-mobile.svg"
            :alt="$t('navbar_logo_alt')"
          />
        </NuxtLink>
      </div>
      <div class="navbar__links">
        <NuxtLink
          v-for="navitem in $t('navbar_items')"
          :key="navitem.id"
          class="navbar__item"
          :to="navitem.link"
        >
          {{ navitem.label }}
        </NuxtLink>
      </div>
      <div class="navbar__actions">
        <!-- <ButtonSecondary
          v-bind:buttonLabel="$t('contact_button').label"
          v-bind:buttonLink="$t('contact_button').link"
        /> -->
        <TempButtonSecondary
          v-bind:buttonLabel="$t('contact_button').label"
          buttonLink="mailto:contacto@pidgin.com.co?subject=Necesito hablar con ustedes - Contacto"
        />
        <LanguageInput />
        <div class="mobile-menu">
          <img src="~/assets/images/svg/icon-burger.svg" alt="" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.navbar {
  display: flex;
  border-bottom: 1px solid $white-secondary;

  &__logo {
    &--mobile {
      display: none;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $laptop;
    margin: 0 auto;
    padding: 20px 24px;
    width: 100%;
  }

  &__links {
    display: flex;
    align-content: center;
    column-gap: 30px;

    a {
      @include transition-ease-02;
      color: $black;
      font-size: 18px;
      text-decoration: none;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid $blue-primary;
        color: $blue-primary;
      }

      &:focus-visible {
        outline: 0;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    column-gap: 20px;

    .mobile-menu {
      display: none;
    }
  }
}

@media (max-width: $tablet) {
  .navbar {
    &__links {
      display: none;
    }

    &__actions {
      .mobile-menu {
        display: block;
      }
    }
  }
}

@media (max-width: 600px) {
  .navbar {
    padding: 0;

    &__logo {
      display: none;

      &--mobile {
        display: block;
      }
    }

    &__content {
      max-width: $mobile;
      padding: 20px;
    }

    &__actions {
      a,
      .lang-selector {
        display: none;
      }
    }
  }
}
</style>
