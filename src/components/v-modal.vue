<template>
  <transition name="modal">
    <div class="modal" v-if="modelValue" @click="close">
      <div class="modal__container" ref="modal" @click.stop>
        <div class="modal__header">
          <slot name="header"></slot>
        </div>
        <div class="modal__content">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
  import { defineEmits, defineProps } from "vue"

  const emits = defineEmits(["update:modelValue"])
  const { modelValue } = defineProps({ modelValue: Boolean })

  const close = () => {
    emits("update:modelValue", false)
  }
</script>

<style lang="scss" scoped>
  .modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;

    &__container {
      border-radius: 0.5rem;
      max-width: 30rem;
      width: 100%;
      box-sizing: border-box;
      background: #fff;
    }

    &__header {
      background: #e6e6e6;
      border-radius: 0.5rem 0.5rem 0 0;
      padding: 1rem 0.5rem;
    }

    &__content {
      min-height: 15rem;
      padding: 1rem 0.5rem;
    }
  }

  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    transform: scale(1.1);
    opacity: 0;
  }
</style>
