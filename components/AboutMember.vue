<template>
  <div class="about-members__member" v-bind:class="{ expanded: isExpanded }">
    <div class="about-members__member__img">
      <img src="~/assets/images/jpg/profile-pic-nicole-mora.jpg" alt="" />
    </div>
    <div class="about-members__member__info">
      <div class="about-members__member__header">
        <h2>Nicole Mora</h2>
        <h3>Directora General</h3>
      </div>
      <div class="about-members__member__body">
        <p>
          Soy una mujer a la que le apasiona aprender para poder enseñar y
          motivar a otros. Eso es natural para mí, ya que fui docente. Llegué a
          Pidgin buscando contagiar esa pasión a otros. Nos proponemos ser una
          de las firmas más reconocidas en el campo de tecnología para poder
          ofrecerles soluciones a nuestros clientes que les permitan crecer y,
          al mismo tiempo, disfrutar de la mejor experiencia de servicio.
        </p>
        <p>
          Saber que contamos con un equipo excelente para hacer realidad este
          sueño es muy gratificante. Soy abanderada de que las relaciones en una
          compañía deben ser recíprocas. Cuando le cumples a tu equipo se logran
          cosas maravillosas, y mi gran reto en esta compañía es cumplirle a
          todos los <i>Pigeons</i> para que, en equipo, podamos cumplirle a
          todos nuestros clientes.
        </p>
      </div>
      <div class="about-members__member__toggle" @click="toggleState">
        <span class="collapsed">Ver más +</span>
        <span class="expanded">Ver menos -</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped>
@import "~assets/scss/variables";

.about-members {
  &__member {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
    width: 100%;
    height: 100%;

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

    &__info {
      padding: 80px 30px;
      width: max(670px, 60%);
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
        margin: 0 0 1.25rem;

        &:last-child {
          display: none;
        }
      }
    }

    &__toggle {
      color: $blue-primary;
      cursor: pointer;
      font-size: 1.25rem;
      font-weight: 600;
      line-height: 1.2;
      margin: 0;

      .expanded {
        display: none;
      }

      .collapsed {
        display: block;
      }
    }
  }

  .expanded {
    .about-members__member {
      &__info {
        padding: 30px;
      }

      &__body {
        p {
          &:last-child {
            display: block;
          }
        }
      }

      &__toggle {
        color: $gray-2;

        .expanded {
          display: block;
        }

        .collapsed {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 820px) {
  .about-members {
    &__member {
      flex-direction: column;
      align-items: center;
      column-gap: 0;
      row-gap: 30px;

      &__img {
        width: 386px;
      }

      &__info {
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
    }

    .expanded {
      .about-members__member__info {
        padding: 0;
      }
    }
  }
}

@media (max-width: 600px) {
  .about-members {
    &__member {
      &__img {
        width: 100%;
      }

      &__body {
        p {
          font-size: 1rem;
          margin: 0 0 1rem;
        }
      }
    }
  }
}
</style>
