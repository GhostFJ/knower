<!--
 * @Author: FunJust
 * @Date: 2021-11-04 19:29:05
 * @LastEditors:
 * @LastEditTime: 2021-11-04 19:29:06
 * @Description:
-->
<template>
  <div>
    <div v-for="col in list" :key="col.id">
      <img :src="col.avatar" :alt="col.title">
      <h5>{{col.title}}</h5>
      <p>{{col.description}}</p>
      <a href="#">进入专栏</a>
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true,
    },
  },
});
</script>

<style lang="scss" scoped>

</style>
