<!--
 * @Author: FunJust
 * @Date: 2021-11-06 20:19:43
 * @Description:
-->
<template>
  <div class="home-page container-md">
    <section class="container py-5 text-center">
      <div class="row py-lg-5">
        <div class="mx-auto col-lg-6 col-md-8">
          <img src="../assets/callout.svg" alt="callout" class="w-50"/>
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p>
            <router-link to="/create" class="my-2 btn btn-primary">开始写文章</router-link>
          </p>
        </div>
      </div>
    </section>
    <h4 class="text-center font-weight-bold">发现精彩</h4>
    <column-list :list="list"></column-list>
    <!-- <button
      v-if="!isLastPage"
      @click="loadMorePage"
      class="mx-auto mt-2 mb-5 btn btn-outline-primary btn-block w-25 load-more"
    >加载更多</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnList from '@/components/ColumnList.vue';
import { testData } from '@/store/testDatas';

export default defineComponent({
  name: 'Home',
  components: {
    ColumnList,
  },
  setup() {
    return {
      list: testData,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
