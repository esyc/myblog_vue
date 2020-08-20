<template>
<el-container>
  <el-header class="header1" height= "48px" background-color= "#f8f8f8" color = "#f8f8f8" ><HomeHeader></HomeHeader></el-header>
  <el-header class="header2" height= "300px"><HomeMidHeader></HomeMidHeader></el-header>
  <el-header class="header3" height= "40px"><HomeLastHeader></HomeLastHeader></el-header>
   <el-container class ="c1">
    <el-aside width="210px"><HomeAside></HomeAside></el-aside>
  <el-main style="width: 1480px; min-height:600px">
      <router-view></router-view>
  </el-main>
  </el-container>
</el-container>
</template>
<script>
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HomeMidHeader from '@/components/Home/HomeMidHeader.vue'
import HomeAside from '@/components/Home/HomeAside.vue'
import HomeLastHeader from '@/components/Home/HomeLastHeader.vue'
export default {
  components: { HomeHeader, HomeMidHeader, HomeAside, HomeLastHeader }
}
</script>
<style scoped>
  .header3 {
background: rgb(255,255,255);
    text-align: center;
    padding: 0;
    border:1px solid #000
  }
  .header2 {
    text-align: center;
    padding: 0;
  }
  .el-aside {
    text-align: center;
    line-height: 200px;

  }
  .el-main {
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .c1 {
background: rgb(70,210,252);
background: radial-gradient(circle, rgba(70,210,252,1) 0%, rgba(1,2,8,1) 100%);
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
