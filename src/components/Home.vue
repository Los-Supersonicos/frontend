<template>
  <div class="slider_area">
    <div class="single_slider d-flex align-items-center slider_bg_1 overlay">
      <div class="container">
        <div class="row align-items-center justify-content-start">
          <div class="col-lg-10 col-md-10">
            <div class="slider_text" style="margin-top: 0px;">
              <p style="font-size: 2rem; color: white;">
                Contanos, que te esta pasando?
              </p>
              <p style="font-size: 2.5rem; color: white; margin-top:30px;">
                En mi barrio,
              </p>
              <div style="font-size: 2rems;">
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
              </div>
              <div class="buttons">
                <b-button variant="info" v-b-modal.modal-1
                  >Pedir Ayuda</b-button
                >
                <b-button
                  @click="goMaps"
                  style="margin-left:10px"
                  variant="primary"
                  >Ver el mapa de mi barrio</b-button
                >
                <!-- <a

                  href="#"
                  style="margin-left:10px;"
                  class="genric-btn danger e-large"
                  >Ver el mapa de mi barrio</a
                > -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Para probar nomas -->
    <div class="container">
      <div>
        <PublicationModal id="modal-1" title="¿En que precisas ayuda?" />
      </div>
    </div>
  </div>
</template>

<script>
import { VueTyper } from "vue-typer";
import PublicationModal from "@/components/PublicationModal";
export default {
  name: "Home",
  components: {
    VueTyper,
    PublicationModal,
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
  methods: {
    goMaps: function() {
      this.$router.push({ name: "maps" });
    },
  },
};
</script>

<style scoped>
.buttons {
  margin-top: 30px;
  display: flex;
}
</style>
