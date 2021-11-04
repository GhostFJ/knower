<!--
 * @Author: FunJust
 * @Date: 2021-11-04 19:29:05
 * @LastEditors:
 * @LastEditTime: 2021-11-04 19:29:06
 * @Description:
-->
<template>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface ColumnProps {
  id: number;
  title: string,
  avatar
}

export default defineComponent({
  name: 'ColumnList',
  setup() {
  },
});
</script>

<style lang="scss" scoped>

</style>
