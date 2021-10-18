<template>
  <div class="main_container">
      <h2>User List</h2>
      <div v-for="user in users">
        <el-link :href="'/#/users/' + user.id" target="_blank">
        <strong>{{ user.username }}</strong></el-link>
        <div class="split_line"></div>
      </div>
      <el-pagination
        layout="prev, pager, next"
        :total="users.length"
        hide-on-single-page
      ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: "",
    };
  },
  created() {
    this.getAllUser();
  },
  methods: {
    async getAllUser() {
      const { data: res } = await this.$http.get("getAllUser");
      this.users = res;
    },
  },
};
</script>

<style scoped>
.main_container {
  position: relative;
  padding-top: 3%;
  left: 42%;
  text-align: center;
}
.split_line {
  height: 1px;
  background-color: #dcdfe6;
  margin: 8%;
}
</style>
