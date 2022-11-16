<template>
  <div :id="'show' + componentKey"></div>
</template>
<script>
import { createChart } from "lightweight-charts";

export default {
  name: "Chart",
  props: ["stockA_datas", "stockB_datas", "componentKey"],
  data() {
    return {};
  },
  mounted() {
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
