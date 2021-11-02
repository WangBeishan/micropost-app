<template>
  <div class="container">
    <aside class="side_bar">
      <div class="avatar_box">
        <img src="../assets/logo.png" width="80px" height="80px" />
        <strong class="name">{{ this.user.username }}</strong>
      </div>
      <div class="post_box">
        <form :model="postForm">
          <textarea
            rows="6"
            cols="40"
            prop="content"
            v-model="postForm.content"
          ></textarea>
          <input class="btn" type="button" name="Post" @click="post" value="Post" />
        </form>
      </div>
    </aside>
    <div class="content_container">
      <h2>Microposts</h2>
      <div class="content">
        <ul>
          <li v-for="content in contents" v-bind:key="content.userId">
            <div>
              <a :href="'/#/users/' + content.userId" class="headImg_box"
                ><img class="head_img" :src="require('../assets/HeadImg/' + content.email + '.jpg')" width="50px" height="50px"
              /></a>
              <strong>{{ content.username }}</strong>
              <p>{{ content.content }}</p>
              <small class="date_box">{{ time(content.crtTime) }}</small>
              <div class="shadow_line"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
      },
      postForm: {
        userId: "",
        content: "",
      },
      contents: "",
    };
  },
  created() {
    let data = window.sessionStorage.getItem("user");
    this.user.username = JSON.parse(data).username;
    console.log(this.user.username);
    this.getContent();
  },
  methods: {
    async post() {
      if (this.postForm.content === "") {
        this.$message.error("內容爲空");
        return;
      }
      this.postForm.userId = JSON.parse(window.sessionStorage.getItem("user")).id;
      console.log(this.postForm.userId);
      const { data: res } = await this.$http.post("post", this.postForm);
      if (res.flag == "success") {
        this.$message.success("發佈成功");
        this.getContent();
        this.postForm.content = "";
        return;
      }
      this.$message.error("發佈失敗");
    },
    async getContent() {
      const { data: res } = await this.$http.get("/getContent");
      this.contents = res;
    },
    time(time =+ new Date()) {
      var date = new Date(time + 16 * 3600 * 1000);
      return date.toJSON().substr(5, 14).replace('T', ' ');
    }
  },
};
</script>

<style scoped>

.headImg_box {
    position: relative;
    width: 50px;
    height: 50px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 2px #ddd;
}
.head_img {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #eee;
}
.post_time {
  position: relative;
  left: 60%;
}
.btn {
  position: relative;
  padding: 3%;
  left: 75%;
  margin: 2%;
}
.post_box {
  position: relative;
  padding-left: 6%;
  padding-top: 70%;
}
.shadow_line {
  width: 700px;
  height: 1px;
  background-color: #dcdfe6;
  margin-top: 2%;
}
h2 {
  padding: 2em;
}
ul {
  list-style-type: none;
}
li {
  padding: 1em;
}

.side_bar {
  width: 30%;
  height: 100%;
  position: absolute;
  background-color: #2b4b6b;
}
.content_container {
  width: 70%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: #fff;
}
.avatar_box {
  height: 50%;
  margin: 10px;
  position: absolute;
  left: 10%;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-flex;
  display: flex;
}

.name {
  position: relative;
  padding: 15%;
  bottom: 7%;
}
</style>
