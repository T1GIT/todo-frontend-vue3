<template>
  <div class="field">
    <div
        class="input_wrap"
        :class="{ secured: secured }"
    >
      <input
          class="input"
          :type="masked ? 'password' : 'text'"
          :name="name"
          v-model="value"
          @input="$emit('update:modelValue', $event.target.value || '')"
      >
      <div
          class="btn"
          v-if="secured"
          @click="masked = !masked"
      >
        <LockSvg :crossed="!masked" class="svg"/>
      </div>
    </div>
    <label
        class="label"
        v-show="!validation.valid"
    > {{ validation.msg }} </label>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref } from "vue";
import { ValidatorReturnType } from "@/app/components/login-page/shared/validation";
import LockSvg from "@/app/components/login-page/shared/svg/LockSvg.vue";

export default defineComponent({
  components: { LockSvg },
  props: {
    secured: Boolean,
    validator: {
      type: Function,
      default: () => ({ valid: true }),
    },
    name: String,
    modelValue: String
  },
  emits: {
    'update:modelValue': String
  },
  setup(props) {
    const value: Ref<string> = ref(props.modelValue || "")

    const masked: Ref<boolean> = ref(props.secured)

    const validation: ComputedRef<ValidatorReturnType> = computed(() => props.validator(value.value))

    return { value, masked, validation }
  },
})
</script>

<style scoped lang="sass">

@use "src/app/shared/sass/config/color" as clr
@use "src/app/shared/sass/config/animation" as ani
@use "src/app/shared/sass/config/size" as size

$input_ver_pad: 0.7
$label_height: 15px
$caret_opacity: 0.5
$select_opacity: 0.2
$btn_pad: 5px

$input_height: size.$text * (1 + $input_ver_pad)
$input_left_pad: size.$text * $input_ver_pad

.field
  height: $input_height + $label_height
  .input_wrap
    width: 100%
    height: $input_height
    .input
      font-size: size.$text
      color: clr.$text
      background: clr.$dark
      padding-left: $input_left_pad
      height: 100%
      box-sizing: border-box
      border: none
      width: 100%
      caret-color: rgba(clr.$text, $caret_opacity)
      &::selection
        background: rgba(clr.$text, $select_opacity)
      &:-webkit-autofill
        -webkit-box-shadow: inset 0 0 0 $input_height clr.$dark
        -webkit-text-fill-color: clr.$text
    &.secured
      display: flex
      flex-direction: row
      .input
        width: calc(100% - #{ $input_height })
      .btn
        width: $input_height
        height: $input_height
        border: none
        background: clr.$dark
        transition: ani.$normal
        .svg
          margin: $btn_pad
        &:hover
          background: clr.$deep-dark
  .label
    width: 100%
    height: $label_height

</style>
