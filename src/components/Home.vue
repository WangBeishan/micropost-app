<template>
  <el-container>
    <!-- Header -->
    <el-header class="header-container">
      <a href="/#/home"><img src="../assets/logo.png" width="50px" /></a>
      <el-menu class="el-menu" mode="horizontal">
        <el-menu-item index="1"><el-link type="primary" :underline="false" href="/#/about">About</el-link></el-menu-item>
        <el-menu-item index="2"><el-link type="primary" :underline="false" href="/#/userList">User List</el-link></el-menu-item>
        <el-submenu index="3">
          <template slot="title">Personal Center</template>
          <el-menu-item index="3-1"><el-link type="primary" :underline="false" href="/#/profile">Profile</el-link>
          </el-menu-item>
          <el-menu-item index="3-2" @click="signOut">Sign Out</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <!-- Main -->
    <el-container>
        <router-view></router-view>
    </el-container>
    <!-- Footer -->
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
</template>

<script>
export default {
  methods: {
    signOut() {
      window.sessionStorage.removeItem("user");
      this.$message.success("登出成功");
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
}
.el-menu {
  position: absolute;
  right: 0;
}
</style>
