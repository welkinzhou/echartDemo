<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  // 弹出提示内容
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })

  const showToast = message => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 1000)
  }

  const { show, toastMessage } = toRefs(toastData)
  return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba($color: #000000, $alpha: 0.35);
  padding: 0.1rem;
  border-radius: 0.05rem;
  color: #fff;
}
</style>
