<template>
  <div class="contact__hero">
    <h1>{{ $t("contact_page").hero_title }}</h1>
    <p>
      {{ $t("contact_page").hero_text_1 }}
      <i>{{ $t("contact_page").hero_text_2 }}</i>
      {{ $t("contact_page").hero_text_3 }}
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.contact__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  margin: 0 auto;
  max-width: 1112px;
  padding: 190px 80px 0;

  h1 {
    color: $blue-primary;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1;
    margin: 0;
    text-align: center;
  }

  p {
    color: $gray-1;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.2;
    margin: 0;
    text-align: center;
  }
}

@media (max-width: 820px) {
  .contact__hero {
    max-width: unset;
    padding: 250px 80px 0;
  }
}

@media (max-width: 600px) {
  .contact__hero {
    max-width: unset;
    padding: 240px 20px 0;

    h1 {
      font-size: 2.25rem;
    }
  }
}
</style>
