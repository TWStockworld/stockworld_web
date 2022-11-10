<template>
    <div class="padding">
        <el-main style="padding:0" v-loading="loading" element-loading-text="讀取資料中"
            element-loading-background="rgba(0, 0, 0, 0.1)">
            <el-row style="    justify-content: center">
                <h3>股票名稱 : {{ stock_name }} &nbsp&nbsp 收盤價 : {{ close }} &nbsp&nbsp 成交量: {{ volume }} &nbsp&nbsp 今日漲幅 :
                    {{
                            day_change
                    }} % </h3>

            </el-row>
            <el-row>
                <el-col :lg="1" :sm="24" :xs="24">
                    <div class="chart-tools-bar" style="">
                        <div class="icon-wrapper" v-on:click="setShapeType('horizontalStraightLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="5" y="11.5" width="14" height="1" rx="0.5"></rect>
                                <ellipse cx="12" cy="12" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('horizontalRayLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="4.5" y="11.5" width="15" height="1" rx="0.5"></rect>
                                <ellipse cx="6" cy="12" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="13" cy="12" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('horizontalSegment')">
                            <svg viewBox="0 0 24 24">
                                <rect x="5" y="11.5" width="14" height="1" rx="0.5"></rect>
                                <ellipse cx="6" cy="12" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="18" cy="12" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('verticalStraightLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="11.5" y="4" width="1" height="16" rx="0.5"></rect>
                                <ellipse cx="12" cy="12" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('verticalRayLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="11.5" y="4.5" width="1" height="15" rx="0.5"></rect>
                                <ellipse cx="12" cy="18" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="12" cy="11" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('verticalSegment')">
                            <svg viewBox="0 0 24 24">
                                <rect x="11.5" y="5" width="1" height="14" rx="0.5"></rect>
                                <ellipse cx="12" cy="18" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="12" cy="6" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('straightLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="5.989593505859375" y="17.303306579589844" width="16" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-10.480973816180722,9.303303481670355)">
                                </rect>
                                <ellipse cx="14" cy="10" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="10" cy="14" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('rayLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="6.989593505859375" y="16.303314208984375" width="15" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-9.480979210977239,9.71751925443823)">
                                </rect>
                                <ellipse cx="13" cy="11" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="8" cy="16" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('segment')">
                            <svg viewBox="0 0 24 24">
                                <rect x="5.989593505859375" y="17.303298950195312" width="14" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-10.480968421384205,9.30330124707234)">
                                </rect>
                                <ellipse cx="16" cy="8" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="7" cy="17" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('priceLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="4.5" y="13.5" width="15" height="1" rx="0.5"></rect>
                                <ellipse cx="6" cy="14" rx="1.5" ry="1.5"></ellipse>
                                <path
                                    d="M8.314036947998046,12.235949340820312L10.985912947998047,12.235949340820312L10.985912947998047,11.517199340820312L10.151922947998047,11.517199340820312L10.151922947998047,7.735949340820312L9.497632947998047,7.735949340820312C9.214422947998047,7.917589340820312,8.915602947998046,8.030869340820313,8.464427947998047,8.108999340820313L8.464427947998047,8.661729340820312L9.274972947998046,8.661729340820312L9.274972947998046,11.517199340820312L8.314036947998046,11.517199340820312L8.314036947998046,12.235949340820312ZM11.581612947998046,12.235949340820312L14.556222947998048,12.235949340820312L14.556222947998048,11.493759340820311L13.597242947998048,11.493759340820311C13.386302947998047,11.493759340820311,13.093332947998046,11.517199340820312,12.864822947998046,11.546499340820311C13.675362947998046,10.724229340820312,14.347242947998048,9.831649340820313,14.347242947998048,9.001579340820312C14.347242947998048,8.151969340820312,13.788642947998046,7.610949340820312,12.948802947998047,7.610949340820312C12.343332947998046,7.610949340820312,11.946852947998046,7.845329340820312,11.532782947998047,8.290639340820313L12.024972947998048,8.778919340820313C12.247632947998046,8.525009340820313,12.511302947998047,8.308219340820312,12.835522947998047,8.308219340820312C13.261302947998047,8.308219340820312,13.501532947998047,8.593369340820313,13.501532947998047,9.044539340820313C13.501532947998047,9.757429340820313,12.792552947998047,10.618759340820311,11.581612947998046,11.726179340820313L11.581612947998046,12.235949340820312ZM16.460522947998047,12.360949340820312C17.312082947998046,12.360949340820312,18.026902947998046,11.894149340820313,18.026902947998046,11.048449340820312C18.026902947998046,10.431259340820311,17.642162947998045,10.050399340820313,17.144112947998046,9.911729340820312L17.144112947998046,9.882429340820313C17.612862947998046,9.696889340820313,17.882402947998045,9.331649340820313,17.882402947998045,8.823839340820312C17.882402947998045,8.032829340820312,17.300362947998046,7.610949340820312,16.44294294799805,7.610949340820312C15.921462947998046,7.610949340820312,15.495682947998047,7.821889340820313,15.110912947998047,8.151969340820312L15.565992947998048,8.722279340820313C15.825752947998048,8.460559340820312,16.083572947998046,8.308219340820312,16.401922947998045,8.308219340820312C16.77888294799805,8.308219340820312,16.99568294799805,8.525009340820313,16.99568294799805,8.892199340820312C16.99568294799805,9.319929340820313,16.730052947998047,9.610949340820312,15.921462947998046,9.610949340820312L15.921462947998046,10.247669340820313C16.88044294799805,10.247669340820313,17.138252947998048,10.530869340820313,17.138252947998048,10.991809340820312C17.138252947998048,11.407829340820314,16.833572947998046,11.642199340820312,16.38239294799805,11.642199340820312C15.974192947998047,11.642199340820312,15.657782947998047,11.433219340820312,15.392162947998047,11.161729340820312L14.978102947998046,11.743759340820311C15.290602947998046,12.097279340820313,15.765212947998048,12.360949340820312,16.460522947998047,12.360949340820312Z">
                                </path>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('parallelStraightLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="7.989593505859375" y="20.303314208984375" width="16" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-12.016513056401891,11.596198947183439)">
                                </rect>
                                <rect x="3.4586830139160156" y="15.292892456054688" width="16" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-9.800682931907204,6.924842852749634)">
                                </rect>
                                <ellipse cx="16" cy="13" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="12" cy="17" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="9.5" cy="10" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('priceChannelLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="5.989593505859375" y="17.303298950195312" width="16" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,-10.480968421384205,9.30330124707234)">
                                </rect>
                                <rect x="5.031974792480469" y="13.607009887695312" width="12" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,11.095440153447726,26.786762123917924)">
                                </rect>
                                <rect x="11.40380859375" y="19.303298950195312" width="12" height="1" rx="0.5"
                                    transform="matrix(0.7071067690849304,-0.7071067690849304,-0.7071067690849304,-0.7071067690849304,16.98959169711361,41.016502553537975)">
                                </rect>
                                <ellipse cx="14" cy="10" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="10" cy="14" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="15" cy="15" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <div class="icon-wrapper" v-on:click="setShapeType('fibonacciLine')">
                            <svg viewBox="0 0 24 24">
                                <rect x="4" y="6" width="16" height="1" rx="0.5"></rect>
                                <rect x="4" y="9" width="16" height="1" rx="0.5"></rect>
                                <rect x="4" y="15" width="16" height="1" rx="0.5"></rect>
                                <rect x="4" y="18" width="16" height="1" rx="0.5"></rect>
                                <rect x="4" y="12" width="16" height="1" rx="0.5"></rect>
                                <ellipse cx="12" cy="18.5" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="16" cy="6.5" rx="1.5" ry="1.5"></ellipse>
                                <ellipse cx="8" cy="6.5" rx="1.5" ry="1.5"></ellipse>
                            </svg>
                        </div>
                        <hr class="divider" />
                        <div class="icon-wrapper" v-on:click="removeAllShape()">
                            <svg viewBox="0 0 1024 1024" style="width: 34px; height: 34px;">
                                <path
                                    d="M256 333.872a28.8 28.8 0 0 1 28.8 28.8V768a56.528 56.528 0 0 0 56.544 56.528h341.328A56.528 56.528 0 0 0 739.2 768V362.672a28.8 28.8 0 0 1 57.6 0V768a114.128 114.128 0 0 1-114.128 114.128H341.328A114.128 114.128 0 0 1 227.2 768V362.672a28.8 28.8 0 0 1 28.8-28.8zM405.344 269.648a28.8 28.8 0 0 0 28.8-28.8 56.528 56.528 0 0 1 56.528-56.544h42.656a56.528 56.528 0 0 1 56.544 56.544 28.8 28.8 0 0 0 57.6 0 114.128 114.128 0 0 0-112.64-114.128h-45.648a114.144 114.144 0 0 0-112.64 114.128 28.8 28.8 0 0 0 28.8 28.8z">
                                </path>
                                <path
                                    d="M163.2 266.672a28.8 28.8 0 0 1 28.8-28.8h640a28.8 28.8 0 0 1 0 57.6H192a28.8 28.8 0 0 1-28.8-28.8zM426.672 371.2a28.8 28.8 0 0 1 28.8 28.8v320a28.8 28.8 0 0 1-57.6 0V400a28.8 28.8 0 0 1 28.8-28.8zM597.344 371.2a28.8 28.8 0 0 1 28.8 28.8v320a28.8 28.8 0 0 1-57.6 0V400a28.8 28.8 0 0 1 28.8-28.8z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </el-col>
                <el-col :lg="23" :sm="24" :xs="24">
                    <div id="simple_chart" />
                </el-col>
            </el-row>
        </el-main>
    </div>

</template>
  
<script>
import { dispose, init } from 'klinecharts';

export default {
    name: 'SimpleChart',
    props: ["res1", "stock_id"],
    data() {
        return {
            stockdatas: [],
            stock_name: "",
            day_change: "",
            volume: "",
            close: "",
            loading: true,
            last_stock_id: '',
            check: false,
            changepage: false
        }
    },
    // created() {
    //     this.$watch(
    //         () => ({
    //             check: this.check,
    //             changepage: this.changepage
    //         }),
    //         () => {
    //             if (this.check == true) {
    //                 dispose('simple_chart');
    //             }
    //         });
    // },

    watch: {
        'stock_id': {
            handler: function (stock_id) {

                dispose('simple_chart');

                this.changepage = true
                this.stockdatas = []
                this.last_stock_id = stock_id;
                this.loading = true;
                // document.getElementById('simple_chart').remove();
                this.stock_name = '';
                this.day_change = '';
                this.volume = '';
                this.close = '';
            },
            deep: true,
            immediate: true
        },

        res1: function (res1) {
            if (res1 != '') {
                console.log(this.res1);
                this.stockdatas = []
                if (this.res1.data != "") {

                    // Init chart
                    this.kLineChart = init('simple_chart');

                    // Create main technical indicator MA
                    this.kLineChart.createTechnicalIndicator('MA', false, { id: 'candle_pane' });
                    // Create sub technical indicator VOL
                    this.kLineChart.createTechnicalIndicator('VOL');
                    this.res1.data.stock_data.forEach((stock_data) => {
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
                    console.log(this.kLineChart.getDataList().length)
                    if (this.kLineChart.getDataList() == 0) {
                        this.kLineChart.applyNewData(this.stockdatas);
                    }
                    console.log(this.kLineChart.getDataList().length)

                    this.kLineChart.setStyleOptions({
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
                    });
                    this.check = true;
                    this.changepage = false;

                    this.stock_name = this.res1.data.stock_name;
                    this.day_change = this.res1.data.last_data.day_change.toFixed(2);
                    this.volume = this.res1.data.last_data.volume;
                    this.close = this.res1.data.last_data.close;
                }
                this.loading = false;
            }
        }
    },
    destroyed: function () {
        dispose('simple_chart');
    },
    methods: {
        setShapeType: function (shapeName) {
            this.kLineChart.createShape(shapeName)
        },
        removeAllShape() {
            this.kLineChart.removeShape()
        }
    },
}
</script>
<style scoped>
div {
    background-color: #F2F3F5;
}

@media only screen and (max-width: 1200px) {

    .chart-tools-bar {
        display: flex;
        align-items: center;
    }

    .icon-wrapper {
        width: 100%;
    }

    #simple_chart {
        height: 50vh;
    }
}

@media only screen and (min-width: 1200px) {
    .chart-tools-bar {
        width: 100%;
        display: inline-block;

    }

    #simple_chart {
        height: 100%;
    }

    .el-main {
        margin-top: 2%;
    }

    .padding {
        padding: 5%;
        background-color: #f2f3f500;
    }

}
</style>