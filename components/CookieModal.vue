<template>
  <div
    class="cookies-modal"
    v-if="!this.$cookies.get('cookies_accepted')"
    :key="modalKey"
  >
    <p class="modal-text">
      {{ $t("cookie_advice") }}
    </p>
    <ButtonModal v-bind:buttonLabel="$t('cookie_button_label')" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalKey: 0,
    };
  },

  mounted() {
    this.$root.$on("force-modal-re-render", this.modalRerender);
  },

  methods: {
    modalRerender() {
      this.modalKey += 1;
    },
  },
};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.cookies-modal {
  @include effect-modal-shadow;
  position: fixed;
  display: flex;
  align-items: center;
  column-gap: 2rem;
  background-color: $white;
  border-radius: 10px;
  bottom: 70px;
  left: 50%;
  max-width: 956px;
  padding: 15px 24px;
  transform: translateX(-50%);
  width: 100%;
  z-index: 5;

  .modal {
    &-text {
      @include body-12;
      color: $gray-1;
    }
  }
}

@media (max-width: 1000px) {
  .cookies-modal {
    flex-direction: column;
    row-gap: 10px;
    column-gap: unset;
    bottom: 40px;
    padding: 15px;
    width: 90%;

    .modal {
      &-text {
        text-align: center;
      }
    }
  }
}

@media (max-width: 600px) {
  .cookies-modal {
    border-radius: 0;
    bottom: 0;
    padding: 24px;
    row-gap: 16px;
    width: 100%;

    .modal {
      &-text {
        text-align: justify;
      }
    }
  }
}
</style>
