<template>
  <div class="login">
    <input type="" name="" placeholder="用户名">
    <input type="" name="" placeholder="密码">
    <div>
      <el-button>确定</el-button>
      <el-button type="primary">取消</el-button>
    </div>
    <div>
      没有账号？前往<el-button type="text">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  flex-direction: column;
  input {
    width: 50%;
    padding: .5rem;
    margin: .5rem;
  }
  div {
    padding: .5rem;
    margin: 1rem;
  }
}
</style>
