<template>
    <div id="simple_chart" style="height: 100%  " />
</template>
  
<script>
import { dispose, init } from 'klinecharts';
// import generatedDataList from '../utils/generatedDataList';

export default {
    name: 'SimpleChart',
    props: ["stockid"],
    data() {
        return {
            stockdatas: [],
        }
    },
    mounted: function () {
        this.axios
            .post("/api/stock/get_stock", {
                stock_id: this.stockid
            })
            .then((res) => {
                console.log(res);
                // Init chart
                const chart = init('simple_chart');
                // Create main technical indicator MA
                chart.createTechnicalIndicator('MA', false, { id: 'candle_pane' });
                // Create sub technical indicator VOL
                chart.createTechnicalIndicator('VOL');
                res.data.success.forEach((stock_data) => {
                    // Fill data
                    const date = new Date(stock_data.date);
                    const timestamp = date.getTime();
                    this.stockdatas.push({
                        close: stock_data.close,
                        high: stock_data.up,
                        low: stock_data.down,
                        open: stock_data.open,
                        timestamp: timestamp,
                        volume: stock_data.volume,
                    })

                })
                chart.applyNewData(this.stockdatas);
                chart.setStyleOptions({
                    grid: {
                        show: true,
                        horizontal: {
                            show: true,
                            size: 1,
                            color: '#393939',
                            // 'solid'|'dash'
                            style: 'dash',
                            dashValue: [2, 2]
                        },
                        vertical: {
                            show: true,
                            size: 1,
                            color: '#393939',
                            // 'solid'|'dash'
                            style: 'dash',
                            dashValue: [2, 2]
                        }
                    },
                    area: {

                    }
                })
            })

    },
    destroyed: function () {
        dispose('simple_chart');
    }
}
</script>
<style scoped>
div {
    background-color: #F2F3F5;
}
</style>