<template>
  <a class="secondary-button" :href="buttonLink">
    {{ buttonLabel }}
  </a>
</template>

<script>
export default {
  props: ["buttonLabel", "buttonLink"],
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.secondary-button {
  @include transition-ease-02;
  display: inline-block;
  background-color: $white;
  border-radius: 10px;
  border: 1px solid $blue-primary;
  color: $blue-primary;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.125;
  padding: 10px 20px;
  text-decoration: none;
  width: fit-content;

  &:hover {
    @include effect-gradient-2;
    @include effect-cards-shadow;
  }

  &:active {
    background: $blue-light-6;
    box-shadow: none;
  }

  &:focus-visible {
    background: $white;
    outline: 0;
    box-shadow: $blue-light-4 0px 0px 0px 4px;
  }
}
</style>
