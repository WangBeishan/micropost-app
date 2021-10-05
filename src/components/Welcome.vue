<template>
  <div class="welcome_container">
    <div>
      <h1>歡迎來到這裏</h1>
      <h3>這是一個測試用項目，類似weibo的一個Web應用</h3>
      <h3>在這裏可以進行有限的發言（因爲衆所周知的原因）</h3>
      <h3 style="margin-bottom: 30px">期待您的有趣言論 :)</h3>
      <h4>
        本項目由 <span><a href="/#/about">WBS</a></span> 邊學邊練跑起來的，歡迎體驗測試
      </h4>
      <div class="button_box">
        <el-button style="margin-bottom: 10px" type="primary" round @click="login"
          >登錄</el-button
        ><br />
        <small>還沒有帳號? <a href="/#/register">註冊一個</a></small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 跳轉到用戶登錄頁
    login() {
      this.$router.push("login");
    },
    // 跳轉到註冊頁面
    register() {
      this.$router.push("register");
    }
  },
};
</script>

<style scoped>
.welcome_container {
  text-align: center;
  padding-top: 10%;
}
.button_box {
  margin-top: 70px;
}
</style>
