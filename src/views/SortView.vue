<template>
  <div class="sort_computersize">
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
  </div>

  <div class="sort_cellphonesize">
    <ul class="sort_cellphonesize_ul">
      <li class="sort_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="sort_name">上市</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="sort_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="sort_name">上櫃</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="sort_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="sort_name">概念股</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="sort_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="sort_name">集團</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="sort_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="sort_name">電子股</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sorts: [],
      kindtable: false,
    };
  },
  methods: {},
};
</script>
<style>
  @media only screen and (max-width: 768px) {
    .sort_computersize {
      display: none;
    }
    .sort_name {
      font-size: 1.5em;
    }
    .text {
    font-size: 14px;
    }
    .item {
      margin-bottom: 18px;
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
    .box-card {
      width: 90%;
    }
    .sort_cellphonesize_ul {
      list-style-type: none;
      height: 85vh;
      overflow-y: scroll;
    }
    .tab11{
      height: 1%;
    }
    .sort_cellphonesize {
      width: 90%;
      /* margin: auto; */
      margin-top: 6%;
      margin-right: auto;
      margin-bottom: auto;
      margin-left: 8%;
    }
  }
  @media only screen and (min-width: 768px) {
    .sort_cellphonesize {
      display: none;
    }
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
  }
</style>
