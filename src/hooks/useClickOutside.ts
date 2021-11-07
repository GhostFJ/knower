/*
 * @Author: FunJust
 * @Date: 2021-11-05 19:31:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-05 23:47:55
 * @Description:
 */
import {
  ref, onMounted, onUnmounted, Ref,
} from 'vue';

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOut = ref(false);

  const handler = (e: MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickOut.value = false;
      } else {
        isClickOut.value = true;
      }
    }
  };

  onMounted(() => {
    document.addEventListener('click', handler);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });

  return {
    isClickOut,
  };
};

export default useClickOutside;
