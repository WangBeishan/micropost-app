<template>
  <el-container>
    <!-- Header -->
    <el-header class="header-container">
      <a href="/"><img src="../assets/logo.png" width="50px" /></a>
      <el-menu class="el-menu" mode="horizontal">
        <el-menu-item index="1"><a href="/#/about">About</a></el-menu-item>
        <el-menu-item index="2"><a href="/#/help">Help</a></el-menu-item>
        <el-menu-item index="3"><a href="/#/userList">User List</a></el-menu-item>
        <el-submenu index="4">
          <template slot="title">Personal Center</template>
          <el-menu-item index="4-1">Profile</el-menu-item>
          <el-menu-item index="4-2">Sign Out</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <!-- Main -->
    <el-container>
        <router-view></router-view>
    </el-container>
    <!-- Footer -->
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {};
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
