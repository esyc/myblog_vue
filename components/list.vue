<template>
  <div class="ssslist">
    <div class="sssitem" v-for="(item,index) in listData" :key="index">
      <el-card>
      <div class="ssstitle">
        <span class>{{item.title}}</span>
      </div>
      <div class="ssscontent">{{item.description}}</div>
      <div class="sssdes">
        <span>{{item.time}}</span>
        <el-button type="text" @click="showpost(item.postid)">查看详情</el-button>
      </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    listData: {
      type: Array
    }
  },
  data () {
    return {}
  },
  methods: {
    showpost (id) {
      this.$router.push({ path: '/show', query: { Id: id } })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sssitem {
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  text-align: left;
}
.ssstitle {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #333;
}
.ssscontent {
  padding: 5px 0;
  font-size: 14px;
  color: #999;
  line-height: 1.5;
}
.sssdes {
  font-size: 14px;
  color: #777;
  line-height: 40px;
}
.el-card {
  width: 800px;
  height: 170px;
  margin-left: 100px;
}
.el-button {
  padding: 15px 0;
  float: right;
}
</style>
