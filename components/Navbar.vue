<template>
  <header class="navbar" id="navbar">
    <div class="navbar__content">
      <div class="navbar__logo">
        <NuxtLink :to="localePath('/')">
          <img
            src="~/assets/images/svg/logo-navbar.svg"
            :alt="$t('navbar_logo_alt')"
          />
        </NuxtLink>
      </div>
      <div class="navbar__logo--mobile">
        <NuxtLink :to="localePath('/')">
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
          :to="localePath(navitem.link)"
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
        <div class="mobile-menu modal-btn">
          <div @click="showModalMobile = true">
            <img src="~/assets/images/svg/icon-burger-menu.svg" alt="" />
          </div>
        </div>
        <div class="tablet-menu modal-btn">
          <div @click="showModalTablet = true">
            <img src="~/assets/images/svg/icon-burger-menu.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <ModalMenuMobile
      v-show="showModalMobile"
      @close-modal="showModalMobile = false"
    />
    <ModalMenuTablet
      v-show="showModalTablet"
      @close-modal="showModalTablet = false"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      showModalMobile: false,
      showModalTablet: false,
    };
  },
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-91px";
  }
  prevScrollpos = currentScrollPos;
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

#navbar {
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
  background: $white;
  z-index: 10;
}

.navbar {
  display: flex;
  border-bottom: 1px solid $white-secondary;
  padding: 0 !important;
  // position: relative;

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
        text-decoration: none;
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

    .mobile-menu,
    .tablet-menu {
      display: none;
    }
  }
}

@media (max-width: $tablet) {
  .navbar {
    &__content {
      max-width: $laptop;
      padding: 20px 40px;
    }

    &__links {
      display: none;
    }

    &__actions {
      column-gap: 16px;

      .secondary-button {
        display: none !important;
      }

      .tablet-menu {
        display: block;
      }
    }
  }

  .modal-btn {
    cursor: pointer;
  }
}

@media (max-width: 600px) {
  .navbar {
    &__logo {
      display: none;

      &--mobile {
        display: block;
      }
    }

    &__content {
      max-width: 600px;
      padding: 20px;
    }

    &__actions {
      .lang-selector {
        display: none !important;
      }

      .tablet-menu {
        display: none;
      }

      .mobile-menu {
        display: block;
      }
    }
  }
}
</style>
