<template>
    <div>
     <el-card class="box-card">
        <el-page-header title="上一页" content="文章管理" @back= "goBack">
        </el-page-header>
<span>
  <el-table :data= "PostList" style="width: 100%">
    <el-table-column label="#" type="index"></el-table-column>
    <el-table-column label="文章标题" prop="title"></el-table-column>
    <el-table-column label="发布时间" prop="time"></el-table-column>
    <el-table-column label="类别" prop="Cate.name"></el-table-column>
    <el-table-column align="right" label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="showfind(scope.row.title,scope.row.Cate.name,scope.row.content,scope.row.description)">查看</el-button>
        <el-button size="mini" @click="showedit(scope.row.title,scope.row.postid,scope.row.Cate.id,scope.row.content,scope.row.description)" >编辑</el-button>
        <el-button size="mini" type="danger" @click="deletepost(scope.row.postid)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</span>
<el-pagination @current-change= "handleCurrentChange" :current-page.sync= "info.pagenum" page-size="info.pagesize" background layout="prev, pager, next" :total= "total"></el-pagination>
    </el-card>
     <el-dialog
  title="修改文章"
  :visible.sync="editpost"
  width="80%" >
  <span></span>
  <span slot="footer" class="dialog-footer">
<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label= "标题" prop="title" :rules="[{ required: true, message: '标题不能为空' }]">
                <el-input v-model = "numberValidateForm.title" placeholder="请输入标题" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="文章类型" :rules="[{ required: true, message: '文章不能为空' }]">
                <el-select placeholder="请选择文章类型" v-model="value">
                  <el-option
                    v-for="item in CateList"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id">
                  </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label= "文章描述" prop="description" :rules="[{ required: true, message: '描述不能为空' }]">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model = "numberValidateForm.description" placeholder="请输入描述" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label= "文章内容" prop="content" :rules="[{ required: true, message: '文章不能为空' }]">
                <mavon-editor v-model="numberValidateForm.content" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"/>
            </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="editsubmit('numberValidateForm')">提交</el-button>
    <el-button @click="editpost = false">退出</el-button>
  </el-form-item>
</el-form>
  </span>
  </el-dialog>
  <el-dialog
  title="查看"
  :visible.sync="findpost"
  width="80%" >
  <el-form>
            <el-form-item label="文章标题:">
              <el-input
              v-model="this.numberValidateForm.title"
              :disabled="true">
              </el-input>
            </el-form-item>
            <el-form-item label="文章类型:">
              <el-input
              v-model="this.catename"
              :disabled="true">
              </el-input>
            </el-form-item>
            <el-form-item label= "文章描述" >
                <el-input type="textarea" :disabled="true" :autosize="{ minRows: 2, maxRows: 4}" v-model = "numberValidateForm.description" placeholder="请输入描述" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="文章内容">
  <div v-highlight>
<mavon-editor
class="md"
:value="numberValidateForm.content"
:subfield = "false"
:defaultOpen = "'preview'"
:toolbarsFlag = "false"
:editable="false"
:scrollStyle="true"
:ishljs = "true"
></mavon-editor>

  </div>
  </el-form-item>
  </el-form>
  </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    return {
      numberValidateForm: {
        title: '',
        content: '',
        cateid: 0,
        id: 0,
        description: ''
      },
      info: {
        pagenum: 1,
        pagesize: 10
      },
      PostList: [],
      total: 20,
      catename: '',
      editpost: false,
      findpost: false,
      CateList: [],
      value: 0
    }
  },
  created () {
    this.GetPostList()
  },
  methods: {
    GetPostList () {
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
        that.PostList = response.data.data
      },
      function () {})
    },
    handleCurrentChange (newPage) {
      this.info.pagenum = newPage
      this.GetPostList()
    },
    goBack () {
      var that = this
      if (this.info.pagenum === 1) {
        return that.$message({
          showClose: true,
          message: '已经是第一页了',
          type: 'info'
        })
      } else {
        this.info.pagenum = 1
        this.GetPostList()
      }
    },
    deletepost (postid) {
      var that = this
      this.$http.delete('http://localhost:8889/post/delete/' + postid).then(function (response) {
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
          that.GetPostList()
          return that.$message({
            showClose: true,
            message: response.data.message,
            type: 'success'
          })
        }
      },
      function () {})
    },
    showedit (title, postid, id, content, description) {
      this.editpost = true
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
      that.numberValidateForm.title = title
      that.numberValidateForm.content = content
      this.value = id
      that.numberValidateForm.id = postid
      that.numberValidateForm.description = description
    },
    editsubmit (formName) {
      var that = this
      this.numberValidateForm.cateid = this.value
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.put('http://localhost:8889/post/edit/' + this.numberValidateForm.id, that.numberValidateForm).then(function (response) {
            console.log(response)
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
              that.GetPostList()
              that.editcate = false
              return that.$message({
                showClose: true,
                message: response.data.message,
                type: 'success'
              })
            }
          }, function () {})
        } else {
          return that.$message({
            showClose: true,
            message: '输入错误',
            type: 'error'
          })
        }
      })
    },
    showfind (title, catename, content, description) {
      this.findpost = true
      this.numberValidateForm.title = title
      this.numberValidateForm.content = content
      this.catename = catename
      this.numberValidateForm.description = description
    },
    $imgAdd (pos, $file) {
      var that = this
      var formdata = new FormData()
      formdata.append('images', $file)
      console.log(formdata)
      this.axios({
        url: 'http://localhost:8889/file/uploadFile',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((response) => {
        console.log(response)
        if (response.data.code === 200) {
          that.$message({
            showClose: true,
            message: '图片上传成功',
            type: 'success'
          })
          var url = response.data.data
          that.$refs.md.$imglst2Url([[pos, url]])
        } else {
          that.$message({
            showClose: true,
            message: response.data.message,
            type: 'error'
          })
        }
      })
    },
    $imgDel ($file) {
      console.log(123)
      var that = this
      this.axios({
        url: 'http://localhost:8889/file/deleteFile' + $file,
        method: 'delete'
      }).then((response) => {
        if (response.data.code === 200) {
          that.$message({
            showClose: true,
            message: '图片已删除',
            type: 'success'
          })
        } else {
          that.$message({
            showClose: true,
            message: response.data.message,
            type: 'error'
          })
        }
      })
    }
  }
}
</script>
<style scoped>
.el-pagination {
    margin-top: 50px;
}
.title {
  font-size: 15px;
}
.sp {
  display: block;
}
</style>
