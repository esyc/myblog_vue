<template>
<body>
<el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color=rgb(13,38,51)
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <el-menu-item index="/all">
        <i class="el-icon-menu"></i>
        <span slot="title">全部文章</span>
      </el-menu-item>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>文章分类</span>
        </template>
        <el-menu-item-group index="1" v-for="(item,i) in CateList" :key="i">
          <el-menu-item v-bind:index="'/bycate?id='+item.id">{{item.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="aboutme">
        <i class="el-icon-s-custom"></i>
        <span slot="title">关于我</span>
      </el-menu-item>
      <el-menu-item index="friend">
        <i class="el-icon-link"></i>
        <span slot="title">友情链接</span>
      </el-menu-item>
    </el-menu>
</body>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: true,
      CateList: []
    }
  },
  created () {
    this.GetCateList()
  },
  methods: {
    GetCateList () {
      var that = this
      this.$http.get('http://localhost:8889/cate/get').then(function (response) {
        if (response.status !== 200) {
          return that.$message({
            showClose: true,
            message: '状态错误',
            type: 'error'
          })
        }
        that.CateList = response.data.data
      },
      function () {})
    }
  }
}
</script>

<style scope>
</style>
