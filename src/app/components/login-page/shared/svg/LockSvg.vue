<template>
  <svg viewBox="0 0 1000 1000" class="lock-svg">
    <path d="M750,491v276H250V491H750 M751,490H249v278h502V490L751,490z"/>
    <path d="M322,411.5"/>
    <path d="M677,411.5"/>
    <path d="M672,490v-80.5c0-98.03-79.47-177.5-177.5-177.5S317,311.47,317,409.5l-1.5,81"/>
    <path d="M677,411.5"/>
    <line v-show="crossed" x1="204.5" y1="244.5" x2="795" y2="835"/>
  </svg>
</template>

<script>
export default {
  name: "LockSvg",
  props: {
    crossed: Boolean
  }
}
</script>

<style scoped lang="sass">

@use "src/app/shared/sass/config/color" as clr

.lock-svg
  fill: none
  stroke: clr.$light
  stroke-width: 30
</style>
