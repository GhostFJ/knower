<!--
 * @Author: FunJust
 * @Date: 2021-11-04 23:36:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-04 23:53:21
 * @Description:
-->
<template>
    <nav class="px-4 mb-4 navbar navbar-dark bg-primary justify-content-between">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <!-- <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="align-text-top d-inline-block"> -->
        Knower专栏
      </a>
      <ul v-if="!user?.isLogin" class="mb-0 list-inline">
        <li class="list-inline-item"><a href="#" class="my-2 btn btn-outline-light">登陆</a></li>
        <li class="list-inline-item"><a href="#" class="my-2 btn btn-outline-light">注册</a></li>
      </ul>
      <ul v-else class="mb-0 list-inline">
        <li class="list-inline-item">
          <a href="#" class="my-2 btn btn-outline-light">
            Hello {{user.name}}
          </a>
        </li>
      </ul>
  </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface UserProps{
  isLogin: boolean;
  id?: number;
  name: string;

}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true,
    },
  },

});
</script>

<style lang="scss" scoped>

</style>
