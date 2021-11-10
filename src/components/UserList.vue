<template>
  <div class="main-container">
    <h2 style="padding: 5%" >Users</h2>
    <div v-for="user in users" v-bind:key="user.id">
      <a :href="'/#/users/' + user.id"><img :src="require('../assets/HeadImg/' + user.email + '.jpg')"></a>
      <a style="padding-left: 5%" :href="'/#/users/' + user.id">{{ user.username }}</a>
      <div class="split-line"></div>
    </div>
    <el-pagination
        small
        layout="prev, pager, next"
        :total="users.length">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ""
    }
  },
  created() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      const { data:res} = await this.$http("getAllUser");
      this.users = res;
    }
  }
}
</script>

<style scoped>
.main-container {
  position: relative;
  text-align: center;
  left: 42%;
}
.split-line {
  position: relative;
  height: 1px;
  background-color: #d2dada;
  width: 200px;
  margin: 10%;
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