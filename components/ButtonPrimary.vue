<template>
  <NuxtLink class="primary-button" :to="buttonLink">
    {{ buttonLabel }}
  </NuxtLink>
</template>

<script>
export default {
  props: ["buttonLabel", "buttonLink"],
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.primary-button {
  @include transition-ease-02;
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
