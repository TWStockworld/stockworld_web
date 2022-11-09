<template>
  <el-button size="default" @click="show('a')">
    漲跌機率(漲)
  </el-button>
  <el-button size="default" @click="show('b')">
    漲跌機率(跌)
  </el-button>
  <el-button size="default" @click="show('c')">
    相關漲跌機率(漲)
  </el-button>
  <el-button size="default" @click="show('d')">
    相關漲跌機率(跌)
  </el-button>

  <el-main v-if="cur == 'a'" style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
    element-loading-background="rgba(0, 0, 0, 0.1)">
    <h3>漲跌機率(漲)</h3>
    <el-table width="100%" :data="RankStock1" border stripe height="200" :default-sort="{ prop: 'rank' }"
      empty-text="無相關資料">

      <el-table-column prop="order" label="排行" sortable />

      <el-table-column prop="stockA_name" label="股票A">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_category_id }">{{ scope.row.stockA_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">

      </el-table-column>

      <el-table-column prop="stockB_name" label="股票B">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_category_id }">{{ scope.row.stockB_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">
      </el-table-column>

      <el-table-column prop="result" label="A漲,B幾天後漲的機率" />
      <!-- <el-table-column label="操作">
        <template #default="scope">
          <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 1)">
            圖表
          </el-button>
          <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 1)">
            追蹤
          </el-button>
        </template>
      </el-table-column> -->

    </el-table>
  </el-main>
  <el-main v-if="cur == 'b'" style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
    element-loading-background="rgba(0, 0, 0, 0.1)">
    <h3>漲跌機率(跌)</h3>
    <el-table width="100%" :data="RankStock2" border stripe height="200" :default-sort="{ prop: 'rank' }"
      empty-text="無相關資料">
      <el-table-column prop="order" label="排行" sortable />

      <el-table-column prop="stockA_name" label="股票A">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_category_id }">{{ scope.row.stockA_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">

      </el-table-column>

      <el-table-column prop="stockB_name" label="股票B">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_category_id }">{{ scope.row.stockB_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">
      </el-table-column>

      <el-table-column prop="result" label="A漲,B幾天後跌的機率" />
      <!-- <el-table-column label="操作">
        <template #default="scope">
          <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 2)">
            圖表
          </el-button>
          <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 2)">
            追蹤
          </el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </el-main>
  <el-main v-if="cur == 'c'" style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
    element-loading-background="rgba(0, 0, 0, 0.1)">
    <h3>相關漲跌機率(漲)</h3>
    <el-table width="100%" :data="RelateStock1" border stripe height="200" :default-sort="{ prop: 'rank' }"
      empty-text="無相關資料">

      <el-table-column prop="order" label="排行" sortable />


      <el-table-column prop="stockA_name" label="股票A">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_category_id }">{{ scope.row.stockA_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">

      </el-table-column>

      <el-table-column prop="stockB_name" label="股票B">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_category_id }">{{ scope.row.stockB_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">
      </el-table-column>

      <el-table-column prop="result" label="A漲,B幾天後漲的機率" />
      <!-- <el-table-column label="操作">
        <template #default="scope">
          <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 1)">
            圖表
          </el-button>
          <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id, 1)">
            追蹤
          </el-button>
        </template>
      </el-table-column> -->

    </el-table>
  </el-main>
  <el-main v-if="cur == 'd'" style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
    element-loading-background="rgba(0, 0, 0, 0.1)">
    <h3>相關漲跌機率(跌) </h3>
    <el-table width="100%" :data="RelateStock2" border stripe height="200" :default-sort="{ prop: 'rank' }"
      empty-text="無相關資料">
      <el-table-column prop="order" label="排行" sortable />


      <el-table-column prop="stockA_name" label="股票A">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_category_id }">{{ scope.row.stockA_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockA_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">

      </el-table-column>

      <el-table-column prop="stockB_name" label="股票B">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_category" label="種類">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_category_id }">{{ scope.row.stockB_category
          }}
          </router-link>
        </template>
      </el-table-column>

      <el-table-column prop="stockB_spectial_category" label="特別種類" v-if="$route.name != 'aboutstock'">
      </el-table-column>

      <el-table-column prop="result" label="A漲,B幾天後跌的機率" />
      <!-- <el-table-column label="操作">
          <template #default="scope">
            <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id,2)">
              圖表
            </el-button>
            <el-button size="default" @click="setchartvalue(scope.row.diff, scope.row.stockA_id, scope.row.stockB_id,2)">
              追蹤
            </el-button>
          </template>
        </el-table-column> -->
    </el-table>
  </el-main>



  <el-main style="padding:0" v-loading="loading2" element-loading-text="讀取資料中 "
    element-loading-background="rgba(0, 0, 0, 0.1)" v-if="$route.name == 'aboutstock'">
    <h3>相關產業股票 </h3>
    <el-table width="100%" v-el-table-infinite-scroll="load" :data="stock_table" border stripe height="200"
      :default-sort="{ prop: 'time' }" empty-text="無相關資料">

      <el-table-column prop="stock_name" label="股票">
        <template v-slot="scope">
          <router-link :to="{ path: '/aboutstock/' + scope.row.stock_id }">{{ scope.row.stock_name }}
          </router-link>
        </template>

      </el-table-column>

      <el-table-column prop="day_change" label="漲跌幅" />

      <el-table-column prop="open" label="開盤價" />

      <el-table-column prop="up" label="最高價" />

      <el-table-column prop="down" label="最低價" />

      <el-table-column prop="close" label="收盤價" />

      <el-table-column prop="money" label="交易金額" />

      <el-table-column prop="volume" label="成交量" />

      <el-table-column prop="date" label="時間" sortable />

    </el-table>

  </el-main>
  <el-dialog customClass="el-dialog-width" v-model="dialogTableVisible" title="圖表" destroyOnClose=true center=true>
    <CompareChart :startdate="data_start_date" :enddate="data_end_date" :diff="chart_diff" :stockA_id="chart_stockA_id"
      :stockB_id="chart_stockB_id" :componentKey="componentKey" :upordown="upordown" />
  </el-dialog>

