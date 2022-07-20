<template>
    <div class="LB1" >
    <el-main><el-button @click="tsmc">台積電</el-button></el-main>
    <el-main><el-button>我是按鈕</el-button></el-main>
    <el-main><el-button>我是按鈕</el-button></el-main>
    </div>
</template>
<script>
export default {
  methods: {
    tsmc(){
        this.$router.push("/tsmc");
    }
  }
}
</script>

<style>
.LB1 {
    position: absolute;
    left: 5%;
    width: 8%;      
    line-height: 100px;
    
}
</style>