<!--
 * @Author: FunJust
 * @Date: 2021-11-06 21:49:39
 * @Description:
-->
<template>
  <div class="mx-auto column-detail-page w-75">
    <div class="pb-4 mb-4 column-info row border-bottom align-items-center" v-if="column">
      <div class="text-center col-3">
        <img
          :src="column.avatar"
          :alt="column.title"
          class="border rounded-circle w-100">
      </div>
      <div class="col-9">
        <h4>{{column.title}}</h4>
        <p class="text-muted">{{column.description}}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
    <!-- <button
      v-if="!isLastPage"
      @click="loadMorePage"
      class="mx-auto mt-2 mb-5 btn btn-outline-primary btn-block w-25 load-more"
    >加载更多</button> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { testData, testPosts } from '@/store/testDatas';
import PostList from '@/components/PostList.vue';

export default defineComponent({
  name: 'Detail',
  components: { PostList },
  setup() {
    const route = useRoute();
    const curId = +route.params.id;
    const column = testData.find((c) => c.id === curId);

    const list = testPosts.filter((post) => post.columnId === curId);
    return {
      column,
      list,
    };
  },
});
</script>

<style scoped>

</style>
