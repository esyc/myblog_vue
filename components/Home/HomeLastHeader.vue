<template>
<body>
<img src="@/static/下载.jpg" class="round_icon"  alt="">
<el-button type="text" class="bt1" icon="el-icon-reading" @click="showpost">{{this.posttarget}}</el-button>
<el-button type="text" class="bt2" icon="el-icon-view">{{this.peopletarget}}</el-button>
<el-badge :value="zan" class="item">
<el-button  type="text" class="bt3" icon="el-icon-thumb" @click="add">这里点赞</el-button>
</el-badge>
</body>
</template>
<script>
export default {
  data () {
    return {
      zan: 0,
      ifzan: false,
      posttarget: '文章数量:',
      peopletarget: '访问人数:'
    }
  },
  created () {
    var that = this
    this.$http.get('http://localhost:8889/post/get/number').then(function (res) {
      that.posttarget = that.posttarget + res.data.num
    }, function () {})
    this.$http.get('http://localhost:8889/other/get/zan').then(function (res) {
      that.zan = res.data.data.zan
    }, function () {})
    this.$http.post('http://localhost:8889/other/add/peo').then(function (res) {
    }, function () {})
    this.$http.get('http://localhost:8889/other/get/peo').then(function (res) {
      that.peopletarget = that.peopletarget + res.data.data.people
    }, function () {})
  },
  methods: {
    showpost () {
      this.$router.push('/')
    },
    add () {
      if (this.iszan) {
        this.$message({
          showClose: true,
          message: '您已经点过赞了',
          type: 'info'
        })
        return
      }
      this.zan++
      this.iszan = true
      this.$http.post('http://localhost:8889/other/add/zan').then(function () {}, function () {})
      this.$message({
        showClose: true,
        message: '感谢点赞',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
.round_icon{
  width: 175px;
  height: 175px;
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: 150px;
  margin-top: -120px;
  border-radius: 90px;
  background: linear-gradient(225deg, #d4d6d6, #fdffff);
}
.el-button {
  height: 37px;
  width: 100px;
  font-weight:bolder;
  font-size: 12px;
  font-family: "microsoft yahei";
  background-color:rgb(252, 252, 252);
}
.bt1{
    float: left;
}
.bt2{

  margin-right: 250px;
}
</style>
