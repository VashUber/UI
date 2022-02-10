<template>
  <div class="carousel">
    <transition-group :name="direction === 'right' ? 'show_right' : 'show_left'">
      <div
        v-for="(item, index) in CarouselItems"
        :key="item"
        v-show="currentItem.index === index"
        class="carousel__item"
      >
        <slot :item="item" name="item" :key="item"></slot>
      </div>
    </transition-group>

    <button class="carousel__button carousel__button_left">
      <img
        src="../assets/previous.svg"
        alt=""
        @click="setPrevious"
        class="carousel__button-img"
      />
    </button>
    <button class="carousel__button carousel__button_right">
      <img
        src="../assets/next.svg"
        alt=""
        @click="setNext"
        class="carousel__button-img"
      />
    </button>
  </div>
</template>

<script setup>
  import { computed, defineProps, reactive, ref } from "vue"

  const { CarouselItems } = defineProps({ CarouselItems: Array })
  const currentItem = reactive({
    content: CarouselItems[0],
    index: 0,
  })
  const direction = ref("right")

  const maxIndex = computed(() => CarouselItems.length - 1)

  const setPrevious = () => {
    direction.value = "right"
    if (currentItem.index > 0) {
      currentItem.index--
      currentItem.content = CarouselItems[currentItem.index]
    } else {
      currentItem.index = maxIndex.value
      currentItem.content = CarouselItems[maxIndex.value]
    }
  }

  const setNext = () => {
    direction.value = "left"
    if (currentItem.index < maxIndex.value) {
      currentItem.index++
      currentItem.content = CarouselItems[currentItem.index]
    } else {
      currentItem.index = 0
      currentItem.content = CarouselItems[0]
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    overflow: hidden;
    position: relative;

    display: flex;

    &__button-img {
      width: 2.5rem;
    }

    &__item {
      width: 100%;
    }

    &__button {
      width: 3rem;
      height: 3rem;
      position: absolute;
      z-index: 999;
      top: calc(50% - 1.25rem);
      border-radius: 100%;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.45);
      transition: background ease-in 0.2s;

      &:hover {
        background: rgba(0, 0, 0, 0.3);
      }

      &_left {
        margin-left: 2rem;
        left: 0;
      }

      &_right {
        margin-right: 2rem;
        right: 0;
      }
    }
  }

  .show_left-leave-active,
  .show_right-leave-active {
    position: absolute;
    transition: all 0.5s ease;
  }

  .show_left-leave-to {
    opacity: 0;
    transform: translateX(-200px);
  }
  .show_right-leave-to {
    opacity: 0;
    transform: translateX(200px);
  }
</style>
