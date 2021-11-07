<!--
 * @Author: FunJust
 * @Date: 2021-11-05 17:01:30
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 23:47:44
 * @Description:
-->
<template>
  <li
    class="dropdown-option"
    :class="{'disabled': disabled}"
  >
    <slot></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DropdownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {

    };
  },
});
</script>

<style>
.dropdown-option.disabled *{
  color: #6c757d;
  pointer-events: none;
  background-color: transparent;
}
</style>