</template>

<script setup>
import { default as vElTableInfiniteScroll } from "el-table-infinite-scroll";

import { ref } from 'vue';

const cc = ref(0);
const emit = defineEmits(['pageupdate'])

const load = () => {
  // cc.value++;
  // emit("pageupdate", cc.value)
  // console.log(cc.value)
};

</script>

<script >

import { defineComponent } from "vue";
import CompareChart from "@/components/CompareChart.vue";

export default defineComponent({
  name: "aboutstock",
  props: ["res2", "res3", "stock_id", "stock_calculate_groups_id", "bulletin_id"],
  components: {
    CompareChart,
  },
  data() {
    return {
      stock_category_id: null,
      RankStock1: [],
      RankStock2: [],
      RelateStock1: [],
      RelateStock2: [],
      stock_table: [],
      loading1: true,
      loading2: true,
      data_start_date: '',
      data_end_date: '',
      dialogTableVisible: false,
      chart_diff: 0,
      chart_stockA_id: '',
      chart_stockB_id: '',
      upordown: 0,
      componentKey: 0,
      cur: 'a',
    };
  },
  methods: {

    setchartvalue(chart_diff, chart_stockA_id, chart_stockB_id, upordown) {
      this.chart_diff = chart_diff;
      this.chart_stockA_id = chart_stockA_id;
      this.chart_stockB_id = chart_stockB_id;
      this.dialogTableVisible = true;
      this.upordown = upordown
      this.componentKey += 1;
    },
    show(input) {
      switch (input) {
        case 'a':
          this.cur = 'a'
          break;
        case 'b':
          this.cur = 'b'
          break;
        case 'c':
          this.cur = 'c'
          break;
        case 'd':
          this.cur = 'd'
          break;
      }
    }
  },
  created() {
    this.$watch(
      () => ({
        stock_calculate_groups_id: this.stock_calculate_groups_id,
        stock_id: this.stock_id,
        bulletin_id: this.bulletin_id
      }),
      () => {
        this.cur = 'a'

        this.loading1 = true;
        this.loading2 = true;

        this.RankStock1 = []
        this.RankStock2 = []
        this.RelateStock1 = []
        this.RelateStock2 = []
        this.stock_table = []
      });
  },

  watch: {
    res2: function (res2) {
      if (this.res2 != '') {
        console.log(this.res2);
        this.RankStock1 = []
        this.RankStock2 = []
        this.RelateStock1 = []
        this.RelateStock2 = []
        this.data_start_date = this.res2.data.data_start_date
        this.data_end_date = this.res2.data.data_end_date

        this.res2.data.probability_up.forEach((rankstock1) => {
          var stockA_spectial_category = '';
          rankstock1.stockA_spectial_category.forEach((stockA) => {
            if (stockA.bulletin_id == this.bulletin_id) {
              stockA_spectial_category = stockA.title
            }
          });
          var stockB_spectial_category = '';
          rankstock1.stockB_spectial_category.forEach((stockB) => {
            if (stockB.bulletin_id == this.bulletin_id) {
              stockB_spectial_category = stockB.title
            }
          });
          this.RankStock1.push({
            stockA_id: rankstock1.stockA_id,
            stockA_name: rankstock1.stockA_name + "\n(" + rankstock1.stockA_id + ")",
            stockA_category_id: rankstock1.stockA_category_id,
            stockA_category: rankstock1.stockA_category,
            stockA_spectial_category: stockA_spectial_category,
            stockB_id: rankstock1.stockB_id,
            stockB_name: rankstock1.stockB_name + "\n(" + rankstock1.stockB_id + ")",
            stockB_category_id: rankstock1.stockB_category_id,
            stockB_category: rankstock1.stockB_category,
            stockB_spectial_category: stockB_spectial_category,
            diff: rankstock1.diff,
            up: rankstock1.up,
            order: rankstock1.order,
            result: rankstock1.diff + "天後 " + rankstock1.up

          })
        })

        this.res2.data.probability_down.forEach((rankstock2) => {

          var stockA_spectial_category = '';
          rankstock2.stockA_spectial_category.forEach((stockA) => {
            if (stockA.bulletin_id == this.bulletin_id) {
              stockA_spectial_category = stockA.title
            }
          });
          var stockB_spectial_category = '';
          rankstock2.stockB_spectial_category.forEach((stockB) => {
            if (stockB.bulletin_id == this.bulletin_id) {
              stockB_spectial_category = stockB.title
            }
          });
          this.RankStock2.push({
            stockA_id: rankstock2.stockA_id,
            stockA_name: rankstock2.stockA_name + "\n(" + rankstock2.stockA_id + ")",
            stockA_category_id: rankstock2.stockA_category_id,
            stockA_category: rankstock2.stockA_category,
            stockA_spectial_category: stockA_spectial_category,
            stockB_id: rankstock2.stockB_id,
            stockB_name: rankstock2.stockB_name + "\n(" + rankstock2.stockB_id + ")",
            stockB_category_id: rankstock2.stockB_category_id,
            stockB_category: rankstock2.stockB_category,
            stockB_spectial_category: stockB_spectial_category,
            diff: rankstock2.diff,
            down: rankstock2.down,
            order: rankstock2.order,
            result: rankstock2.diff + "天後 " + rankstock2.down

          })

        })
        this.res2.data.relation_up.forEach((relatestock1) => {

          var stockA_spectial_category = '';
          relatestock1.stockA_spectial_category.forEach((stockA) => {
            if (stockA.bulletin_id == this.bulletin_id) {
              stockA_spectial_category = stockA.title
            }
          });
          var stockB_spectial_category = '';
          relatestock1.stockB_spectial_category.forEach((stockB) => {
            if (stockB.bulletin_id == this.bulletin_id) {
              stockB_spectial_category = stockB.title
            }
          });
          this.RelateStock1.push({
            stockA_id: relatestock1.stockA_id,
            stockA_name: relatestock1.stockA_name + "\n(" + relatestock1.stockA_id + ")",
            stockA_category_id: relatestock1.stockA_category_id,
            stockA_category: relatestock1.stockA_category,
            stockA_spectial_category: stockA_spectial_category,
            stockB_id: relatestock1.stockB_id,
            stockB_name: relatestock1.stockB_name + "\n(" + relatestock1.stockB_id + ")",
            stockB_category_id: relatestock1.stockB_category_id,
            stockB_category: relatestock1.stockB_category,
            stockB_spectial_category: stockB_spectial_category,
            diff: relatestock1.diff,
            up: relatestock1.up,
            order: relatestock1.order,
            result: relatestock1.diff + "天後 " + relatestock1.up

          })

        })
        this.res2.data.relation_down.forEach((relatestock2) => {
          var stockA_spectial_category = '';
          relatestock2.stockA_spectial_category.forEach((stockA) => {
            if (stockA.bulletin_id == this.bulletin_id) {
              stockA_spectial_category = stockA.title
            }
          });
          var stockB_spectial_category = '';
          relatestock2.stockB_spectial_category.forEach((stockB) => {
            if (stockB.bulletin_id == this.bulletin_id) {
              stockB_spectial_category = stockB.title
            }
          });
          this.RelateStock2.push({
            stockA_id: relatestock2.stockA_id,
            stockA_name: relatestock2.stockA_name + "\n(" + relatestock2.stockA_id + ")",
            stockA_category_id: relatestock2.stockA_category_id,
            stockA_category: relatestock2.stockA_category,
            stockA_spectial_category: stockA_spectial_category,
            stockB_id: relatestock2.stockB_id,
            stockB_name: relatestock2.stockB_name + "\n(" + relatestock2.stockB_id + ")",
            stockB_category_id: relatestock2.stockB_category_id,
            stockB_category: relatestock2.stockB_category,
            stockB_spectial_category: stockB_spectial_category,
            diff: relatestock2.diff,
            down: relatestock2.down,
            order: relatestock2.order,
            result: relatestock2.diff + "天後 " + relatestock2.down

          })

        })
        this.loading1 = false;
      }
    },

    res3: function (res3) {
      if (this.res3 != '') {
        this.stock_table = []
        console.log(this.res3);
        this.res3.data.stocks.forEach((stock) => {
          this.stock_table.push({
            stock_name: stock.stock_name + "(" + stock.stock_id + ")",
            stock_id: stock.stock_id,
            day_change: stock.day_change + " %",
            open: stock.open,
            up: stock.up,
            down: stock.down,
            close: stock.close,
            volume: stock.volume,
            money: stock.money,
            turnover: stock.turnover,
            date: stock.date,
          })
        })
        this.loading2 = false;

      }
    }
  }



});
</script>

<style>
@media only screen and (max-width: 1200px) {
  .el-dialog-width {
    width: 100% !important;
  }
}

@media only screen and (min-width: 1200px) {
  .el-dialog {
    width: 60% !important;
  }
}
</style>

<style scoped>
@media only screen and (max-width: 1200px) {}

@media only screen and (min-width: 1200px) {

  .grid-content {
    height: 35vh;
  }

  .grid-content2 {
    height: 35vh;
  }
}

/* .grid-content {
  border-radius: 10px;
  overflow-x: auto;

} */
/* .el-table,
h3 {
  border-radius: 20px;
} */
.el-table .cell {
  white-space: pre-line;
}

.grid-content2 {
  border-radius: 10px;
  overflow-x: auto;
}

h3 {
  background-color: white;
}

.el-row {
  margin-bottom: 1%;
}

.aboutstock {
  z-index: 1;
}

.el-col {
  border-radius: 4px;

}



.high {
  height: 50vh;
}

.el-row {
  justify-content: space-evenly;
}
</style>