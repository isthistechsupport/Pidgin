<template>
  <div class="history">
    <div class="history__header">
      <h1>{{ $t("about").about_history.title }}</h1>
      <h2>{{ $t("about").about_history.subtitle }}</h2>
    </div>
    <div class="history__beginning">
      <div class="history__beginning__container">
        <h2>{{ $t("about").about_history.beginning_history.title }}</h2>
        <div class="history__beginning__body">
          <div class="history__beginning__text">
            <p>
              {{ $t("about").about_history.beginning_history.paragraph_1 }}
            </p>
            <p>
              {{ $t("about").about_history.beginning_history.paragraph_2 }}
            </p>
            <p>
              {{ $t("about").about_history.beginning_history.paragraph_3 }}
            </p>
            <p>
              {{ $t("about").about_history.beginning_history.paragraph_4 }}

              {{
                $t("about").about_history.beginning_history
                  .paragraph_4_highlighted
              }}
            </p>
          </div>
          <div class="history__beginning__img">
            <img src="~/assets/images/jpg/history-beginning.jpg" alt="" />
          </div>
        </div>
        <div class="history__beginning__body--mobile">
          <div class="flex-container">
            <div class="history__beginning__text">
              <p>
                {{ $t("about").about_history.beginning_history.paragraph_1 }}
              </p>
              <p>
                {{ $t("about").about_history.beginning_history.paragraph_2 }}
              </p>
            </div>
            <div class="history__beginning__img">
              <img src="~/assets/images/jpg/history-beginning.jpg" alt="" />
            </div>
          </div>
          <div class="history__beginning__text">
            <p>
              {{ $t("about").about_history.beginning_history.paragraph_3 }}
            </p>
            <p>
              {{ $t("about").about_history.beginning_history.paragraph_4 }}
              <b>
                {{
                  $t("about").about_history.beginning_history
                    .paragraph_4_highlighted
                }}
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="history__incubation">
      <div class="history__incubation__container">
        <h2>{{ $t("about").about_history.incubation_history.title }}</h2>
        <div class="history__incubation__body">
          <div class="history__incubation__img">
            <img src="~/assets/images/jpg/history-incubation.jpg" alt="" />
          </div>
          <div class="history__incubation__text">
            <p>
              {{ $t("about").about_history.incubation_history.paragraph_1 }}
            </p>
            <p>
              {{ $t("about").about_history.incubation_history.paragraph_2 }}
            </p>
            <p>
              {{ $t("about").about_history.incubation_history.paragraph_3 }}
              {{
                $t("about").about_history.incubation_history
                  .paragraph_3_highlighted
              }}
            </p>
          </div>
        </div>
        <div class="history__incubation__body--mobile">
          <div class="flex-container">
            <div class="history__incubation__text">
              <p>
                {{ $t("about").about_history.incubation_history.paragraph_1 }}
              </p>
              <p>
                {{ $t("about").about_history.incubation_history.paragraph_2 }}
              </p>
            </div>
            <div class="history__incubation__img">
              <img src="~/assets/images/jpg/history-incubation.jpg" alt="" />
            </div>
          </div>
          <div class="history__incubation__text">
            <p>
              {{ $t("about").about_history.incubation_history.paragraph_3 }}
              <b>
                {{
                  $t("about").about_history.incubation_history
                    .paragraph_3_highlighted
                }}
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="history__pidgin">
      <div class="history__pidgin__container">
        <h2>{{ $t("about").about_history.pidgin_history.title }}</h2>
        <div class="history__pidgin__body">
          <div class="history__pidgin__text">
            <p>
              {{ $t("about").about_history.pidgin_history.paragraph_1 }}
            </p>
            <p>
              {{ $t("about").about_history.pidgin_history.paragraph_2 }}
            </p>
          </div>
          <div class="history__pidgin__img">
            <img src="~/assets/images/webp/team.webp" alt="pidgin team" />
          </div>
        </div>
        <div class="history__pidgin__body--mobile">
          <div class="flex-container">
            <div class="history__pidgin__text">
              <p>
                {{ $t("about").about_history.pidgin_history.paragraph_1 }}
              </p>
            </div>
            <div class="history__pidgin__img">
              <img src="~/assets/images/webp/team.webp" alt="pidgin team" />
            </div>
          </div>
          <div class="history__pidgin__text">
            <p>
              {{ $t("about").about_history.pidgin_history.paragraph_2 }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="history__bottom-text">
      <div class="history__bottom-text__gradient"></div>
      <div class="history__bottom-text__content">
        <p>
          {{ $t("about").about_history.text }}
          <b>
            {{ $t("about").about_history.text_highlighted }}
          </b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

.history {
  display: flex;
  flex-direction: column;

  &__header {
    background: $blue-light-6;
    padding: 100px 0 0;
    text-align: center;

    h1 {
      color: $black;
      @include title-48;
    }

    h2 {
      color: $blue-primary;
      font-size: 2rem;
      font-style: italic;
      font-weight: 500;
      line-height: 1.2;
      margin: 0;
    }
  }

  &__beginning {
    background: $blue-light-6;

    &__img {
      max-height: 540px;
    }
  }

  &__incubation {
    background: $blue-light-6;

    &__img {
      max-height: 256px;
    }
  }

  &__pidgin {
    background: $blue-light-6;

    &__img {
      max-height: 332px;
    }
  }

  &__beginning,
  &__incubation,
  &__pidgin {
    &__container {
      margin: 0 auto;
      max-width: 1200px;
      padding: 100px 24px;
      width: 100%;
    }

    h2 {
      color: $blue-primary;
      font-size: 2.25rem;
      font-weight: 400;
      line-height: 1.2;
      margin: 0 0 50px;
    }

    &__body {
      display: flex;
      flex-direction: row;
      column-gap: 50px;
      height: 100%;

      &--mobile {
        display: none;
      }
    }

    &__text {
      width: 50%;

      p {
        @include body-20;
        margin: 0 0 1.25rem;
        text-align: justify;

        &:last-child {
          margin: 0;
        }

        b {
          color: $blue-primary;
          font-weight: 300;
        }
      }
    }

    &__img {
      border-radius: 20px;
      max-width: 540px;
      overflow: hidden;
      width: 50%;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }

  &__bottom-text {
    position: relative;

    &__gradient {
      @include effect-gradient-2--inverted;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    &__content {
      margin: 0 auto;
      max-width: 1200px;
      padding: 100px 24px;

      p {
        @include body-28;
        text-align: center;

        b {
          color: $blue-primary;
          font-weight: 300;
        }
      }
    }
  }
}

@media (max-width: 1100px) {
  .history {
    &__beginning {
      &__img {
        max-height: unset;

        img {
          object-position: 75% 0;
        }
      }
    }

    &__incubation {
      &__img {
        max-height: unset;
      }
    }

    &__pidgin {
      &__img {
        max-height: 380px;
      }
    }
  }
}

@media (max-width: 1000px) {
  .history__pidgin__img {
    max-height: 428px;
  }
}

@media (max-width: 920px) {
  .history__pidgin__img {
    max-height: 476px;
  }
}

@media (max-width: 820px) {
  .history {
    &__header {
      padding: 50px 40px;

      h1 {
        margin: 0 auto;
        max-width: 560px;
      }

      h2 {
        margin: 0 auto;
        max-width: 560px;
      }
    }

    &__pidgin {
      &__img {
        max-height: unset;
      }
    }

    &__beginning,
    &__incubation,
    &__pidgin {
      &__container {
        max-width: 820px;
        padding: 50px 40px 100px;
      }

      h2 {
        text-align: center;
      }

      &__body {
        display: none;

        &--mobile {
          display: flex;
          flex-direction: column;
          column-gap: 0;

          .flex-container {
            display: flex;
            column-gap: 20px;
            margin-bottom: 20px;

            .history__beginning__text {
              width: 60%;
            }

            .history__beginning__img {
              max-width: 262px;
              object-position: 70% 0;
            }
          }
        }
      }

      &__text {
        width: 100%;

        p {
          &:last-child {
            margin: 0;
          }

          b {
            color: $blue-primary;
            font-weight: 300;
          }
        }
      }
    }

    &__bottom-text {
      &__content {
        max-width: 820px;
        padding: 50px 40px 100px;
      }
    }
  }
}

@media (max-width: 700px) {
  .history {
    &__header {
      padding: 40px 20px;

      h1 {
        font-size: 2rem;
        max-width: unset;
      }

      h2 {
        font-size: 1.25rem;
        max-width: unset;
      }
    }

    &__beginning {
      &__container {
        padding: 20px 20px 40px !important;
      }
    }

    &__beginning,
    &__incubation,
    &__pidgin {
      &__container {
        max-width: 700px;
        padding: 40px 20px;
      }

      h2 {
        font-size: 1.5rem;
        margin-bottom: 40px;
      }

      &__img {
        max-width: unset;
        width: 100%;
        object-position: center;
      }

      &__text {
        p {
          font-size: 1rem;

          margin: 0 0 1rem;
          text-align: left;
        }
      }

      &__body {
        &--mobile {
          .flex-container {
            flex-direction: column-reverse;
            margin: 0 0 1rem;
            row-gap: 20px;

            .history__beginning__text {
              width: 100%;
            }

            .history__beginning__img {
              max-width: unset;
              object-position: center;
              width: 100%;
            }
          }
        }
      }
    }

    &__bottom-text {
      &__content {
        max-width: 700px;
        padding: 40px 20px;

        p {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>
