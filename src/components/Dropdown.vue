<!--
 * @Author: FunJust
 * @Date: 2021-11-05 16:24:10
 * @Description:
-->
<template>
  <div class="dropdown" ref="dropdownRef">
    <a href="#" class="my-2 btn btn-outline-light dropdown-toggle" @click.prevent="toggleOpen">
      {{title}}
    </a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, ref, watch,
} from 'vue';
import useClickOutside from '@/hooks/useClickOutside';

export default defineComponent({
  name: 'Droopdown',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => { isOpen.value = !isOpen.value; };

    const dropdownRef = ref<null | HTMLElement>(null);
    const { isClickOut } = useClickOutside(dropdownRef);

    watch(isClickOut, () => {
      if (isOpen.value && isClickOut.value) {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      dropdownRef,
      toggleOpen,
    };
  },
});
</script>

<style lang="scss" scoped>

</style>
