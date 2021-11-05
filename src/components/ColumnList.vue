<!--
 * @Author: FunJust
 * @Date: 2021-11-04 19:29:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 16:39:33
 * @Description:
-->
<template>
  <div class="row">
    <div v-for="col in colList" :key="col.id" class="mb-4 col-4">
      <div class="shadow-sm card">
        <div class="text-center card-body">
          <img
            :src="col.avatar"
            :alt="col.title"
            class="my-3 border rounded-circle border-light w-25"
          />
          <h5 class="card-title">{{col.title}}</h5>
          <p class="text-left card-text">{{col.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    const colList = computed(() => {
      if (!props.list) return []; // airbnb的报错，因为这里props.list的定义是  ColumnProps[] | undefined
      return props.list.map((item) => {
        if (!item.avatar) {
          item.avatar = require('@/assets/column.jpg');
        }
        return item;
      });
    });

    return {
      colList,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
