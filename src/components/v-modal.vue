<template>
  <transition name="modal">
    <div class="modal" v-if="modelValue">
      <div class="modal__container" ref="modal">
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
  import { onMounted, ref, defineEmits, defineProps, watch } from "vue"

  const emits = defineEmits(["closeModal"])
  const { modelValue } = defineProps({ modelValue: Boolean })

  const handleOutsideClick = (event) => {
    if (!modal?.value.contains(event.target)) emits("closeModal")
  }

  const modal = ref(null)

  onMounted(() => {
    watch(modal, () => {
      if (modal.value) window.addEventListener("click", handleOutsideClick)
      else window.removeEventListener("click", handleOutsideClick)
    })
  })
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
    z-index: 0;
  }

  .modal-enter-from,
  .modal-leave-to {
    transform: scale(1.1);
    opacity: 0;
  }
</style>
