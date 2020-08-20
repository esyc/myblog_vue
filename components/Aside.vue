<template>
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      background-color= #E9EEF3
      active-text-color="#6b6483"
      router>
      <el-menu-item index="/post">
        <i class="el-icon-menu"></i>
        <span slot="title">管理文章</span>
      </el-menu-item>
      <el-menu-item index="/post/add">
        <i class="el-icon-document"></i>
        <span slot="title">写文章</span>
      </el-menu-item>
      <el-menu-item index="/cate">
        <i class="el-icon-menu"></i>
        <span slot="title">分类管理</span>
      </el-menu-item>
      <el-menu-item index="/cate/add">
        <i class="el-icon-document"></i>
        <span slot="title">添加分类</span>
      </el-menu-item>
      <el-menu-item index="/talk">
        <i class="el-icon-document"></i>
      <span slot="title">管理留言板</span>
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-refresh-left"></i>
      <span slot="title">回到主页</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
</style>
