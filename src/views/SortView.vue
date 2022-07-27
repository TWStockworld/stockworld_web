<template>
  <div>
    <el-button class="sb1" @click="kindtable = true">上市</el-button>
    </div>
    <div>
    <el-dialog v-model="kindtable" width="50%">
      <el-button v-for="sort in sorts" :key="sort.id">
        {{ sort.kind }}
      </el-button>
    </el-dialog>
  </div>
  <div>
    <el-button class="sb2">上櫃</el-button>
    <el-button class="sb3">概念股</el-button>
    <el-button class="sb4">集團</el-button>
    <el-button class="sb5">電子股</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sorts: [
       
      ],
      kindtable: false,
    };
  },
  methods: {},
};
</script>
<style>
.sb1 {
  position: absolute;
  height: 26%;
  width: 13%;
  border-radius: 50%;
  top: 20%;
  left: 10%;
  font-size: 100px;
}
.sb2 {
  position: absolute;
  height: 20%;
  width: 10%;
  border-radius: 50%;
  top: 55%;
  left: 28%;
  font-size: 90px;
}
.sb3 {
  position: absolute;
  height: 30%;
  width: 15%;
  border-radius: 50%;
  top: 20%;
  left: 40%;
  font-size: 90px;
}
.sb4 {
  position: absolute;
  height: 20%;
  width: 10%;
  border-radius: 50%;
  top: 50%;
  left: 55%;
  font-size: 90px;
}
.sb5 {
  position: absolute;
  height: 26%;
  width: 13%;
  border-radius: 50%;
  top: 20%;
  left: 70%;
  font-size: 80px;
}
</style>
