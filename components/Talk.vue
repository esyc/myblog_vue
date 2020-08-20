<template>
  <el-card>
    <span>
      <el-table :data="talklist" style="width: 100%">
        <el-table-column label="#" type="index"></el-table-column>
        <el-table-column label="留言内容" prop="msg"></el-table-column>
      </el-table>
    </span>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      talklist: []
    }
  },
  created () {
    var that = this
    this.$http.get('http://localhost:8889/other/get/msg').then(
      function (response) {
        if (response.status !== 200) {
          return that.$message({
            showClose: true,
            message: '状态错误',
            type: 'error'
          })
        }
        if (response.data.code !== 200) {
          return that.$message({
            showClose: true,
            message: response.data.message,
            type: 'error'
          })
        }
        if (response.data.code === 200) {
          console.log(response)
          that.talklist = response.data.data
          return that.$message({
            showClose: true,
            message: response.data.message,
            type: 'success'
          })
        }
      },
      function () {}
    )
  }
}
</script>

<style>
</style>
