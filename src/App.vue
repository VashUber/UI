<template>
  <div class="app">
    <v-button>
      <template #text>Click me</template>
    </v-button>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import vButton from "./components/v-button.vue"

  const counter = ref(0)
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

  * {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  .app {
    font-size: 1rem;
  }
</style>
