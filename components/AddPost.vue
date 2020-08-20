<template>
      <el-card class="box-card">
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
            <el-form-item>
              <mavon-editor v-model="numberValidateForm.content" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
        </el-form>
      </el-card>
</template>
<script>
export default {
  data () {
    return {
      numberValidateForm: {
        title: '',
        content: '',
        cateid: 0,
        description: ''
      },
      CateList: [],
      value: ''
    }
  },
  created () {
    this.GetCateList()
  },
  methods: {
    submitForm (formName) {
      var that = this
      if (this.value === '') {
        return that.$message({
          showClose: true,
          message: '请选择分类',
          type: 'error'
        })
      }
      this.numberValidateForm.cateid = this.value
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.$http.post('http://localhost:8889/post/add', that.numberValidateForm).then(function (response) {
            if (response.status !== 200) {
              return that.$message({
                showClose: true,
                message: '网络错误',
                type: 'error'
              })
            } else if (response.data.code !== 200) {
              return that.$message({
                showClose: true,
                message: response.data.message,
                type: 'error'
              })
            } else {
              that.$refs[formName].resetFields()
              return that.$message({
                showClose: true,
                message: '添加成功',
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
    resetForm (formName) {
      this.$refs[formName].resetFields()
      this.numberValidateForm.content = ''
    },
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
.markdown-body {
  height: 500px;
  width: 1050px;
}
</style>
