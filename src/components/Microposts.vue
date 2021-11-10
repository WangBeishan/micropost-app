<template>
  <el-container>
    <el-aside class="aside-container">
      <div class="user-info">
        <a :href="'/#/users/' + user.userId"><img class="user-info--avatar" :src="require('../assets/HeadImg/' + user.email + '.jpg')"/></a>
        <strong style="position: relative; left: 24%; font-size: 24px"><a :href="'/#/users/' + user.userId">{{ user.username }}</a></strong>
      </div>
      <el-input
          type="textarea"
          :rows="5"
          v-model="postForm.content"
          class="text-box"
      >
      </el-input>
      <el-button class="btn" @click="post" type="primary" round>Post</el-button>
    </el-aside>
    <el-main class="main-container">
      <h2 style="padding-bottom: 3%">Microposts</h2>
      <div>
        <ul>
          <li v-for="content in contents" v-bind:key="content.userId">
            <div class="avatar-box">
              <a class="avatar" :href="'/#/users/' + content.userId"><img :src="require('../assets/HeadImg/' + content.email + '.jpg')"></a>
              <p class="name">{{ content.username }}</p>
            </div>
            <div class="content-box">
              <p>{{ content.content }}</p>
              <small>{{ timeFormat(content.crtTime) }}</small>
            </div>
            <div class="split-line"></div>
          </li>
        </ul>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userId: "",
        email: "",
        username: ""
      },
      postForm: {
        userId: "",
        content: ""
      },
      contents: "",
    }
  },
  created() {
    this.initUserInfo();
    console.log(this.user);
    this.getContents();
  },
  methods: {
    async initUserInfo() {
      let user = window.sessionStorage.getItem("user")
      this.user.userId = JSON.parse(user).id;
      this.user.email = JSON.parse(user).email;
      this.user.username = JSON.parse(user).username;
    },
    async post() {
      this.postForm.userId = JSON.parse(window.sessionStorage.getItem("user")).id;
      const {data:res} = await this.$http.post("post", this.postForm);
      if (res.flag == "success") {
        this.$message.success("Posted!");
        await this.getContents();
        this.postForm.content = "";
        return;
      }
      this.$message.error("Error!");
    },
    async getContents() {
      const {data:res} = await this.$http.get("getContent");
      this.contents = res;
    },
    timeFormat(time =+ new Date()) {
      const date = new Date(time + 16 * 3600 * 1000);
      return date.toJSON().substr(5, 14).replace('T', ' ');
    }
  }
};
</script>

<style scoped>
.main-container {
  position: relative;
}
.aside-container {
  position: relative;
  width: 25%;
  height: auto;
  background-color: #fff;
}
.user-info {
  position: relative;
  padding: 30%;
}
.user-info--avatar {
  height: 100px;
  width: 100px;
  border: 1px solid #adafb4;
  box-shadow: 0 0 5px #adafb4;
}
.text-box {
  position: relative;
  padding-bottom: 2%;
}
.btn {
  position: relative;
  left: 70%;
}
.avatar-box {
  position: relative;
}
.name {
  position: relative;
  left: 1%;
}
.content-box {
  position: relative;
  padding-left: 8%;
}
.split-line {
  height: 1px;
  background-color: #d2dada;
  margin: 3%;
}
ul {
  list-style: none;
}
img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
a {
  text-decoration: none;
}
</style>