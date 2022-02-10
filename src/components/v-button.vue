<template>
  <button class="button" :class="'button_' + props.type">
    <span>
      <slot name="text"></slot>
    </span>
  </button>
</template>

<script setup>
  const props = defineProps({ type: String })
</script>

<style lang="scss" scoped>
  .button {
    display: flex;
    gap: 1em;
    border: none;
    outline: none;
    padding: 0.5em 1em;
    cursor: pointer;
    font-size: 1rem;
    border-radius: 0.2em;
    box-sizing: border-box;
    text-shadow: 0.2px 0.2px 0px #000;
    -webkit-transition: box-shadow ease-in-out 0.25s;
    transition: background 0.2s ease-in;

    &:focus {
      box-shadow: 0px 0px 0px 3px rgba(164, 186, 245, 0.2);
    }

    &_primary {
      background: #4a9fe4;
      color: #fff;

      &:focus {
        box-shadow: 0px 0px 0px 3px rgba(91, 134, 255, 0.2);
      }

      &:hover {
        background: rgb(85, 173, 245);
      }
    }

    &_error {
      background: #f74545;
      color: #fff;

      &:focus {
        box-shadow: 0px 0px 0px 3px rgba(255, 91, 91, 0.2);
      }

      &:hover {
        background: rgb(255, 93, 93);
      }
    }

    &_disabled {
      cursor: default;
      color: rgba(255, 255, 255, 0.4);

      &:focus {
        box-shadow: none;
      }
    }
  }
</style>
