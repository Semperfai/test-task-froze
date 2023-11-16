<script setup lang="ts"></script>
<template>
  <v-container>
    <h1 class="title"><slot name="title" /></h1>
    <v-row class="d-flex align-center justify-start pa-2 ma-4 ga-10">
      <slot name="header" />
    </v-row>
    <v-row class="justify-center">
      <slot name="main" />
    </v-row>
    <v-row>
      <slot name="footer" />
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.title {
  color: #4285f4;
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
}

.search-field {
  max-width: 40rem;
}

@media (max-width: 768px) {
  .title {
    font-size: 1em;
    margin-bottom: 10px;
  }
}
</style>
