<template>
  <router-view></router-view>
</template>


<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useStore } from "vuex";


export default defineComponent({

  setup() {
    const store = useStore()

    store.dispatch("auth/createFingerprint")

    onMounted(() => store.commit('load'))
  }
});
</script>

<style lang="sass">

@use "src/app/shared/sass/config/color" as clr
@use "src/app/shared/sass/config/size" as size

@import "src/app/shared/sass/font"

html, body
  margin: 0 !important
  padding: 0 !important

#app
  *
    outline: none !important
    font-family: "Montserrat", "Calibri Light", sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: clr.$text
    font-size: size.$text

</style>
