<template>
  <div class="bg__gradient"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.bg__gradient {
  @include effect-gradient-2--inverted;
  width: 100%;
  height: 100px;
  z-index: -1;
}

@media (max-width: 820px) {
  .bg__gradient {
    @include effect-gradient-2--inverted;
    width: 100%;
    height: 50px;
    z-index: -1;
  }
}
</style>
