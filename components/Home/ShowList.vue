<template>
  <el-card>
      <List :listData="listData"></List>
      <el-pagination @current-change= "handleCurrentChange" :current-page.sync= "info.pagenum" page-size="info.pagesize" background layout="prev, pager, next" :total= "total"></el-pagination>
  </el-card>
</template>

<script>
import List from '@/components/list.vue'
export default {
  data () {
    return {
      info: {
        pagenum: 1,
        pagesize: 5
      },
      listData: [],
      total: 20
    }
  },
  created () {
    var that = this
    this.$http.get('http://localhost:8889/post/get/num', { params: this.info }).then(function (response) {
      console.log(response)
      if (response.status !== 200) {
        return that.$message({
          showClose: true,
          message: '状态错误',
          type: 'error'
        })
      }
      that.listData = response.data.data
    },
    function () {})
  },
  components: {
    List
  },
  methods: {
    handleCurrentChange (newPage) {
      this.info.pagenum = newPage
      var that = this
      this.$http.get('http://localhost:8889/post/get/num', { params: this.info }).then(function (response) {
        console.log(response)
        if (response.status !== 200) {
          return that.$message({
            showClose: true,
            message: '状态错误',
            type: 'error'
          })
        }
        that.listData = response.data.data
      },
      function () {})
    }
  }
}
</script>

<style scoped>
.el-card {
  width: 1100px;
}
</style>
