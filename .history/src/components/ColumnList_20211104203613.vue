<!--
 * @Author: FunJust
 * @Date: 2021-11-04 19:29:05
 * @LastEditors:
 * @LastEditTime: 2021-11-04 19:29:06
 * @Description:
-->
<template>
  <div class="row">
    <div v-for="col in list" :key="col.id" class="col-4">
      <div class="card">
        <img :src="col.avatar" :alt="col.title" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{col.title}}</h5>
          <p class="card-">{{col.description}}</p>
          <a href="#">进入专栏</a>
        </div>
      </div>
    </div>
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
