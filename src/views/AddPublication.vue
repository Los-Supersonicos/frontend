<template>
  <div class="slider_area">
    <div class="single_slider d-flex align-items-center slider_bg_1 overlay">
      <div class="container">
        <h1>Contanos:</h1>
        <Publication />
      </div>
    </div>
  </div>
</template>

<script>
import Publication from "@/components/Publication";
export default {
  name: "ViewAddPublication",
  components: {
    Publication,
  },
};
</script>
