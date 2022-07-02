<template>
  <infinite-slide-bar duration="25s">
    <div class="items">
      <div v-for="language in $t('services_page').languages" :key="language.id">
        <div class="language-img">
          <img
            :src="require(`~/assets/images${language.img}`)"
            :alt="$t(language.language)"
          />
        </div>
      </div>
    </div>
  </infinite-slide-bar>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.vifnslb-element {
  column-gap: 20px;

  &:hover {
    transform: translateX(0%);
  }
}

.items {
  display: flex;
  align-items: center;
  justify-content: space-around;
  column-gap: 20px;
}

.language-img {
  padding: 20px;

  img {
    filter: grayscale(100%);
    transition: filter 0.2s ease-out;

    &:hover {
      filter: grayscale(0%);
      transition: filter 0.2s ease;

      .vifnslb-element {
        animation-play-state: paused;
      }
    }
  }
}

@media (max-width: $tablet) {
  .items {
    column-gap: 30px;
  }

  .language-img {
    padding: 0;
    width: 80px;

    img {
      filter: grayscale(0%);
      transition: none;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
