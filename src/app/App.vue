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

html, body
  margin: 0 !important
  padding: 0 !important
  *
    outline: none !important

#app
  font-family: "Calibri Light", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: clr.$text
  font-size: size.$text

</style>
