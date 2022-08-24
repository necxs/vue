<template>
  <div class="hello">
  <el-button>按钮</el-button>
      <el-radio v-model="radio" label="2">备选项</el-radio>
      <el-row>
  <el-button>默认按钮</el-button>
   <router-link to="/a">
  <el-button type="primary">主按钮</el-button>
  </router-link>

  <router-link to="/user">
  <el-button type="success">成功按钮</el-button>
  </router-link>

  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
</div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
