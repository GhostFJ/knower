<!--
 * @Author: FunJust
 * @Date: 2021-11-06 23:08:49
 * @Description:
-->
<template>
  <div class="post-list">
    <article v-for="post in list" :key="post.id" class="mb-3 shadow-sm card">
      <div class="card-body">
        <h4>
          <!-- <router-link :to="`/posts/${post.id}`">{{ post.title }}</router-link> -->
          {{post.title}}
        </h4>
        <div class="my-3 row align-items-center">
          <div v-if="post.image" class="col-4">
            <img :src="post.image" :alt="post.title" class="rounded-lg w-100">
          </div>
          <p :class="{'col-8': post.image}" class="text-muted">{{ post.content }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import { PostProps } from '../store/types';
// import { generateFitUrl } from '../libs/helper';

export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>,
    },
  },
  setup(props) {
    // const posts = computed(() => props.list.map((post) => {
    //   generateFitUrl(post.image as ImageProps, 200, 110, ['m_fill']);
    //   return post;
    // }));

    return {
      // posts,
    };
  },
});
</script>

<style scoped>
.rounded-lg {
  border-radius: 0.3rem !important;
}
.post-list h4 a {
  text-decoration: none;
  color:#1a1a1a;
}
.post-list h4 a:hover {
  color:#0d6efd;
}
</style>
