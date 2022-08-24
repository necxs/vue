<template>
<div>
<el-container style="height:100%">
  <el-aside width="auto">
  <common-aside></common-aside>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</div>
</template>
<script>
import CommonAside from "@/components/CommonAside.vue"
export default{
name:'Home',
components:{
CommonAside
},
data () {
 return {}
}
}
</script>
<style lang="css" scoped>
.el-header {
 background-color: #333;
 margin-left:0px;
 width:1000px;
}
.el-main {
padding-top:0px;
}
</style>
