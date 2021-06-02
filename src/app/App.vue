<template>
  <router-view/>
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

html, body
  margin: 0 !important
  padding: 0 !important
  *
    outline: none !important

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

</style>
