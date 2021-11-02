<template>
  <div class="main_container">
    <h2>關於我：</h2>
    <h4>正在學習編程的小小白</h4>
    <h4>喜歡電子產品，迫於窮，實際體驗的很少</h4>
    <i class="el-icon-star-on"
      ><a href="https://github.com/WangBeishan?tab=repositories">Github</a></i>
    <div class="split_line"></div>
    <h2>關於這個項目：</h2>
    <h4>
      這個項目是對
      <a href="https://liuyandong.com/">棟哥</a>
      項目拙劣的模仿，由於衆所周知的原因，該項目地址被封。
    </h4>
    <h4>這是一個練習用項目測試用，Bug很多，未實現的功能很多，正在一步一步完善。</h4>
    <h3>計劃實現的功能：</h3>
    <ul>
      <li><i class="el-icon-success"></i> 密碼加密</li>
      <li><i class="el-icon-success"></i> 郵箱驗證註冊</li>
      <li><i class="el-icon-success"></i> 隨機用戶頭像</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main_container {
  position: relative;
  text-align: center;
  padding: 5%;
  left: 20%;
}
.split_line {
  height: 1px;
  background-color: #dcdfe6;
  margin: 8%;
}
li {
  position: relative;
  text-align: left;
  left: 38%;
}
</style>
