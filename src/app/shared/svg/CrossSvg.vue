<template>
  <svg viewBox="0 0 1000 1000" class="cross-svg">
    <line class="st0" x1="74" y1="73" x2="927" y2="926"/>
    <line class="st0" x1="927" y1="73" x2="74" y2="926"/>
  </svg>
</template>

<script>
export default {
  name: "CrossSvg"
}
</script>

<style scoped lang="sass">

@use "src/app/shared/sass/config/color" as clr

.cross-svg
  fill: none
  stroke: clr.$light
  stroke-width: 30
</style>
