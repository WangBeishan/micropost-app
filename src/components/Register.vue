<template>
  <div class="main_container">
    <div class="register_box">
      <el-form
        :model="registerForm"
        ref="registerFormRef"
        :rules="registerRules"
        label-width="90px"
        :inline="false"
        size="normal"
        class="register_form"
      >
        <el-form-item label="Email" prop="email">
          <el-input v-model="registerForm.email" prop="email" @blur="checkEmail"></el-input>
        </el-form-item>
        <el-form-item label="Username" prop="username">
          <el-input v-model="registerForm.username" prop="username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="registerForm.password"
            prop="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="register">立即註冊</el-button>
          <el-button @click="cancelRegister">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        email: "",
        username: "",
        password: "",
      },
      registerRules: {
        // 郵箱效驗
        email: [
          { required: true, message: "請輸入郵箱", trigger: "blur" },
          { min: 6, max: 64, message: "長度不大與64", trigger: "blur" },
        ],
        // 用戶名效驗
        username: [
          { required: true, message: "請輸入用戶名", trigger: "blur" },
          { min: 4, max: 64, message: "長度不大與64", trigger: "blur" },
        ],
        // 密碼效驗
        password: [
          { required: true, message: "請輸入密碼", trigger: "blue" },
          { min: 6, max: 24, message: "長度不能小於6", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
     async checkEmail() {
         const {data:res} = await this.$http.post("getUserByEmail", this.registerForm);
         if (res === this.registerForm.email) {
             this.$message.error("郵箱已被註冊");
         }
         return;
      },
    async register() {
        const {data:postRes} = await this.$http.post("register", this.registerForm);
        console.log("post: " + postRes);
        if (postRes == "success") {
            setTimeout(() => {
                this.$message.success("註冊成功，即將跳轉到登錄頁");
                this.$router.push("login");
            }, 2000);
        } else {
            this.$message.error("註冊失敗");
            return;
        }

    },
    cancelRegister() {
      this.$router.push("/");
    }
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
.register_box {
  position: absolute;
  width: 450px;
  height: 300px;
  background-color: #f2f6fc;
  top: 30%;
  left: 30%;
  border-radius: 5px;
  box-shadow: 0 0 2px #f2f6fc;
}
.register_form {
  position: absolute;
  bottom: 22%;
  width: 100%;
  padding: 0 10px;
  padding-right: 30px;
  box-sizing: border-box;
}
.btns {
  position: absolute;
  left: 15%;
}
</style>
