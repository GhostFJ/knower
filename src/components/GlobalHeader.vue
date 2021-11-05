<!--
 * @Author: FunJust
 * @Date: 2021-11-04 23:36:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 19:19:21
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
            <Dropdown :title="`你好 ${user.name}`" >
              <DropdownItem><a href="#" class="dropdown-item">新建文章</a></DropdownItem>
              <DropdownItem disabled><a href="#" class="dropdown-item">编辑资料</a></DropdownItem>
              <DropdownItem><a href="#" class="dropdown-item">退出登陆</a></DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';

export interface UserProps{
  isLogin: boolean;
  id?: number;
  name: string;
}

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
