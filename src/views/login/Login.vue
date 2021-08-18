<template>
  <div class="wrapper">
    <img class="wrapper__img" src="@/assets/hanpi.jpeg" />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入用户名" v-model="username" />
    </div>
    <div class="wrapper__input">
      <input
        class="wrapper__input__content"
        placeholder="请输入密码"
        type="password"
        v-model="password"
        autocomplete="new-password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登陆</div>
    <!-- TODO -->
    <!-- <div class="wrapper__login-link" @click="handleRegisterClick">立即注册</div> -->
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '@/utils/request'
import Toast, { useToastEffect } from '@/components/Toast'
// VUE3 写法，同一功能模块状态，方法可以抽出
const useLoginEffect = showToast => {
  const router = useRouter()
  const data = reactive({
    username: '',
    password: ''
  })
  async function handleLogin() {
    try {
      // post中替换登录接口
      const result = await post('/* url */', {
        username: data.username,
        password: data.password
      })
      if (result.errno === 0) {
        // 登录成功写入localStorage
        localStorage.isLogin = true
        router.push({ name: 'Home' })
      } else {
        showToast('登陆失败')
      }
    } catch (e) {
      showToast('请求失败')
      // 没有登录接口可以放出，直接登录
      localStorage.isLogin = true
      router.push({ name: 'Home' })
    }
  }
  localStorage.isLogin = true
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}

export default {
  name: 'Login',
  components: { Toast },

  // 只注重主流程的执行，不同业务的函数拆分出去，业务逻辑清晰明了
  setup() {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    // TODO 增加注册页面
    // function handleRegisterClick() {
    //   router.push({ name: 'Register' })
    // }
    return {
      handleLogin,
      // handleRegisterClick,
      username,
      password,
      show,
      toastMessage
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/variables.scss';

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto 0.4rem;
    width: 0.66rem;
    height: 0.66rem;
  }
  &__input {
    height: 0.48rem;
    margin: 0 0.4rem 0.16rem 0.4rem;
    padding: 0 0.16rem;
    background: #f9f9f9;
    border: 0.01rem solid rgba($color: #000000, $alpha: 0.1);
    border-radius: 0.06rem;
    &__content {
      border: none;
      outline: none;
      line-height: 0.48rem;
      width: 100%;
      background: none;
      font-size: 0.14rem;
      color: $notice-font-color;
      &::placeholder {
        color: $notice-font-color;
      }
    }
  }
  &__login-button {
    margin: 0.32rem 0.4rem 0.16rem;
    line-height: 0.48rem;
    background: #0091ff;
    box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 145, 255, 0.32);
    border-radius: 0.04rem;
    color: white;
    font-size: 0.16rem;
    text-align: center;
  }

  &__login-link {
    font-size: 0.14rem;
    color: $notice-font-color;
    text-align: center;
  }
}
</style>
