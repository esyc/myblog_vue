<template>
<div color = "black">
<el-button type="text" icon="el-icon-s-home" @click="backtohome" style=" margin-left:80px; color: rgb(43, 39, 39);font-size:14px;font-weight:bold;font-family: 微软雅黑;">Home</el-button>
<el-button size="medium" type="text" icon="el-icon-s-comment" @click="show" style=" margin-left:82px; color: rgb(43, 39, 39);font-size:14px;font-weight:bold;font-family: 微软雅黑;">Message</el-button>
<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  center>
  <span>你的意见或想说的话:</span>
  <el-input v-model="data.msg"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="sendmessage">确 定</el-button>
  </span>
</el-dialog>
<el-button size="medium" @click="AddFavorite('Crcblog','http://www.caoruichen.cn')" icon="el-icon-star-on" type="text" style=" margin-left:80px; color: rgb(43, 39, 39);font-size:14px;font-weight:bold;font-family: 微软雅黑;">Favorite</el-button>
<span class="font">CRC's blog</span>
<el-button circle size="medium"  icon="el-icon-setting"  style=" margin-left:450px;" @click="gotologin"></el-button>
</div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: false,
      data: {
        msg: ''
      }
    }
  },
  methods: {
    backtohome () {
      this.$router.push('/')
    },
    show () {
      this.dialogVisible = true
    },
    sendmessage () {
      var that = this
      this.$http.post('http://localhost:8889/other/add/msg', this.data).then(function (response) {
        console.log(response)
        if (response.status !== 200) {
          return that.$message({
            showClose: true,
            message: '状态错误',
            type: 'error'
          })
        }
      }, function () {})
      this.$message({
        showClose: true,
        message: '发送成功',
        type: 'success'
      })
      this.dialogVisible = false
    },
    AddFavorite (title, url) {
      try {
        window.external.addFavorite(url, title)
      } catch (e) {
        try {
          window.sidebar.addPanel(title, url, '')
        } catch (e) {
          alert('抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加')
        }
      }
    },
    gotologin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scpoed>
.el-icon-s-home {
    color: black;
    font-size: 20px;
}
.el-icon-star-on {
    color: black;
    font-size: 20px;
}
.el-icon-s-comment {
    color: black;
    font-size: 20px;
}
.el-icon-setting {
    color: rgb(26, 25, 25);
    font-size: 20px;
}
.el-button :hover {
    cursor: pointer;
    color: rgb(91, 119, 148);
}
.el-button :active {
    color: rgb(113, 162, 177);
}
.font {
    font-weight:bolder;
    font-size: 25px;
    font-family: "microsoft yahei";
    color: #383e91;
    margin-left:200px
}
</style>
