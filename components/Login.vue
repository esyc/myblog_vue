<template>
<div class= "wrap" id= "app1">
<div class= "container">
<h1 style="font-size: 32px;color: rgb(18, 199, 184); margin: 0; text-align: center; background: -webkit-linear-gradient(to bottom right,#9fdad0,#15be78);">crc's blog</h1>
<h1 style="color: rgb(207, 207, 207); margin: 0; text-align: center">后台登录</h1>
<form>
    <label><input  type="text" v-model= 'name' placeholder="Your username" style="background-color: #FFFFFF; font-size: 16px;color: #50a3a2;padding: 5px 0 5px 10px; border-radius: 25px;"/></label>
    <label><input type="password" v-model= 'password' placeholder="password" style="background-color: #FFFFFF; font-size: 16px;color: #50a3a2;padding: 5px 0 5px 10px; border-radius: 25px;" /></label>
    <input type="button" value="登录" @click = "login"/>
</form>
</div>
</div>
</template>
<script>

export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      const data = { name: this.name, password: this.password }
      var that = this
      this.$http.post('http://localhost:8889/user/login', data).then(function (response) {
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
          window.sessionStorage.setItem('token', response.data.token)
          that.$message({
            showClose: true,
            message: '登陆成功',
            type: 'success'
          })
          that.$router.push('/admin')
        }
      },
      function () {})
    }
  }
}
</script>
<style type="text/css" scoped>
* {
            box-sizing: border-box;
        }
        body {
            margin: 0;
            padding: 0;
            font: 16px/20px microsft yahei;
         }
        .wrap {
            width: 100%;
            height: 100%;
            padding: 10% 0;
            position: fixed;
            opacity: 0.8;
            background: linear-gradient(to bottom right,#37118f, #3f7599);
            background: -webkit-linear-gradient(to bottom right,#104948,#53e3a6);
        }
        .container {
            width: 60%;
            margin: 0 auto;
        }

        .container input {
            width: 300px;
            display: block;
            height: 40px;
            border: 0;
            outline: 0;
            padding: 6px 10px;
            line-height: 24px;
            margin: 32px auto;
        }
        .container input[type='button'] {
           width: 93px;
           height: 36px;
            font-size: 16px;
            letter-spacing: 2px;
            color: #6b6483;
            background-color: #FFFFFF;
        }
        .container input[type='button']:hover {
            cursor: pointer;
            background-color: #7f76f8;
            background: linear-gradient(to bottom right,#e3e3f1, #68a4ce);
        }
</style>
