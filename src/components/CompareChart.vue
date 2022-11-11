<template>
  <el-main style="padding:0 ;text-align: center;" v-loading="loading" element-loading-text="讀取資料中"
    element-loading-background="rgba(0, 0, 0, 0.1)">
    <h3>{{ result }}</h3>
    <div id="show" style="height: 55vh;"></div>
  </el-main>
</template>
<script>
import { createChart } from "lightweight-charts";

export default {
  name: "Chart",
  props: ["startdate", "enddate", "diff", "stockA_id", "stockB_id", "componentKey", "upordown"],
  data() {
    return {
      stockA_datas: [],
      stockB_datas: [],
      result: "",
      real_diff: 0,
      loading: true
    };
  },

  watch: {
    'componentKey': {
      handler: function () {
        console.log(this.startdate, this.enddate, this.diff, this.stockA_id, this.stockB_id);
        this.axios
          .post("/api/stock/cal_stock", {
            startdate: this.startdate,
            enddate: this.enddate,
            diff: this.diff,
            stockA_id: this.stockA_id,
            stockB_id: this.stockB_id,
            upordown: this.upordown
          })
          .then((response) => {
            console.log(response.data);

            this.result = response.data.success;
            this.stockA_datas = response.data.stockA_datas;
            this.stockB_datas = response.data.stockB_datas;
            this.real_diff = response.data.real_diff;

          });
      },
      deep: true,
      immediate: true
    },
    'result': {
      handler: function () {
        this.loading1 = true;
        this.loading2 = true;

        this.RankStock1 = []
        this.RankStock2 = []
        this.RelateStock1 = []
        this.RelateStock2 = []
        this.stock_table = []

        const chartProperties = {
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
        const domElement = document.getElementById("show");
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
</style>
