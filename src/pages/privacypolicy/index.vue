<template>
  <div style="background-color: #f4f7f5" class="pa-8">
    <h2 style="color: black">Privacy-Policy</h2>
    <vue-pdf-embed source="./file/PrivacyPolicy.pdf" />
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed/dist/vue2-pdf-embed";

export default {
  name: "PrivacyPolicy",
  components: {
    pdf: VuePdfEmbed,
  },
  data() {
    return {
      fileBase64: "data:application/pdf;base64,",
    };
  },
};
</script>
