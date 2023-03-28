<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<style lang="scss">
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.pdf-viewer {
  .pdf-viewer__header {
    .header__preview {
      .start {
        .title {
          clip: rect(0 0 0 0) !important;
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "App",
};
</script>
