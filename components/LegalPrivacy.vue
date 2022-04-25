<template>
  <div class="legal-doc">
    <div class="bg__gradient"></div>
    <div class="legal-doc__content">
      <div class="legal-doc__header">
        <img src="~/assets/images/svg/legal-privacy.svg" alt="" />
        <h1>Aviso de privacidad</h1>
      </div>
      <div class="legal-doc__body">
        <div class="legal-doc__text">
          <p>
            El presente Aviso de Privacidad (en adelante el “Aviso”) establece
            los términos y condiciones en virtud de los cuales
            <b>PIDGIN CONTACT SOLUTIONS SAS</b>, identificada con NIT
            901.298.101 y domiciliada en la ciudad de Bogotá, D.C., en adelante
            <b>LA EMPRESA</b>, realizará el tratamiento de sus datos personales.
          </p>
        </div>
        <div class="legal-doc__section">
          <h3>1. Tratamiento y finalidad</h3>
          <p>
            El tratamiento que realizará <b>LA EMPRESA</b> con la información
            personal será el siguiente: La recolección, almacenamiento, uso,
            circulación y disposición para las siguientes finalidades:
          </p>
          <ol>
            <li>
              Efectuar las gestiones pertinentes para el desarrollo del objeto
              social de la compañía en lo que tiene que ver con el cumplimiento
              del objeto del contrato celebrado con el Titular de la
              información.
            </li>
            <li>
              Realizar invitaciones a eventos y ofrecer nuevos productos y
              servicios.
            </li>
            <li>Gestionar trámites (solicitudes, quejas, reclamos).</li>
            <li>
              Efectuar encuestas de satisfacción respecto de los bienes y
              servicios ofrecidos por <b>LA EMPRESA</b>.
            </li>
            <li>
              Suministrar información de contacto a la fuerza comercial y/o red
              de distribución, telemercadeo, investigación de mercados y
              cualquier tercero con el cual <b>LA EMPRESA</b> tenga un vínculo
              contractual para el desarrollo de estas actividades para la
              ejecución de estas.
            </li>
            <li>
              Contactar al Titular a través de medios telefónicos para realizar
              encuestas, estudios y/o confirmación de datos personales
              necesarios para la ejecución de una relación contractual.
            </li>
            <li>
              Contactar al Titular a través de medios electrónicos – SMS o chat
              para el envío de noticias relacionadas con campañas de
              fidelización o mejora de servicio.
            </li>
            <li>
              Contactar al Titular a través de correo electrónico para el envío
              de extractos, estados de cuenta o facturas en relación con las
              obligaciones derivadas del contrato celebrado entre las partes.
            </li>
            <li>
              Dar cumplimiento a las obligaciones contraídas por
              <b>LA EMPRESA</b> con el Titular de la Información, con relación
              al pago de salarios, prestaciones sociales y demás retribuciones
              consagradas en el contrato de trabajo o según lo disponga la ley.
            </li>
            <li>
              Ofrecer programas de bienestar corporativo y planificar
              actividades empresariales, para el titular y sus beneficiarios
              (hijos, cónyuge, compañero permanente).
            </li>
            <li>
              Transferir datos personales fuera del país para cumplir con las
              regulaciones antilavado de activos que le puedan aplicar.
            </li>
            <li>
              Transmitir los datos personales fuera del país a terceros con los
              cuales <b>LA EMPRESA</b> haya suscrito un contrato de
              procesamiento de datos y sea necesario entregársela para el
              cumplimiento del objeto contractual.
            </li>
            <li>
              Prestar los servicios ofrecidos por <b>LA EMPRESA</b> y aceptados
              en el contrato suscrito.
            </li>
            <li>
              Suministrar la información a terceros con los cuales
              <b>LA EMPRESA</b> tenga relación contractual y que sea necesario
              entregársela para el cumplimiento del objeto contratado.
            </li>
          </ol>
        </div>
        <div class="legal-doc__section">
          <h3>2. Derechos del titular</h3>
          <p>Como titular de sus datos personales usted tiene derecho a:</p>
          <ol>
            <li>
              Acceder en forma gratuita a los datos proporcionados que hayan
              sido objeto de tratamiento.
            </li>
            <li>
              Conocer, actualizar y rectificar su información frente a datos
              parciales, inexactos, incompletos, fraccionados, que induzcan a
              error, o a aquellos cuyo tratamiento esté prohibido o no haya sido
              autorizado.
            </li>
            <li>Solicitar prueba de la autorización otorgada.</li>
            <li>
              Presentar ante la Superintendencia de Industria y Comercio (SIC)
              quejas por infracciones a lo dispuesto en la normatividad vigente.
            </li>
            <li>
              Revocar la autorización y/o solicitar la supresión del dato,
              siempre que no exista un deber legal o contractual que impida
              eliminarlos.
            </li>
            <li>
              Abstenerse de responder las preguntas sobre datos sensibles.
              Tendrá carácter facultativo las respuestas que versen sobre datos
              sensibles o sobre datos de los niños y adolescentes.
            </li>
          </ol>
        </div>
        <div class="legal-doc__section">
          <h3>3. Mecanismos para conocer la política de tratamiento</h3>
          <p>
            El Titular puede acceder a nuestra Política de Tratamiento de Datos
            Personales, la cual se encuentra publicada en
            https://pidgin.com.co/politica-de-tratamiento-de-datos-personales.pdf
          </p>
        </div>
      </div>
    </div>
    <div class="bg__gradient--inverted"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~assets/scss/variables";

.legal-doc {
  position: relative;

  .bg__gradient {
    @include effect-gradient-2--inverted;
    width: 100%;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    &--inverted {
      @include effect-gradient-2;
      width: 100%;
      height: 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    max-width: 956px;
    padding: 100px 0;
  }

  &__section {
    p {
      &:last-child {
        margin-bottom: 30px;
      }
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    margin-bottom: 50px;
    text-align: center;

    h1 {
      color: $blue-primary;
      font-size: 3rem;
      font-weight: 600;
      margin: 0;
    }
  }

  &__body {
    p,
    li {
      color: $gray-1;
      font-size: 1.25rem;
      font-weight: 300;
      line-height: 1.2;

      b {
        font-weight: 600;
      }
    }

    p {
      margin: 0 0 1.25rem;
    }

    ol,
    ul {
      list-style-position: outside;
      margin: 0 0 30px;
      padding-left: 24px;
    }

    li {
      margin: 0;
    }

    h3 {
      color: $blue-primary;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.2;
      margin: 0 0 30px;
    }
  }

  &__text {
    margin-bottom: 30px;
  }
}

@media (max-width: $tablet) {
  .legal-doc {
    &__content {
      max-width: $tablet;
      padding: 100px 40px;
    }
  }
}

@media (max-width: 600px) {
  .legal-doc {
    &__content {
      max-width: 600px;
      padding: 100px 20px;
    }

    &__header {
      h1 {
        font-size: 2rem;
        max-width: 230px;
      }
    }

    &__body {
      p,
      li {
        font-size: 1rem;
      }

      p {
        margin: 0 0 1rem;
      }

      ol {
        padding-left: 20px;
      }
    }
  }
}
</style>
