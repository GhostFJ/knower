<!--
 * @Author: FunJust
 * @Date: 2021-11-05 21:03:06
 * @Description:
-->
<template>
  <div class="pb-3 validate-input-container">
    <input
      class="form-control"
      :class="{'is-invalid': inputRef.err}"
      :value="inputRef.val"
      v-bind="$attrs"
      @blur="ValidateInput"
      @input="updateValue"
    >
    <span v-if="inputRef.err" class="invalid-feedback">{{inputRef.msg}}</span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, reactive, PropType, onMounted,
} from 'vue';
import { RulesProp } from '@/store/types';
import { emitter } from './ValidateForm.vue';

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  inheritAttrs: false,
  setup(props, { emit }) {
    const inputRef = reactive({
      val: props.modelValue || '',
      err: false,
      msg: '',
    });

    const updateValue = (e: Event) => {
      const targetVal = (e.target as HTMLInputElement).value;
      inputRef.val = targetVal;
      emit('update:modelValue', targetVal);
    };

    const ValidateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          inputRef.msg = rule.message;
          switch (rule.type) {
            case 'required':
              passed = (inputRef.val.trim() !== '');
              break;
            case 'email':
              passed = emailReg.test(inputRef.val);
              break;
            case 'range':
              passed = inputRef.val.length > 6;
              break;
            default:
              break;
          }
          return passed;
        });

        inputRef.err = !allPassed;
        return allPassed;
      }
      return true;
    };

    onMounted(() => {
      emitter.emit('form-item-created', ValidateInput);
    });
    return {
      inputRef,
      ValidateInput,
      updateValue,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
