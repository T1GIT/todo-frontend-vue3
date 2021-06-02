<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store
    }
  },
})
</script>

<style scoped>

</style>
