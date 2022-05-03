<template>
  <div class="member-card">
    <div class="member-card__img">
      <img :src="require(`~/assets/images${imgPath}`)" alt="" />
    </div>

    <div
      class="member-card__contents"
      :class="{ 'member-card__contents--open': isExpanded }"
    >
      <div class="member-card__header">
        <h2>{{ name }}</h2>
        <h3>{{ jobTitle }}</h3>
      </div>

      <div class="member-card__body">
        <p>
          {{ text1 }}

          <span
            class="card__read-more"
            :class="{ 'card__read-more--open': isExpanded }"
          >
            {{ text2 }}
          </span>
        </p>

        <div
          class="read-more-btn"
          :class="{ 'read-more-btn--expanded': isExpanded }"
          @click="toggleState"
        >
          <span class="read-more"
            >{{ $t("about").about_members.toggle_label_read_more }} +</span
          >
          <span class="read-less"
            >{{ $t("about").about_members.toggle_label_read_less }} -</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgPath", "name", "jobTitle", "text1", "text2"],
  data: function () {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleState: function () {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.member-card {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  width: 100%;
  height: 100%;

  &__contents {
    padding: 80px 30px;
    width: max(670px, 60%);

    &--open {
      padding: 30px;
    }
  }

  &__header {
    margin-bottom: 20px;

    h2 {
      color: $black;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 1.2;
      margin: 0;
    }

    h3 {
      color: $pink-primary;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.2;
      margin: 0;
    }
  }

  &__body {
    p {
      color: $gray-1;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;
      margin-bottom: 20px;
    }
  }

  &__img {
    border-radius: 20px;
    overflow: hidden;
    width: min(462px, 100%);

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .read-more-btn {
    span {
      cursor: pointer;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
      margin: 0;
      position: relative;
      z-index: 1;
    }

    .read-more {
      display: inline-block;
      color: $blue-primary;
    }

    .read-less {
      display: none;
      color: $gray-2;
    }

    &--expanded {
      .read-more {
        display: none;
      }

      .read-less {
        display: inline-block;
      }
    }
  }

  .card__read-more {
    display: block;
    height: 0;
    opacity: 0;
    padding: 0;
    @include transition-ease-out-03;

    &--open {
      display: block;
      height: fit-content;
      opacity: 1;
      padding: 20px 0 0;
      @include transition-ease-out-03;
    }
  }
}

@media (max-width: 820px) {
  .member-card {
    flex-direction: column;
    align-items: center;
    column-gap: 0;
    row-gap: 30px;

    &__contents {
      padding: 0;
      width: 100%;
    }

    &__header {
      text-align: center;
    }

    &__body {
      p {
        text-align: justify;
      }
    }

    &__img {
      width: 386px;
    }
  }
}

@media (max-width: 600px) {
  .member-card {
    &__body p {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    &__img {
      width: 100%;
    }
  }
}
</style>
