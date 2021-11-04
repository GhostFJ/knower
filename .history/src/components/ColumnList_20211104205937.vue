<!--
 * @Author: FunJust
 * @Date: 2021-11-04 19:29:05
 * @LastEditors:
 * @LastEditTime: 2021-11-04 19:29:06
 * @Description:
-->
<template>
  <div class="row">
    <div v-for="col in list" :key="col.id" class="col-4 mb-4">
      <div class="card shadow-sm">
        <div class="card-body text-center">
          <img
            :src="col.avatar"
            :alt="col.title"
            class="rounded-circle border border-light w-25 my-3"
          >
          <h5 class="card-title">{{col.title}}</h5>
          <p class="card-text text-left">{{col.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
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
  avatar?: string;
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
    const colList = computed(() => {
      return props.list?.map
    })
  }
});
</script>

<style lang="scss" scoped>

</style>
