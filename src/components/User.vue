<template>
  <div class="main_container">
    <el-card shadow="always" class="card_container">
      <div slot="header" class="header_box">
        <strong>{{ this.user.username }}</strong>
      </div>
      <!-- card body -->
      <div v-for="content in contents" class="content_container" v-bind:key="content.userId">
        <aside class="avatar_box">
          <img :src="require('../assets/HeadImg/' + user.email + '.jpg')"/>
        </aside>
        <main class="content_box">
          <strong>{{ content.username }}</strong>
          <p>{{ content.content }}</p>
        </main>
        <div class="split_line"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        username: "",
        email: "",
      },
      contents: "",
    };
  },
  created() {
    this.getUser();
    this.getContent();
  },
  methods: {
    async getUser() {
      this.user.id = this.$route.params.id;
      const { data: res } = await this.$http.get("/users/" + this.user.id);
      this.user.username = res.username;
      this.user.email = res.email;
    },
    async getContent() {
      const { data: res } = await this.$http.get("/contentByUserId/" + this.user.id);
      this.contents = res;
    },
  },
};
</script>

<style scoped>
.main_container {
  position: absolute;
  padding-top: 2%;
  padding-bottom: 2%;
  left: 20%;
}
.header_box {
  text-align: center;
  font-size: 20px;
  padding: 1%;
}
.card_container {
  width: 300%;
  height: 100%;
}
.split_line {
  height: 1px;
  background-color: #dcdfe6;
  margin: 5%;
}
.content_container {
    position: relative;
    flex: 1 1 auto;
}
.avatar_box {
    position: relative;
    width: 50px;
    height: 50px;
    border: 1px solid #eee;
    border-radius: 50%;
    box-shadow: 0 0 2px #ddd;
    left: 1%;
}
img {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #eee;
}
.content_box {
    position: relative;
    left: 5%;
    top: -30%;
    flex: 1 1 auto;
}
</style>
