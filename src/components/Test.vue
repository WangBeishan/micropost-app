<template>
  <div class="main-container">
    <h2 style="padding: 3%" >Users</h2>
    <div class="user-list" v-for="user in users" v-bind:key="user.id">
      <a :href="'/#/users/' + user.id"><img :src="require('../assets/HeadImg/' + user.email + '.jpg')"></a>
      <a :href="'/#/users/' + user.id">{{ user.username }}</a>
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
}
.split-line {
  position: relative;
  height: 1px;
  background-color: #d2dada;
  width: 15%;
  left: 41%;
  margin: 2%;
}
img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
</style>