<template>
  <div class="lang-selector">
    <b-dropdown class="lang-selector__button" id="dropdown-right-mobile" right>
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
      this.$root.$emit("force-re-render");
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

#dropdown-right-mobile__BV_toggle_ {
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

#dropdown-right-mobile > ul {
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
</style>
