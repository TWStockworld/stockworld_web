<template>
  <div class="sort_computersize">
    <div>
      <el-button class="sb1" @click="kindtable = true">上市</el-button>
    </div>
    <div>
      <el-dialog v-model="kindtable" width="50%">
        <el-container>
          <el-header class="sort_title">台股分類查詢-上市</el-header>
          <el-main>
            <el-button v-for="category in categories" :key="category.id" @click="go(category.id)">
              {{ category.category }}
            </el-button>

          </el-main>
        </el-container>
        <!--  先把button寫在上面
           <el-button class="sort_list" color="#626aef" :dark="isDark" plain>水泥</el-button>
        -->
      </el-dialog>
    </div>
    <div>
      <el-button class="sb2" @click="kindtable2 = true">上櫃</el-button>
    </div>
    <div>
      <el-dialog v-model="kindtable2" width="50%">
        <el-container>
          <el-header class="sort_title">台股分類查詢-上櫃</el-header>
          <el-main>
            <el-button v-for="category in categories" :key="category.id">
              {{ category.category }}
            </el-button>
          </el-main>
        </el-container>
      </el-dialog>
    </div>
    <div>
      <el-button class="sb3" @click="kindtable3 = true">概念股</el-button>
    </div>
    <div>
      <el-dialog v-model="kindtable3" width="50%">
        <el-container>
          <el-header class="sort_title">台股分類查詢-概念股</el-header>
          <el-main>

          </el-main>
        </el-container>
      </el-dialog>
    </div>
    <div>
      <el-button class="sb4" @click="kindtable4 = true">集團</el-button>
    </div>
    <div>
      <el-dialog v-model="kindtable4" width="50%">
        <el-container>
          <el-header class="sort_title">台股分類查詢-集團</el-header>
          <el-main>

          </el-main>
        </el-container>
      </el-dialog>
    </div>
    <div>
      <el-button class="sb5" @click="kindtable5 = true">電子股</el-button>
    </div>
    <div>
      <el-dialog v-model="kindtable5" width="50%">
        <el-container>
          <el-header class="sort_title">台股分類查詢-電子股</el-header>
          <el-main>

          </el-main>
        </el-container>
      </el-dialog>
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
            {{ '列表内容 ' + o }}
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
            {{ '列表内容 ' + o }}
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
            {{ '列表内容 ' + o }}
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
            {{ '列表内容 ' + o }}
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
            {{ '列表内容 ' + o }}
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
      categories: [],
      kindtable: false,
      kindtable2: false,
      kindtable3: false,
      kindtable4: false,
      kindtable5: false,

    };
  },
  methods: {
    go(stock_id) {
      this.$router.push({
        name: 'AboutStock',
        params: {
          stockid: stock_id,
        }
      });
    },
  },
  mounted() {
    this.axios
      .get("/api/stock/get_stock_category")
      .then((res) => {
        console.log(res.data.success);
        this.categories = res.data.success;


      })
  }
};
</script>
<style scoped>
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

  .tab11 {
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

  .sort_list {
    border-radius: 10%;
    font-size: 20px;
  }

  .sort_title {
    font-size: 50px;
    margin: auto;
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
