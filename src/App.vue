<!--
 * @Author: FunJust
 * @Date: 2021-11-04 00:06:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-06 22:39:34
 * @Description:
-->
<template>
  <div calss="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <footer class="py-4 mt-6 text-center text-secondary bg-light">
      <small>
        <ul class="mb-0 list-inline">
          <li class="list-inline-item">© 2021 知识专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalHeader from '@/components/GlobalHeader.vue';
import { currentUser } from '@/store/testDatas';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
  },
  setup() {
    // const send = () => {
    //   console.log(window.parent);

    //   window.parent.postMessage({
    //     data: {
    //       info: 'success',
    //       data: '我是子页面的test！',
    //     },
    //   }, '*');
    // };
    return {
      currentUser,
    };
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
