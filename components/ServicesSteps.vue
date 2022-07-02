<template>
  <div class="services-steps">
    <div
      class="service-step-card card-container"
      v-for="step in $t('services_page').pidgin_style_steps"
      :key="step.id"
    >
      <div class="number-indicator">
        {{ step.step_number }}
      </div>
      <div class="card-info">
        <h3 class="card-title">
          {{ step.step_title }}
        </h3>
        <div class="card-body-text">
          <p>
            {{ step.step_paragraph_1 }}
          </p>
          <p>
            {{ step.step_paragraph_2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.services-steps {
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding: 100px 0 0;
}
.card {
  &-container {
    display: flex;
    column-gap: 94px;
    margin: 0 auto;
    max-width: 955px;

    &:nth-child(1) {
      .card-title {
        color: $blue-light-3;
      }

      .number-indicator {
        background-color: $blue-light-3;
      }
    }

    &:nth-child(2) {
      .card-title {
        color: $blue-light-2;
      }

      .number-indicator {
        background-color: $blue-light-2;
      }
    }

    &:nth-child(3) {
      .card-title {
        color: $blue-light-1;
      }

      .number-indicator {
        background-color: $blue-light-1;
      }
    }
  }

  &-title {
    @include title-32;
  }

  &-info {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }

  &-body-text {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;

    p {
      @include body-12;
    }
  }
}

.number-indicator {
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: $white;
  font-size: 3rem;
  font-weight: 700;
  height: 100px;
  width: 100px;
}

@media (max-width: $tablet) {
  .services-steps {
    row-gap: 50px;
    padding: 50px 0 0;
  }

  .card {
    &-container {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      column-gap: unset;
      max-width: 600px;
    }

    &-title {
      @include title-32;
      text-align: center;
    }

    &-body-text {
      grid-template-columns: 1fr;
      row-gap: 20px;
      column-gap: unset;

      p {
        @include body-20;
        text-align: center;

        &:nth-child(2) {
          display: none;
        }
      }
    }
  }

  .number-indicator {
    height: 76px;
    width: 76px;
  }
}

@media (max-width: 600px) {
  .card {
    &-container {
      max-width: unset;
    }

    &-title {
      @include title-24;
    }

    &-body-text {
      p {
        @include body-16;
      }
    }
  }
}
</style>
