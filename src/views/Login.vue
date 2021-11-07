<!--
 * @Author: FunJust
 * @Date: 2021-11-05 20:26:38
 * @Description:
-->
<template>
  <validate-form @form-submit="onFormSubmit">
    <div class="mb-3">
      <label class="form-label">邮箱地址</label>
      <validate-input
        type="text" placeholder="请输入邮箱地址"
        :rules="emailRules" v-model="emailVal">
      </validate-input>
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <validate-input
        type="password" placeholder="请输入密码"
        :rules="pwdRules" v-model="pwdVal">
      </validate-input>
    </div>
    <!-- <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">记住密码</label>
    </div> -->
    <template #submit>
      <span class="btn btn-danger">Submit</span>
    </template>
  </validate-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import ValidateInput from '../components/ValidateInput.vue';
import ValidateForm from '../components/ValidateForm.vue';
import { RulesProp } from '@/store/types';

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const router = useRouter();

    const emailVal = ref('');
    const emailRules: RulesProp = [
      { type: 'required', message: '邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的邮箱格式' },
    ];

    const pwdVal = ref(undefined);
    const pwdRules: RulesProp = [
      { type: 'required', message: '密码不能为空' },
      { type: 'range', message: '密码不能少于六位' },
    ];

    const onFormSubmit = (res: boolean) => {
      if (res) { router.push('/home'); }
    };

    return {
      emailVal,
      emailRules,
      pwdVal,
      pwdRules,
      onFormSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
