<template>
  <div style="background-color: #f4f7f5" class="pa-8">
    <h2 style="color: black">Terms & Conditions</h2>
    <pdf src="./file/TermsAndConditions.pdf"></pdf>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  name: "TermsAndConditions",
  components: {
    pdf: pdf,
  },
};
</script>
