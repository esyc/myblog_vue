<template>
<el-container class="el-container">
    <el-header >
        <Header></Header>
    </el-header>
  <el-container>
    <el-aside width="195px">
      <Aside></Aside>
    </el-aside>
  <el-main>
      <router-view></router-view>
  </el-main>
  </el-container>
</el-container>
</template>

<script>
import Header from '../components/Header.vue'
import Aside from '../components/Aside.vue'
export default {
  components: { Header, Aside }
}
</script>
<style scoped>
  .el-header {
    background-color: #5857b6;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #7a9cc4;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container {
    height: 100%;
    min-height: 600px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
