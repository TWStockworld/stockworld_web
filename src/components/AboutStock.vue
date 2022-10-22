<template>
  <el-row>
    <el-col :lg="11" :sm="24" :xs="24">
      <div class="grid-content bg-purple-light">
        <h3>漲跌機率(漲)</h3>
        <el-table :data="RankStock1" border stripe style="width: 100%" :default-sort="{ prop: 'rank' }">

          <el-table-column prop="order" label="排行" sortable width="50" />


          <el-table-column prop="stockA_name" label="股票A" width="100%" />

          <el-table-column label="VS" width="40" />


          <el-table-column prop="stockB_name" label="股票B" width="100%" />

          <el-table-column prop="diff" label="天數" width="60" />

          <el-table-column prop="up" label="機率" width="60" />

          <el-table-column prop="follow" label="追蹤" width="60" />

        </el-table>
      </div>
    </el-col>
    <el-col :lg="11" :sm="24" :xs="24">

      <div class="grid-content bg-purple-light">
        <h3>漲跌機率(跌)</h3>
        <el-table :data="RankStock2" border stripe style="width: 100%" :default-sort="{ prop: 'rank' }">
          <el-table-column prop="order" label="排行" sortable width="50" />


          <el-table-column prop="stockA_name" label="股票A" width="100%" />

          <el-table-column label="VS" width="40" />


          <el-table-column prop="stockB_name" label="股票B" width="100%" />

          <el-table-column prop="diff" label="天數" width="60" />

          <el-table-column prop="down" label="機率" width="60" />

          <el-table-column prop="follow" label="追蹤" width="60" />
        </el-table>
      </div>
    </el-col>

  </el-row>
  <el-row>
    <el-col :lg="11" :sm="24" :xs="24">

      <div class="grid-content bg-purple-light">
        <h3>相關漲跌機率(漲)</h3>
        <el-table :data="RelateStock1" border stripe style="width: 100%" :default-sort="{ prop: 'rank' }">

          <el-table-column prop="order" label="排行" sortable width="50" />


          <el-table-column prop="stockA_name" label="股票A" width="100%" />

          <el-table-column label="VS" width="40" />


          <el-table-column prop="stockB_name" label="股票B" width="100%" />

          <el-table-column prop="diff" label="天數" width="60" />

          <el-table-column prop="up" label="機率" width="60" />

          <el-table-column prop="follow" label="追蹤" width="60" />

        </el-table>
      </div>
    </el-col>
    <el-col :lg="11" :sm="24" :xs="24">

      <div class="grid-content bg-purple-light">
        <h3>相關漲跌機率(跌)</h3>
        <el-table :data="RelateStock2" border stripe style="width: 100%" :default-sort="{ prop: 'rank' }">
          <el-table-column prop="order" label="排行" sortable width="50" />


          <el-table-column prop="stockA_name" label="股票A" width="100%" />

          <el-table-column label="VS" width="40" />


          <el-table-column prop="stockB_name" label="股票B" width="100%" />

          <el-table-column prop="diff" label="天數" width="60" />

          <el-table-column prop="down" label="機率" width="60" />

          <el-table-column prop="follow" label="追蹤" width="60" />

        </el-table>
      </div>
    </el-col>

  </el-row>
  <el-row>
    <div class="grid-content2 bg-purple-light">
      <h3>相關產業股票</h3>
      <el-table :data="StockClassification" border stripe style="width: 100%"
        :default-sort="{ prop: 'code', prop: 'time' }">
        <el-table-column prop="code" label="代號" sortable width="85" />

        <el-table-column prop="name" label="名稱" width="85" />

        <el-table-column prop="FinalPrice" label="成交價" width="85" />

        <el-table-column prop="UPandDown" label="漲跌" width="85" />

        <el-table-column prop="UPandDownAmplitude" label="漲跌幅" width="85" />

        <el-table-column prop="buy" label="買進" width="85" />

        <el-table-column prop="sell" label="賣出" width="85" />

        <el-table-column prop="opening" label="開盤" width="85" />

        <el-table-column prop="ReceivedYesterday" label="昨收" width="85" />

        <el-table-column prop="volume" label="成交量" width="85" />

        <el-table-column prop="time" label="時間" sortable width="85" />

      </el-table>
    </div>
  </el-row>
</template>

<script >

