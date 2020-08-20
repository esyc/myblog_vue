<template>
    <div>
      <el-card class="box-card">
          <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
  <el-form-item
    label="分类"
    prop="name"
    :rules="[
      { required: true, message: '分类不能为空'}
    ]"
  >
    <el-input type="name" v-model="numberValidateForm.name" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
  </el-form-item>
</el-form>
      </el-card>
    </div>
</template>
<script>
export default {
  data () {
    return {
      numberValidateForm: {
        name: ''
      }
    }
  },
  methods: {
    submitForm (formName) {
      var that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const data = { name: this.numberValidateForm.name }
          console.log(data)
          that.$http.post('http://localhost:8889/cate/add', data).then(function (response) {
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
    }
  }
}
</script>
<style scoped>
</style>
