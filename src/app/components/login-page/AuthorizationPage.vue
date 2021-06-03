<template>
  <TextField
      class="input"
      v-model="value"
      secured
  ></TextField>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import TextField from "@/app/components/login-page/shared/TextField.vue";

export default defineComponent({
  components: { TextField },
  setup() {
    const store = useStore()

    const value = ref("")

    return {
      value,
      store
    }
  },
  methods: {
  }
})
</script>

<style scoped lang="sass">
  .input
    width: 500px
    height: 100px
</style>
