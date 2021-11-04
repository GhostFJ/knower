<!--
 * @Author: FunJust
 * @Date: 2021-11-04 19:29:05
 * @LastEditors:
 * @LastEditTime: 2021-11-04 19:29:06
 * @Description:
-->
<template>
  <ul>
    <li v-for="col in list" :key="col.id">
      <img :src="col.avatar" :alt="col.title">
      <h5></h5>
    </li>
  </ul>
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
  setup(props) {

  },
});
</script>

<style lang="scss" scoped>

</style>
