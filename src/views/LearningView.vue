<template>
  <div class="learning_computersize">
    <div>
      <el-button class="tb1">
        <el-dialog></el-dialog>
      </el-button>
    </div>

    <el-button class="tb2"></el-button>
    <el-button class="tb3"></el-button>
    <el-button class="tb4"></el-button>
    <el-button class="tb5"></el-button>
    <el-button class="tb6"></el-button>
    <el-button class="tb7"></el-button>
    <el-button class="tb8"></el-button>
    <el-button class="tb9"></el-button>
    <el-button class="tb10"></el-button>
  </div>

  <div class="learning_cellphonesize">
    <ul class="learning_cellphonesize_ul">
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">0%~10%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">10%~20%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">20%~30%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">30%~40%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">40%~50%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">50%~60%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">60%~70%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">70%~80%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">80%~90%</span>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </li>
      <div class="tab11"></div>
      <li class="learning_cellphonesize_li">
        <el-card class="box-card">
          <template #header>
            <div class="clearfix">
              <span class="learning_name">90%~100%</span>
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
<style >
  @media only screen and (max-width: 768px) {
    .learning_computersize {
      display: none;
    }
    .learning_name {
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
    .learning_cellphonesize_ul {
      list-style-type: none;
      height: 85vh;
      overflow-y: scroll;
    }
    .tab11{
      height: 1%;
    }
    .learning_cellphonesize {
      width: 90%;
      /* margin: auto; */
      margin-top: 6%;
      margin-right: auto;
      margin-bottom: auto;
      margin-left: 8%;
    }
  }
  @media only screen and (min-width: 768px) {
    .learning_cellphonesize {
      display: none;
    }
  .tb1 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 10%;
    left: 5%;
    font-size: 90px;
  }
  .tb2 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 65%;
    left: 10%;
    font-size: 90px;
  }
  .tb3 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 70%;
    left: 25%;
    font-size: 90px;
  }
  .tb4 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 38%;
    left: 40%;
    font-size: 90px;
  }
  .tb5 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 48%;
    left: 53%;
    font-size: 90px;
  }
  .tb6 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 8%;
    left: 63%;
    font-size: 90px;
  }
  .tb7 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 12%;
    left: 84%;
    font-size: 90px;
  }
  .tb8 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 30%;
    left: 72%;
    font-size: 90px;
  }
  .tb9 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 35%;
    left: 88%;
    font-size: 90px;
  }
  .tb10 {
    position: absolute;
    height: 15%;
    width: 7%;
    border-radius: 50%;
    top: 73%;
    left: 68%;
    font-size: 90px;
  }
  }
</style>