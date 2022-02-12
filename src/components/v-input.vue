<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="input"
    :value="modelValue"
    @input="onInput($event)"
  />
</template>

<script setup>
  import { defineProps, defineEmits } from "vue"

  const { type, placeholder, modelValue } = defineProps({
    type: String,
    placeholder: String,
    modelValue: String,
  })

  const emits = defineEmits(["update:modelValue"])

  const onInput = (e) => {
    emits("update:modelValue", e.target.value)
  }
</script>

<style lang="scss" scoped>
  .input {
    border-radius: 0.2rem;
    border: 1px solid #dadada;
    outline: none;
    padding: 0.25rem 0.5rem;
    font-size: 1em;
    transition: box-shadow 0.2s ease-in-out;

    &:focus {
      border: 1px solid rgba(91, 134, 255, 0.2);
      box-shadow: 0px 0px 0px 3px rgba(91, 134, 255, 0.2);
    }

    &::placeholder {
      color: #bebebe;
    }
  }
</style>
