<template>
  <div class="login-container">
    <!--
      el-form 表单组件
      每一个表单项都必须使用 el-form-item 包裹
    -->
    <div class="login-header">头条号</div>
    <el-form class="login-form" ref="form" :model="user">
      <!-- 手机号 -->
      <el-form-item>
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <!-- 验证码 -->
      <el-form-item>
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <!-- 协议 -->
      <el-form-item>
        <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: true
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      // 获取表单数据 （根据接口需求绑定数据）
      // const user = this.user

      // 表单验证

      // 验证通过，提交登录

      // 登录成功

      // 登录失败
    }
  }
}
</script>

<style scoped lang="less">
@login-headerBgc: #ccc;  // 背景颜色
@login-formBgc: #fff;  // 表单背景颜色
@h: 72px;  // 高度72px

.login-container {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ccc;

  .login-header {
    min-width: 300px;
    height: @h;
    line-height: @h;
    font-size: 22px;
    background: @login-formBgc;
    padding: 0 55px;
    text-align: center;
  }

  .login-form {
    background: @login-formBgc;
    padding: 20px 60px 30px 50px;
    min-width: 300px;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