import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutStock",
  data() {
    return {
      stock_id: this.$route.params.stockid,
      RankStock1: [],
      RankStock2: [],
      RelateStock1: [],
      RelateStock2: [],
      StockClassification: [
        {
          code: "--",
          name: "水泥",
          FinalPrice: "169.89",
          UPandDown: "跌1.5",
          UPandDownAmplitude: "-0.86%",
          buy: "--",
          sell: "--",
          opening: "171.35",
          ReceivedYesterday: "171.36",
          volume: "8058",
          time: "13:30",
        },
        {
          code: "1101",
          name: "台泥",
          FinalPrice: "41.70",
          UPandDown: "跌0.40",
          UPandDownAmplitude: "-0.95%",
          buy: "42.85",
          sell: "42.90",
          opening: "42.00",
          ReceivedYesterday: "42.10",
          volume: "15460",
          time: "14:30",
        },
        {
          code: "1102",
          name: "亞泥",
          FinalPrice: "44.40",
          UPandDown: "跌0.40",
          UPandDownAmplitude: "-0.89%",
          buy: "46.50",
          sell: "46.55",
          opening: "44.80",
          ReceivedYesterday: "44.80",
          volume: "3561",
          time: "14:30",
        },
        {
          code: "1103",
          name: "嘉泥",
          FinalPrice: "18.75",
          UPandDown: "跌0.05",
          UPandDownAmplitude: "-0.27%",
          buy: "20.80",
          sell: "20.85",
          opening: "18.80",
          ReceivedYesterday: "18.80",
          volume: "282",
          time: "13:30",
        },
        {
          code: "1104",
          name: "環泥",
          FinalPrice: "21.65",
          UPandDown: "--",
          UPandDownAmplitude: "0.00%",
          buy: "18.50",
          sell: "18.55",
          opening: "21.65",
          ReceivedYesterday: "21.65",
          volume: "373",
          time: "13:30",
        },
        {
          code: "1108",
          name: "幸福",
          FinalPrice: "11.15",
          UPandDown: "--",
          UPandDownAmplitude: "0.00%",
          buy: "7.75",
          sell: "8.17",
          opening: "11.15",
          ReceivedYesterday: "11.15",
          volume: "115",
          time: "13:30",
        },
        {
          code: "1109",
          name: "信大",
          FinalPrice: "20.05",
          UPandDown: "漲0.10",
          UPandDownAmplitude: "+0.50%",
          buy: "18.80",
          sell: "18.85",
          opening: "19.95",
          ReceivedYesterday: "19.95",
          volume: "62",
          time: "13:30",
        },
        {
          code: "1110",
          name: "東泥",
          FinalPrice: "20.00",
          UPandDown: "跌0.25",
          UPandDownAmplitude: "-1.23%",
          buy: "16.55",
          sell: "17.00",
          opening: "20.20",
          ReceivedYesterday: "20.25",
          volume: "176",
          time: "13:30",
        },
      ],
    };
  },
  mounted: function () {
    this.axios
      .post("/api/stock/get_stock_probability", {
        stock_id: this.stock_id,
        show_zero_diff: 0
      })
      .then((res) => {
        console.log(res);
        res.data.probability_up.forEach((rankstock1) => {
          this.RankStock1.push({
            stockA_name: rankstock1.stockA_name + "(" + rankstock1.stockA_id + ")",
            stockB_name: rankstock1.stockB_name + "(" + rankstock1.stockB_id + ")",
            diff: rankstock1.diff,
            up: rankstock1.up,
            order: rankstock1.order,
          })
        })
        res.data.probability_down.forEach((rankstock2) => {
          this.RankStock2.push({
            stockA_name: rankstock2.stockA_name + "(" + rankstock2.stockA_id + ")",
            stockB_name: rankstock2.stockB_name + "(" + rankstock2.stockB_id + ")",
            diff: rankstock2.diff,
            down: rankstock2.down,
            order: rankstock2.order,
          })
        })
        res.data.relation_up.forEach((relatestock1) => {
          this.RelateStock1.push({
            stockA_name: relatestock1.stockA_name + "(" + relatestock1.stockA_id + ")",
            stockB_name: relatestock1.stockB_name + "(" + relatestock1.stockB_id + ")",
            diff: relatestock1.diff,
            up: relatestock1.up,
            order: relatestock1.order,
          })
        })
        res.data.relation_down.forEach((relatestock2) => {
          this.RelateStock2.push({
            stockA_name: relatestock2.stockA_name + "(" + relatestock2.stockA_id + ")",
            stockB_name: relatestock2.stockB_name + "(" + relatestock2.stockB_id + ")",
            diff: relatestock2.diff,
            down: relatestock2.down,
            order: relatestock2.order,
          })
        })
      })
  },

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

.grid-content {
  border-radius: 10px;
  overflow-x: auto;
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