<template>
  <div class="slider_area">
    <div class="single_slider d-flex align-items-center slider_bg_1 overlay">
      <div class="container">
        <div class="row align-items-center justify-content-start">
          <div class="col-lg-10 col-md-10">
            <div class="slider_text" style="margin-top: -100px;">
              <h3
                class="wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".1s"
              >
                En mi barrio,
              </h3>
              <h3 class="typed">
                <vue-typer
                  :text="texts"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="typing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="2000"
                  :erase-delay="250"
                  erase-style="select-all"
                  :erase-on-complete="false"
                  caret-animation="blink"
                ></vue-typer>
              </h3>
              <a href="#" class="genric-btn info e-large">Necesito Ayuda</a>
              <a
                href="#"
                style="margin-left:10px;"
                class="genric-btn primary e-large"
                >Ver el mapa de mi barrio</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "Home",
  components: {
    VueTyper,
  },
  data() {
    return {
      texts: [
        "Hay una familia que le falta de comer",
        "Hay un abuelo que no tiene los remedios",
        "Al comedor social le falta leche y carne",
        "El centro de salud necesita no tiene gasas",
      ],
    };
  },
};
</script>
