<template>
  <div class="main_container">
    <div class="registerForm_container">
      <el-card class="register_box">
        <el-form
          :model="registerForm"
          :rules="registerRules"
          label-width="90px"
        >
          <el-form-item label="Username" prop="username">
            <el-input v-model="registerForm.username"></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input v-model="registerForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item label="Verify Code" prop="verifyCode">
            <el-input
              v-model="registerForm.verifyCode"
              style="width: 150px"
            ></el-input>
            <el-button
              type="info"
              @click="sendVerifyCode"
              style="margin-left: 2%"
              >Send Code</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register">Register</el-button>
            <el-button type="default" @click="cancel">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: "wbs",
        email: "wangbeishan9527@gmail.com",
        password: "",
        verifyCode: "",
      },
      code: "",
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
    async sendVerifyCode() {
      const { data: res } = await this.$http.post("sendVC", this.registerForm);
      this.code = res;
    },
    async register() {
      const { data: res } = await this.$http.post(
        "register",
        this.registerForm
      );
      if (this.code != this.registerForm.verifyCode) {
        this.$message.error("Verify code error, Please try again");
        return;
      } else if (res == "success") {
        setTimeout(() => {
          this.$message.success("Success, Will jump to the login page.");
          this.$router.push("login");
        }, 2000);
      } else {
        this.$message.error("Error");
        return;
      }
    },
    cancel() {
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
  background-color: #2b2b2b;
}
.registerForm_container {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
}
.register_box {
  padding-top: 3%;
  padding-right: 3%;
  height: 330px;
  width: 400px;
  margin-left: 2%;
}
</style>