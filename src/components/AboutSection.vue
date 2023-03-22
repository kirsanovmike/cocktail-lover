<template>
  <section id="about">
    <v-container fluid class="pt-2 py-10">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light display-2 mt-10">Useful</h1>
              <h1 class="font-weight-light display-1 mb-3 mt-2">
                Our advantages!
              </h1>
              <v-row class="mt-4">
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/bowl.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Ingredients - view the full composition of the cocktail and the proportions of the components
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/cocktail-shaker111.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Equipment - each cocktail is accompanied by a description of the necessary equipment
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/serving111.png"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="text-justify">
                    Servings - serve cocktails for the right number of people
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <v-img
                src="@/assets/img/barman.png"
                class="d-block ml-auto mr-auto"
                max-width="330px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
