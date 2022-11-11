<template>
  <el-main style="padding:0" v-loading="loading" element-loading-text="讀取資料中"
    element-loading-background="rgba(0, 0, 0, 0.1)">
    <h3> {{ result }}</h3>
    <div id="show0" v-if="this.componentKey == 0" style="height: 300px;"></div>
    <div id="show1" v-if="this.componentKey == 1" style="height: 300px;"></div>
  </el-main>
</template>
<script>
import { createChart } from "lightweight-charts";

export default {
  name: "RankingChart",
  props: ["startdate", "enddate", "diff", "stockA_id", "stockB_id", "componentKey", "result", "stock_calculate_groups_id"],
  data() {
    return {
      stockA_datas: [],
      stockB_datas: [],
      real_diff: 0,
      loading: true
    };
  },

  watch: {
    stock_calculate_groups_id: function () {
      this.loading = true
      document.getElementById("show0").innerHTML = '';
      document.getElementById("show1").innerHTML = '';
    },
    'startdate': {
      handler: function () {
        console.log(this.startdate, this.enddate, this.diff, this.stockA_id, this.stockB_id);
        this.axios
          .post("/api/stock/cal_stock", {
            startdate: this.startdate,
            enddate: this.enddate,
            diff: this.diff,
            stockA_id: this.stockA_id,
            stockB_id: this.stockB_id,
          })
          .then((response) => {
            console.log(response.data);

            this.stockA_datas = response.data.stockA_datas;
            this.stockB_datas = response.data.stockB_datas;
            this.real_diff = response.data.real_diff;

          });
      },
      deep: true,
    },
    'stockB_datas': {
      handler: function () {
        this.loading1 = true;
        this.loading2 = true;

        this.RankStock1 = []
        this.RankStock2 = []
        this.RelateStock1 = []
        this.RelateStock2 = []
        this.stock_table = []

        const chartProperties = {
          height: 300,
          timeScale: {
            timeVisible: false,
            secondsVisible: true,
          },
          localization: {
            dateFormat: "yyyy/MM/dd",
          },
          rightPriceScale: {
            scaleMargins: {
              top: 0.1,
              bottom: 0.1,
            },
            mode: 2,
          },
          // layout: {
          //   backgroundColor: "#100841",
          //   textColor: "#ffffff",
          // },
        };
        var domElement = '';
        if (this.componentKey == 0) {
          domElement = document.getElementById("show0");

        } else {
          domElement = document.getElementById("show1");
        }
        const chart = createChart(domElement, chartProperties);
        // const candlestickSeries = chart.addCandlestickSeries();

        // const cdata = this.stockA_datas.map((stock) => {
        //   return {
        //     time: stock["date"],
        //     open: stock["open"],
        //     high: stock["up"],
        //     low: stock["down"],
        //     close: stock["close"],
        //   };
        // });

        // candlestickSeries.setData(cdata);
        const lineSeries_A = chart.addLineSeries();
        lineSeries_A.applyOptions({
          color: "rgba(255, 192, 0, 1)", //黃
          lineWidth: 3,
        });
        const dataA = this.stockA_datas.map((stock) => {
          return {
            time: stock["date"],
            value: stock["close"],
          };
        });
        lineSeries_A.setData(dataA);

        const lineSeries_B = chart.addLineSeries();
        lineSeries_B.applyOptions({
          color: "rgba(67, 83, 254, 1)", //藍
          lineWidth: 3,
        });
        const dataB = this.stockB_datas.map((stock) => {
          var d = '';
          if (this.move == true) {
            d = new Date(stock["date"]);
            d.setDate(d.getDate() - this.real_diff + 1);
            d = d.toLocaleDateString();
          } else {
            d = stock["date"];
          }
          return {
            time: d,
            value: stock["close"],
          };
        });
        lineSeries_B.setData(dataB);
        this.loading = false
      },
      deep: true,
    }
  },
};
</script>
<style scoped>
#show {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 1200px) {

  h3 {
    margin-top: 5%;
    margin-bottom: 5%;
  }
}
</style>
