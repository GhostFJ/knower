<!--
 * @Author: FunJust
 * @Date: 2021-11-04 00:06:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 20:27:25
 * @Description:
-->
<template>
  <div calss="container">
    <GlobalHeader :user="currentUser"></GlobalHeader>
    <ColumnList :list="list" v-if="false"></ColumnList>
    <Form></Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';
import Form from './components/Form.vue';

const currentUser: UserProps = {
  isLogin: true,
  name: 'Hack',
};

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    // avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
  },
  {
    id: 3,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
  },
  {
    id: 4,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100',
  },
];

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    Form,
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
      list: testData,
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
