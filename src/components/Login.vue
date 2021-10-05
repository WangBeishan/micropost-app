<template>
  <div class="main_container">
    <div class="login_box">
      <div class="avatar_box">
        <a href="/"><img class="avatar_img" src="../assets/logo.png" /></a>
      </div>
      <el-form
        :model="loginForm"
        ref="loginFormRef"
        :rules="loginRules"
        label-width="90px"
        :inline="false"
        size="normal"
        class="login_form"
      >
        <el-form-item label="Email" prop="email">
          <el-input v-model="loginForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="loginForm.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登錄</el-button>
          <el-button @click="CancelLogin">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "test@email.com",
        password: "",
      },
      loginRules: {
        // 郵箱效驗
        email: [
            { required: true, message: "請輸入郵箱", trigger: 'blur'},
            { min: 6, max: 64, message: "長度不大與64", trigger: 'blur'}
        ],
        // 密碼效驗
        password: [
            { required: true, message: "請輸入密碼", trigger: 'blue'},
            { min: 6, max: 24, message: "長度不能小於6", trigger: 'blur'}
        ],
      },
    };
  },
  methods: {
    // 用戶登錄
    login() {
        this.$refs.loginFormRef.validate(async valid => {
            if (!valid) {
                return;
            }
            const {data:res} = await this.$http.post("login", this.loginForm);
            if (res.flag == "ok") {
                this.$message.success("登錄成功");
                window.sessionStorage.setItem("user", JSON.stringify(res.user));
                this.$router.push("home");
            } else {
                this.$message.error("登錄失敗，請重新登錄");
            }
        });
    },
    // 取消登錄操作，跳轉到「welcome」頁
    CancelLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.main_container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2b4b6b;
}
.login_box {
  position: absolute;
  width: 450px;
  height: 300px;
  background-color: #f2f6fc;
  top: 30%;
  left: 30%;
  border-radius: 5px;
  box-shadow: 0 0 2px #f2f6fc;
}
.login_form {
  position: absolute;
  bottom: 23%;
  width: 100%;
  padding: 0 15px;
  padding-right: 25px;
  box-sizing: border-box;
}
.btns {
  position: absolute;
  left: 16%;
}
.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #f2f6fc;
  border-radius: 50%;
  box-shadow: 0 0 8px #2b4b6b;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #f2f6fc;
}
</style>
