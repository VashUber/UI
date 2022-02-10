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
      <v-carousel :CarouselItems="array">
        <template #item="{ item }">
          <div
            :style="{
              width: '100%',
              height: '400px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'tomato',
              color: '#fff',
            }"
          >
            <img :src="item" alt="" />
          </div>
        </template>
      </v-carousel>
    </div>
    <div class="box">
      <h2 class="title">Modal</h2>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import vButton from "./components/v-button.vue"
  import vCarousel from "./components/v-carousel.vue"

  const counter = ref(0)
  const array = ref([
    "https://icdn.lenta.ru/images/2021/03/10/14/20210310142047815/square_1280_webp_d2c5c86c5490d4e0fd4a25b44a40db97.webp",
    "https://icdn.lenta.ru/images/2021/01/20/16/20210120164051128/wide_4_3_ad0a8dedf4f24c1002d87743b6451b83.jpg",
  ])
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
