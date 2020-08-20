<template>
  <el-card>
      <List :listData="listData"></List>
  </el-card>
</template>
<script>
import List from '@/components/list.vue'
export default {
  data () {
    return {
      listData: [],
      id: 0
    }
  },
  watch: {
    '$route' () {
      this.id = this.$route.query.id
      var that = this
      this.$http.get('http://localhost:8889/post/get/cate/' + this.id).then(function (response) {
        console.log(response)
        if (response.status !== 200) {
          return that.$message({
            showClose: true,
            message: '状态错误',
            type: 'error'
          })
        }
        that.listData = response.data.data
      }, function () {})
    }
  },
  created () {
    this.id = this.$route.query.id
    var that = this
    this.$http.get('http://localhost:8889/post/get/cate/' + this.id).then(function (response) {
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
  }
}
</script>

<style scoped>
.el-card {
  width: 1100px;
}
</style>
