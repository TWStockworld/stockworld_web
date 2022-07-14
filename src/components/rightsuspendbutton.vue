<template>
    <div class="RB1">
        <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
            <el-dialog v-model="dialogTableVisible" title="相關度排行"><correlation /></el-dialog>
    </div>
    <div class="RB2">
        <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
    </div>
    <div class="RB3">
        <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
    </div>
    <div class="RB4">
        <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
            
    </div>
    <div class="RB5">
        <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
            
    </div>
    <div class="RB6">
       <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
            
    </div>
    <div class="RB7">
        <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
            
    </div>
    <div class="RB8">
        <el-button  @click="dialogTableVisible = true">SU3CL3RWEER</el-button>
    </div>
    <div class="picture">
        <img alt="tsmc logo" src="../assets/tsmc.png" />
    </div>
</template>
<script>
import correlation from "@/components/correlation.vue"
export default {
    components:{
        correlation,
    },
    data() {
        return{
            dialogTableVisible: false,
        }
    }
}

</script>

<style>
.RB1{
    position: absolute;
    top: 150px;
    width: 700px;
    left: 450px;
}
.RB2{
    position: absolute;
    top: 300px;
    width: 700px;
    left: 250px;
}
.RB3{
    position: absolute;
    top: 530px;
    width: 700px;
    left: 250px;
}
.RB4{
    position: absolute;
    top: 700px;
    width: 700px;
    left: 450px;
}
.RB5{
    position: absolute;
    top: 700px;
    width: 700px;
    left: 1000px;
}
.RB6{
    position: absolute;
    top: 530px;
    width: 700px;
    left: 1200px;
}
.RB7{
    position: absolute;
    top: 300px;
    width: 700px;
    left: 1200px;
}
.RB8{
    position: absolute;
    top: 150px;
    width: 700px;
    left: 1000px;
}
.picture{
    position: absolute;
    top: 300px;
    width: 700px;
    left: 700px;
}
</style>
