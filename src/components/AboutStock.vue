<template>
  <el-row class="aboutstock">
    <el-col :lg="10" :sm="24" :xs="24">
      <Tradeviewchart />
      <!-- <div class="grid-content bg-purple-light">
        <div class="tradingview-widget-container">
          <div id="tradingview_3242b"></div>
          <div class="tradingview-widget-copyright">
            <a
              href="https://tw.tradingview.com/symbols/NASDAQ-AAPL/"
              rel="noopener"
              target="_blank"
            ></a>
          </div>

          <component
            :is="'script'"
            type="text/javascript"
            src="https://s3.tradingview.com/tv.js"
          ></component>
          <component :is="'script'" type="text/javascript">
            new TradingView.widget({ "width": 800, "height": 500, symbol:
            "NASDAQ:AAPL", interval: "D", timezone: "Etc/UTC", theme: "light",
            style: "1", locale: "zh_TW", toolbar_bg: "#f1f3f6",
            enable_publishing: false, allow_symbol_change: true, container_id:
            "tradingview_3242b", });
          </component>
        </div>
      </div> -->
    </el-col>

    <el-col :lg="14" :sm="24" :xs="24">
      <el-row>
        <div class="grid-content bg-purple-light">
          <div class="table1">
            <h3>相關度排行</h3>
            <el-table :data="RankStock1" border stripe style="width: 55.5%" max-height="150"
              :default-sort="{ prop: 'rank1' }">
              <el-table-column prop="UP" label="UP" width="67">
              </el-table-column>
              <el-table-column prop="rank1" label="排行" sortable width="90">
              </el-table-column>

              <el-table-column prop="code1" label="代號" width="90">
              </el-table-column>

              <el-table-column prop="name1" label="名稱" width="90">
              </el-table-column>

              <el-table-column prop="VS" label="VS" width="90"></el-table-column>

              <el-table-column prop="code2" label="代號" width="90">
              </el-table-column>

              <el-table-column prop="name2" label="名稱" width="90">
              </el-table-column>

              <el-table-column prop="day" label="天數" width="90">
              </el-table-column>

              <el-table-column prop="follow" label="追蹤" width="86">
              </el-table-column>
            </el-table>

            <el-table :data="RankStock2" border stripe style="width: 55.5%" max-height="150"
              :default-sort="{ prop: 'rank2' }">
              <el-table-column prop="DOWN" label="DOWN" sortable width="67">
              </el-table-column>
              <el-table-column prop="rank2" label="排行" width="90">
              </el-table-column>

              <el-table-column prop="code3" label="代號" width="90">
              </el-table-column>

              <el-table-column prop="name3" label="名稱" width="90">
              </el-table-column>

              <el-table-column prop="VS" label="VS" width="90">
              </el-table-column>

              <el-table-column prop="code4" label="代號" width="90">
              </el-table-column>

              <el-table-column prop="name4" label="名稱" width="90">
              </el-table-column>

              <el-table-column prop="day" label="天數" width="90">
              </el-table-column>

              <el-table-column prop="follow" label="追蹤" width="86">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-row>
      <el-row>
        <div class="grid-content bg-purple-light">
          <div class="table2">
            <h3>上市水泥類股-成分股即時資訊</h3>
            <el-table :data="StockClassification" border stripe style="width: 100%" max-height="200"
              :default-sort="{ prop: 'code', prop: 'time' }">
              <el-table-column prop="code" label="代號" sortable width="85">
              </el-table-column>
              <el-table-column prop="name" label="名稱" width="85">
              </el-table-column>
              <el-table-column prop="FinalPrice" label="成交價" width="85">
              </el-table-column>
              <el-table-column prop="UPandDown" label="漲跌" width="85">
              </el-table-column>
              <el-table-column prop="UPandDownAmplitude" label="漲跌幅" width="85">
              </el-table-column>
              <el-table-column prop="buy" label="買進" width="85">
              </el-table-column>
              <el-table-column prop="sell" label="賣出" width="85">
              </el-table-column>
              <el-table-column prop="opening" label="開盤" width="85">
              </el-table-column>
              <el-table-column prop="ReceivedYesterday" label="昨收" width="85">
              </el-table-column>
              <el-table-column prop="volume" label="成交量" width="85">
              </el-table-column>
              <el-table-column prop="time" label="時間" sortable width="85">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Tradeviewchart from "@/components/Tradeviewchart.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutStock",
  components: {
    Tradeviewchart,
  },
  data() {
    return {
      RankStock1: [
        {
          rank1: "1",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
        {
          rank1: "2",
          code1: "1717",
          name1: "長興",
          code2: "1711",
          name2: "永光",
          day: "3",
          follow: "",
        },
        {
          rank1: "3",
          code1: "5434",
          name1: "崇越",
          code2: "1717",
          name2: "長興",
          day: "3",
          follow: "",
        },
        {
          rank1: "4",
          code1: "8091",
          name1: "翔名",
          code2: "5434",
          name2: "崇越",
          day: "3",
          follow: "",
        },
        {
          rank1: "8",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
        {
          rank1: "6",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
        {
          rank1: "7",
          code1: "1171",
          name1: "永光",
          code2: "3010",
          name2: "華立",
          day: "3",
          follow: "",
        },
      ],
      RankStock2: [
        {
          rank2: "1",
          code3: "1171",
          name3: "永光",
          code4: "3010",
          name4: "華立",
          day: "3",
          follow: "",
        },
        {
          rank2: "2",
          code3: "1717",
          name3: "長興",
          code4: "1711",
          name4: "永光",
          day: "3",
          follow: "",
        },
        {
          rank2: "3",
          code3: "5434",
          name3: "崇越",
          code4: "1717",
          name4: "長興",
          day: "3",
          follow: "",
        },
        {
          rank2: "4",
          code3: "8091",
          name3: "翔名",
          code4: "5434",
          name4: "崇越",
          day: "3",
          follow: "",
        },
        {
          rank2: "8",
          code3: "1171",
          name3: "永光",
          code4: "3010",
          name4: "華立",
          day: "3",
          follow: "",
        },
        {
          rank2: "6",
          code3: "1171",
          name3: "永光",
          code4: "3010",
          name4: "華立",
          day: "3",
          follow: "",
        },
        {
          rank2: "7",
          code3: "1171",
          name3: "永光",
          code4: "3010",
          name4: "華立",
          day: "3",
          follow: "",
        },
      ],
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
});
</script>

<style>
.aboutstock {
  z-index: 1;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.tradingview-widget-copyright {
  font-size: 13px !important;
  line-height: 32px !important;
  text-align: center !important;
  vertical-align: middle !important;
  font-family: -apple-system, BlinkMacSystemFont, "Trebuchet MS", Roboto, Ubuntu,
    sans-serif !important;
  color: #9db2bd !important;
}

.tradingview-widget-copyright .blue-text {
  color: #2962ff !important;
}

.tradingview-widget-copyright a {
  text-decoration: none !important;
  color: #9db2bd !important;
}

.tradingview-widget-copyright a:visited {
  color: #9db2bd !important;
}

.tradingview-widget-copyright a:hover .blue-text {
  color: #1e53e5 !important;
}

.tradingview-widget-copyright a:active .blue-text {
  color: #1848cc !important;
}

.tradingview-widget-copyright a:visited .blue-text {
  color: #2962ff !important;
}
</style>