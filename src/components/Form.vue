<!--
 * @Author: FunJust
 * @Date: 2021-11-05 20:26:38
 * @Description:
-->
<template>
  <form>
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <ValidateInput :rules="emailRules"></ValidateInput>
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <input
        type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
        v-model="emailRef.val"
        @blur="validateEmail"
      >
      <div id="emailHelp" class="form-text" v-if="emailRef.err">{{emailRef.msg}}</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">记住密码</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ValidateInput, { RulesProp } from './ValidateInput.vue';

const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default defineComponent({
  name: 'Form',
  components: {
    ValidateInput,
  },
  setup() {
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的邮箱格式' },
    ];
    const emailRef = reactive({
      val: '',
      err: false,
      msg: '',
    });

    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.err = true;
        emailRef.msg = 'can not empty';
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.err = true;
        emailRef.msg = 'email illegal';
      }
    };
    return {
      emailRef,
      emailRules,
      validateEmail,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
