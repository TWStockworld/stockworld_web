<template>
    <div id="simple_chart" style="height: 600px" />
</template>
  
<script>
import { dispose, init } from 'klinecharts';
// import generatedDataList from '../utils/generatedDataList';

export default {
    name: 'SimpleChart',
    data() {
        return {
            stockdatas: [],
        }
    },
    mounted: function () {
        this.axios
            .post("/api/stock/get_stock")
            /*
             close: this.close,
             up: this.up,
             low: this.low,
             open: this.open,
             timestamp: this.date,
             volume: this.volume,
             */
            .then((res) => {
                console.log(res);
                // Init chart
                const chart = init('simple_chart');
                // Create main technical indicator MA
                chart.createTechnicalIndicator('MA', false, { id: 'candle_pane' });
                // Create sub technical indicator VOL
                chart.createTechnicalIndicator('VOL');
                // Fill data
                chart.applyNewData([
                    {
                        close: 4977.33,
                        high: 4979.94,
                        low: 4971.34,
                        open: 4973.2,
                        timestamp: 1587660060000,
                        volume: 194,
                    },
                ]);
            })


        /*
        {
            close: 4977.33,
            high: 4979.94,
            low: 4971.34,
            open: 4973.2,
            timestamp: 1587660060000,
            volume: 194,
        },
        {
            close: 4977.93,
            high: 4977.93,
            low: 4974.2,
            open: 4976.53,
            timestamp: 1587660120000,
            volume: 197,
        },
        {
            close: 4966.77,
            high: 4968.53,
            low: 4962.2,
            open: 4963.88,
            timestamp: 1587660180000,
            volume: 28,
        },
        {
            close: 4961.56,
            high: 4972.61,
            low: 4961.28,
            open: 4961.28,
            timestamp: 1587660240000,
            volume: 184,
        },
        {
            close: 4964.19,
            high: 4964.74,
            low: 4961.42,
            open: 4961.64,
            timestamp: 1587660300000,
            volume: 191,
        },
        {
            close: 4968.93,
            high: 4972.7,
            low: 4964.55,
            open: 4966.96,
            timestamp: 1587660360000,
            volume: 105,
        },
        {
            close: 4979.31,
            high: 4979.61,
            low: 4973.99,
            open: 4977.06,
            timestamp: 1587660420000,
            volume: 35,
        },
        {
            close: 4977.02,
            high: 4981.66,
            low: 4975.14,
            open: 4981.66,
            timestamp: 1587660480000,
            volume: 135,
        },
        {
            close: 4985.09,
            high: 4988.62,
            low: 4980.3,
            open: 4986.72,
            timestamp: 1587660540000,
            volume: 76,
        },
        */

    },
    destroyed: function () {
        dispose('simple_chart');
    }
}
</script>