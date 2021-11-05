<!--
 * @Author: FunJust
 * @Date: 2021-11-05 21:03:06
 * @Description:
-->
<template>
  <div class="validate-input-container pb-3">
    <input type="text"
      class="form-control"
      :class="{'is-invalid': inputRef.err}"
      v-model="inputRef.val"
      @blur="ValidateInput"
    >
    <span v-if="inputRef.err" class="invalid-feedback">{{inputRef.msg}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

interface RuleProp {
  type: 'required' | 'email';
  message: string;
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
  },
  setup(props) {
    const inputRef = reactive({
      val: '',
      err: false,
      msg: '',
    });

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
            default:
              break;
          }
          return passed;
        });

        inputRef.err = !allPassed;
      }
    };
    return {
      inputRef,
      ValidateInput,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
