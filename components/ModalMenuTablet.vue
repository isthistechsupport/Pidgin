<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="menu-tablet">
      <div class="menu-tablet__header">
        <div class="navbar__logo">
          <NuxtLink :to="localePath('/')">
            <img
              src="~/assets/images/svg/logo-navbar.svg"
              :alt="$t('navbar_logo_alt')"
            />
          </NuxtLink>
        </div>
        <div class="menu-tablet__actions">
          <LanguageInput />
          <div class="close-btn" @click="$emit('close-modal')">
            <img src="~/assets/images/svg/icon-close-menu.svg" alt="close menu button" />
          </div>
        </div>
      </div>
      <div class="menu-tablet__body">
        <div class="menu-tablet__links">
          <NuxtLink
            v-for="navitem in $t('navbar_items')"
            :key="navitem.id"
            class="navbar__item"
            :to="localePath(navitem.link)"
          >
            {{ navitem.label }}
          </NuxtLink>
          <NuxtLink class="navbar__item" :to="localePath('/contact')">
            {{ $t("contact_button").label }}
          </NuxtLink>
        </div>
        <div class="bg-gradient"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.menu-tablet {
  position: relative;
  background-color: white;
  height: 100vh;
  width: 100%;
  z-index: 5;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
  }

  &__actions {
    display: flex;
    align-items: center;
    column-gap: 16px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bg-gradient {
      @include effect-gradient-2;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 470px;
      z-index: -1;
    }

    .lang-selector {
      position: absolute;
      bottom: 108px;
      z-index: 10;
      left: 50%;
      transform: translate(-50%, 0);

      &__button,
      #dropdown-right__BV_toggle_ {
        background-color: transparent;
      }

      #dropdown-right > ul {
        transform: translate(-25%, -130px) !important;
      }
    }
  }

  &__links {
    display: flex;
    flex-direction: column;

    a {
      background-color: $white;
      border-bottom: 1px solid $white-secondary;
      border-top: 1px solid $white-secondary;
      color: $black;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;
      padding: 20px 40px;
      text-decoration: none;

      &:active,
      &:hover {
        background-color: $white-secondary;
        color: $black;
        text-decoration: none;
      }
    }
  }
}

.modal {
  &-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #000000da;
    display: flex;
    justify-content: center;
    z-index: 5;
  }
}

.close-btn {
  cursor: pointer;
}
</style>
