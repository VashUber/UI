<template>
  <div class="app">
    <div class="box">
      <h2 class="title">Buttons</h2>
      <div class="app__buttons-wrapper">
        <v-button>
          <template #text>Click me</template>
        </v-button>
        <v-button type="primary">
          <template #text>Click me</template>
        </v-button>
        <v-button type="error">
          <template #text>Click me</template>
        </v-button>
        <v-button type="disabled">
          <template #text>Click me</template>
        </v-button>
      </div>
    </div>
    <div class="box">
      <h2 class="title">Carousel</h2>
    </div>
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
    padding: 20px;
    font-size: 1rem;

    &__buttons-wrapper {
      display: flex;
      gap: 20px;
    }
  }

  .box {
    &:not(:first-child) {
      margin: 20px 0;
    }
  }

  .title {
    margin-bottom: 10px;
  }
</style>
