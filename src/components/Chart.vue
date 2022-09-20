<template>
  <div id="show"></div>
</template>
<script>
import { createChart } from "lightweight-charts";

export default {
  name: "Chart",
  props: ["stockA_datas", "stockB_datas"],
  data() {
    return {};
  },
  mounted() {
    const chartProperties = {
      width: 1000,
      height: 400,
      timeScale: {
        timeVisible: false,
        secondsVisible: true,
      },
      localization: {
        dateFormat: "yyyy/MM/dd",
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
      return {
        time: stock["date"],
        value: stock["close"],
      };
    });
    lineSeries_B.setData(dataB);
  },
};
</script>
<style scoped>
#show {
  display: flex;
  justify-content: center;
}
</style>
