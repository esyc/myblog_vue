<template>
    <div>
     <el-card class="box-card">
        <el-page-header title="别点没用" content="分类管理" @back= "goBack">
        </el-page-header>
<span>
  <el-table :data= "CateList" style="width: 100%">
    <el-table-column label="#" type="index"></el-table-column>
    <el-table-column align="center" label="分类标题" prop="name"></el-table-column>
    <el-table-column align="center" label="文章数" prop="num"></el-table-column>
    <el-table-column align="right" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="showdialog(scope.row.name, scope.row.id)">修改</el-button>
          <el-button size="mini" type="danger" @click="deletecate(scope.row.id)">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
</span>
    </el-card>
      <el-dialog
  title="修改分类"
  :visible.sync="editcate"
  width="40%" >
  <span></span>
  <span slot="footer" class="dialog-footer">
<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="修改分类"
    prop="name"
    :rules="[{ required: true, message: '不能修改为空' }]">
    <el-input type="name" v-model="numberValidateForm.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="editcate = false">退出</el-button>
  </el-form-item>
</el-form>
  </span>
  </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      CateList: [],
      total: 30,
      editcate: false,
      prename: '',
      numberValidateForm: {
        name: '',
        id: ''
      }
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
    },
    goBack () {
      var that = this
      return that.$message({
        showClose: true,
        message: '已经是第一页了',
        type: 'info'
      })
    },
    deletecate (id) {
      var that = this
      this.$http.delete('http://localhost:8889/cate/delete/' + id).then(function (response) {
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
          that.GetCateList()
          return that.$message({
            showClose: true,
            message: response.data.message,
            type: 'success'
          })
        }
      },
      function () {})
    },
    submitForm (formName) {
      var that = this
      if (this.prename === this.numberValidateForm.name) {
        return that.$message({
          showClose: true,
          message: '不能修改一样的',
          type: 'error'
        })
      }
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.put('http://localhost:8889/cate/edit/' + this.numberValidateForm.id, that.numberValidateForm).then(function (response) {
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
              that.GetCateList()
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
    showdialog (name, id) {
      this.editcate = true
      this.numberValidateForm.name = name
      this.numberValidateForm.id = id
      this.prename = name
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 15px;
}
</style>
