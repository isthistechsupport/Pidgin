<template>
  <Button class="primary-button" @click="setCookie">
    {{ buttonLabel }}
  </Button>
</template>

<script>
export default {
  props: ["buttonLabel"],

  methods: {
    setCookie() {
      this.$cookies.set("cookiesAccepted", "true");
      this.$root.$emit("force-modal-re-render");
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.primary-button {
  @include transition-ease-02;
  display: inline-block;
  background: linear-gradient($blue-primary, $blue-primary);
  border-radius: 10px;
  border: 1px solid $blue-primary;
  color: $white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.125;
  padding: 10px 20px;
  text-decoration: none;
  white-space: nowrap;
  width: fit-content;

  &:hover {
    @include effect-gradient-1;
    @include effect-cards-shadow;
  }

  &:active {
    background: linear-gradient($blue-dark-4, $blue-dark-4);
    box-shadow: none;
  }

  &:focus-visible {
    background: linear-gradient($blue-primary, $blue-primary);
    outline: 0;
    box-shadow: $blue-light-4 0px 0px 0px 4px;
  }
}
</style>
