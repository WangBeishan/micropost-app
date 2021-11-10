<template>
  <el-card class="box-card">
    <div slot="header" class="header-name">
      <span>{{ user.username }}</span>
    </div>
    <div v-for="content in contents">
      <div class="avatar-box">
        <a class="avatar" :href="'/#/users/' + content.userId"><img :src="require('../assets/HeadImg/' + content.email + '.jpg')"></a>
        <p class="name">{{ content.username }}</p>
      </div>
      <div class="content-box">
        <p>{{ content.content }}</p>
        <small>{{ timeFormat(content.crtTime) }}</small>
      </div>
      <div class="split-line"></div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        username: "",
        email: ""
      },
      contents: ""
    }
  },
  created() {
    this.getUser();
    this.getContents();
  },
  methods: {
    async getUser() {
      this.user.id = this.$route.params.id;
      const { data:res } = await this.$http.get('/users/' + this.user.id);
      this.user.username = res.username;
      this.user.email = res.email;
    },
    async getContents() {
      const { data:res } = await this.$http.get("/contentByUserId/" + this.user.id);
      this.contents = res;
    },
    timeFormat(time =+ new Date()) {
      const date = new Date(time + 16 * 3600 * 1000);
      return date.toJSON().substr(5, 14).replace('T', ' ');
    }
  }
}
</script>

<style scoped>
.box-card {
  position: relative;
  transform: translateY(2%);
  width: 50%;
  left: 25%;
}
.header-name {
  position: relative;
  text-align: center;
  font-size: xx-large;
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
img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
a {
  text-decoration: none;
}
</style>