<template>
  <el-row>
    <el-col :lg="11" :sm="24" :xs="24">
      <el-main style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
        element-loading-background="rgba(0, 0, 0, 0.1)">
        <h3>漲跌機率(漲)</h3>
        <el-table :data="RankStock1" border stripe height="200" :default-sort="{ prop: 'rank' }" empty-text="無相關資料">

          <el-table-column prop="order" label="排行" sortable />

          <el-table-column prop="stockA_name" label="股票A">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="stockB_name" label="股票B">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="diff" label="天數" />

          <el-table-column prop="up" label="機率" />

          <el-table-column prop="follow" label="追蹤" />

        </el-table>
      </el-main>
    </el-col>
    <el-col :lg="11" :sm="24" :xs="24">
      <el-main style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
        element-loading-background="rgba(0, 0, 0, 0.1)">
        <h3>漲跌機率(跌)</h3>
        <el-table :data="RankStock2" border stripe height="200" :default-sort="{ prop: 'rank' }" empty-text="無相關資料">
          <el-table-column prop="order" label="排行" sortable />

          <el-table-column prop="stockA_name" label="股票A">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="stockB_name" label="股票B">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="diff" label="天數" />

          <el-table-column prop="down" label="機率" />

          <el-table-column prop="follow" label="追蹤" />
        </el-table>
      </el-main>
    </el-col>

  </el-row>
  <el-row>
    <el-col :lg="11" :sm="24" :xs="24">
      <el-main style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
        element-loading-background="rgba(0, 0, 0, 0.1)">
        <h3>相關漲跌機率(漲)</h3>
        <el-table :data="RelateStock1" border stripe height="200" :default-sort="{ prop: 'rank' }" empty-text="無相關資料">

          <el-table-column prop="order" label="排行" sortable />


          <el-table-column prop="stockA_name" label="股票A">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="stockB_name" label="股票B">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="diff" label="天數" />

          <el-table-column prop="up" label="機率" />

          <el-table-column prop="follow" label="追蹤" />

        </el-table>
      </el-main>
    </el-col>
    <el-col :lg="11" :sm="24" :xs="24">
      <el-main style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
        element-loading-background="rgba(0, 0, 0, 0.1)">
        <h3>相關漲跌機率(跌)</h3>
        <el-table :data="RelateStock2" border stripe height="200" :default-sort="{ prop: 'rank' }" empty-text="無相關資料">
          <el-table-column prop="order" label="排行" sortable />


          <el-table-column prop="stockA_name" label="股票A">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockA_id }">{{ scope.row.stockA_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="stockB_name" label="股票B">
            <template v-slot="scope">
              <router-link :to="{ path: '/aboutstock/' + scope.row.stockB_id }">{{ scope.row.stockB_name }}
              </router-link>
            </template>

          </el-table-column>

          <el-table-column prop="diff" label="天數" />

          <el-table-column prop="down" label="機率" />

          <el-table-column prop="follow" label="追蹤" />

        </el-table>
      </el-main>
    </el-col>

  </el-row>
  <el-row>
    <el-main style="padding:0" v-loading="loading2" element-loading-text="讀取資料中"
      element-loading-background="rgba(0, 0, 0, 0.1)">
      <h3>相關產業股票 </h3>
      <el-table :data="stock_table" border stripe height="200" :default-sort="{ prop: 'time' }" empty-text="無相關資料">

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

        <el-table-column prop="turnover" label="成交筆數" />
        <el-table-column prop="date" label="時間" sortable />

      </el-table>
    </el-main>
  </el-row>
</template>

<script >

import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutStock",
  props: ["res2", "res3", "stock_id"],

  data() {
    return {
      stock_category_id: null,
      RankStock1: [],
      RankStock2: [],
      RelateStock1: [],
      RelateStock2: [],
      stock_table: [],
      page: 0,
      loading1: true,
      loading2: true
    };
  },
  methods: {
    load() {
      this.page += 1
    }
  },

  watch: {
    'stock_id': {
      handler: function (stock_id) {
        this.loading1 = true;
        this.loading2 = true;

        this.RankStock1 = []
        this.RankStock2 = []
        this.RelateStock1 = []
        this.RelateStock2 = []
        this.stock_table = []

      },
      deep: true,
    },
    res2: function (res2) {
      console.log(this.res2);
      this.res2.data.probability_up.forEach((rankstock1) => {
        this.RankStock1.push({
          stockA_id: rankstock1.stockA_id,
          stockB_id: rankstock1.stockB_id,
          stockA_name: rankstock1.stockA_name + "\n(" + rankstock1.stockA_id + ")",
          stockB_name: rankstock1.stockB_name + "\n(" + rankstock1.stockB_id + ")",
          diff: rankstock1.diff,
          up: rankstock1.up,
          order: rankstock1.order,
        })
      })
      this.res2.data.probability_down.forEach((rankstock2) => {
        this.RankStock2.push({
          stockA_id: rankstock2.stockA_id,
          stockB_id: rankstock2.stockB_id,
          stockA_name: rankstock2.stockA_name + "\n(" + rankstock2.stockA_id + ")",
          stockB_name: rankstock2.stockB_name + "\n(" + rankstock2.stockB_id + ")",
          diff: rankstock2.diff,
          down: rankstock2.down,
          order: rankstock2.order,
        })
      })
      this.res2.data.relation_up.forEach((relatestock1) => {
        this.RelateStock1.push({
          stockA_id: relatestock1.stockA_id,
          stockB_id: relatestock1.stockB_id,
          stockA_name: relatestock1.stockA_name + "\n(" + relatestock1.stockA_id + ")",
          stockB_name: relatestock1.stockB_name + "\n(" + relatestock1.stockB_id + ")",
          diff: relatestock1.diff,
          up: relatestock1.up,
          order: relatestock1.order,
        })
      })
      this.res2.data.relation_down.forEach((relatestock2) => {
        this.RelateStock2.push({
          stockA_id: relatestock2.stockA_id,
          stockB_id: relatestock2.stockB_id,
          stockA_name: relatestock2.stockA_name + "\n(" + relatestock2.stockA_id + ")",
          stockB_name: relatestock2.stockB_name + "\n(" + relatestock2.stockB_id + ")",
          diff: relatestock2.diff,
          down: relatestock2.down,
          order: relatestock2.order,
        })
      })
      this.loading1 = false;
    },

    res3: function (res3) {
      console.log(this.res3);
      this.stock_table = []

      this.res3.data.stocks.forEach((stock) => {
        this.stock_table.push({
          stock_name: stock.stock_name + "\n(" + stock.stock_id + ")",
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



});
</script>

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