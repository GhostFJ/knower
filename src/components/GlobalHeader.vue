<!--
 * @Author: FunJust
 * @Date: 2021-11-04 23:36:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-06 22:34:18
 * @Description:
-->
<template>
    <nav class="px-4 mb-4 navbar navbar-dark bg-primary justify-content-between">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Knower专栏
        </a>
        <ul v-if="!user?.isLogin" class="mb-0 list-inline">
          <li class="list-inline-item"><a href="#" class="my-2 btn btn-outline-light">登陆</a></li>
          <li class="list-inline-item"><a href="#" class="my-2 btn btn-outline-light">注册</a></li>
        </ul>
        <ul v-else class="mb-0 list-inline">
          <li class="list-inline-item">
            <dropdown :title="`你好 ${user.name}`" >
              <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
              <dropdown-item disabled><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
              <dropdown-item><a href="#" class="dropdown-item">退出登陆</a></dropdown-item>
            </dropdown>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { UserProps } from '@/store/types';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    Dropdown,
    DropdownItem,
  },
});
</script>

<style lang="scss" scoped>

</style>
