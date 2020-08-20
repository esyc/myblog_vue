<template>
<el-card>
  <el-form>
            <el-form-item label="文章标题:">
              <h1 class="titlefont">{{this.Post.title}}</h1>
            </el-form-item>
            <el-form-item label="文章类型:">
             <h4 class="catefont">{{this.Cate.name}}</h4>
            </el-form-item>
            <el-form-item label="文章内容">
<mavon-editor
class="md"
:value="this.Post.content"
:subfield = "false"
:defaultOpen = "'preview'"
:toolbarsFlag = "false"
:editable="false"
:scrollStyle="true"
:ishljs = "true"
></mavon-editor>
  </el-form-item>
  <el-form-item label="发表时间:">
  <h4>{{this.Post.time}}</h4>
  </el-form-item>
  </el-form>
</el-card>
</template>
<script>
export default {
  data () {
    return {
      postid: 0,
      Post: '',
      Cate: ''
    }
  },
  created () {
    this.postid = this.$route.query.Id
    this.GetPost()
  },
  methods: {
    GetPost () {
      var that = this
      this.$http.get('http://localhost:8889/post/get/one/' + that.postid).then(function (response) {
        if (response.status !== 200) {
          return that.$message({
            showClose: true,
            message: '状态错误',
            type: 'error'
          })
        }
        that.Post = response.data.data
        that.Cate = response.data.data.Cate
        console.log(response)
      }, function () {})
    }
  }
}
</script>
<style scoped>
.titlefont{
  font-size: 30px;
}
.catefont{
  font-size: 20px;
}
</style>
