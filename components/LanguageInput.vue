<template>
  <div class="lang-selector">
    <b-dropdown class="lang-selector__button" id="dropdown-right" right>
      <template #button-content>
        <img src="~/assets/images/svg/icon-lang.svg" alt="" />
        <span id="lang-selector-label">{{ $i18n.locale }}</span>
        <img src="~/assets/images/svg/icon-chevron-down.svg" alt="" />
      </template>
      <b-dropdown-item-button
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :value="lang.code"
        :class="$i18n.locale == lang.code ? 'active' : 'inactive'"
        @click="switchLocale(lang)"
        >{{ lang.name }}
        <img
          v-if="$i18n.locale == lang.code"
          src="~/assets/images/svg/icon-check.svg"
          alt=""
        />
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>

<script>
export default {
  methods: {
    switchLocale(lang) {
      this.$i18n.locale = lang.code;
      this.$cookies.set("user_language", lang.code);
      this.$root.$emit("force-re-render");
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.lang-selector {
  &__button {
    button {
      background-color: $white;
      border: none;
      color: $blue-primary;
      font-family: $montserrat;
      font-size: 18px;
      font-weight: 300;
      padding: 0;
    }

    &:hover {
      background-color: $white;
      border: none;
    }
  }
}

#lang-selector-label {
  text-transform: uppercase;
}

#dropdown-right__BV_toggle_ {
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  background-color: $white;
  border: none;
  color: $blue-primary;

  &::after {
    display: none;
  }

  img:nth-child(2) {
    margin-left: 5px;
  }

  &:focus,
  &:focus-visible {
    border: none;
    box-shadow: none;
    outline: 0;
  }
}

#dropdown-right > ul {
  top: 16px !important;

  li {
    width: 100%;

    button {
      color: $gray-1;
    }

    &.active {
      button {
        color: $blue-primary;
      }
    }

    &:first-child {
      margin-bottom: 10px;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 300;
    padding: 0;

    &:hover {
      background-color: $white;
      color: $blue-primary;
    }
  }
}

.dropdown-menu {
  background-color: $white !important;
  border-radius: 10px !important;
  border: none !important;
  box-shadow: 0 0 10px 0 rgba($color: $black, $alpha: 0.15);
  padding: 18px !important;
  width: 160px !important;
}

@media (max-width: $tablet) {
  #dropdown-right > ul {
    transform: translate(-30px, 27px) !important;
  }
}
</style>
