<template>
  <div class="table1">
    <h3>相關度排行</h3>
    <el-table
      :data="RankStock1"
      border
      stripe
      style="width: 31%"
      max-height="200"
    >
      <h3>UP</h3>
      <el-table-column prop="rank1" label="排行" width="70"> </el-table-column>

      <el-table-column prop="code1" label="代號" width="70"> </el-table-column>

      <el-table-column prop="name1" label="名稱" width="70"> </el-table-column>

      <el-table-column prop="VS" label="VS" width="70"> </el-table-column>

      <el-table-column prop="code2" label="代號" width="70"> </el-table-column>

      <el-table-column prop="name2" label="名稱" width="70"> </el-table-column>

      <el-table-column prop="day" label="天數" width="70"> </el-table-column>

      <el-table-column prop="follow" label="追蹤" width="70">
      </el-table-column>
    </el-table>
    <el-table
      :data="RankStock2"
      border
      stripe
      style="width: 31%"
      max-height="200"
    >
      <h3>DOWN</h3>
      <el-table-column prop="rank2" label="排行" width="70"> </el-table-column>

      <el-table-column prop="code3" label="代號" width="70"> </el-table-column>

      <el-table-column prop="name3" label="名稱" width="70"> </el-table-column>

      <el-table-column prop="VS" label="VS" width="70"> </el-table-column>

      <el-table-column prop="code4" label="代號" width="70"> </el-table-column>

      <el-table-column prop="name4" label="名稱" width="70"> </el-table-column>

      <el-table-column prop="day" label="天數" width="70"> </el-table-column>

      <el-table-column prop="follow" label="追蹤" width="70">
      </el-table-column>
    </el-table>
  </div>
  <div class="table2">
    <h3>上市水泥類股-成分股即時資訊</h3>
    <el-table
      :data="StockClassification"
      border
      stripe
      style="width: 100%"
      max-height="200"
      :default-sort="{ prop: 'code', prop: 'time'}"
    >
      <el-table-column prop="code" label="代號" sortable width="80">
      </el-table-column>
      <el-table-column prop="name" label="名稱" width="70"> </el-table-column>
      <el-table-column prop="FinalPrice" label="成交價" width="70">
      </el-table-column>
      <el-table-column prop="UPandDown" label="漲跌" width="70">
      </el-table-column>
      <el-table-column prop="UPandDownAmplitude" label="漲跌幅" width="70">
      </el-table-column>
      <el-table-column prop="buy" label="買進" width="70"> </el-table-column>
      <el-table-column prop="sell" label="賣出" width="70"> </el-table-column>
      <el-table-column prop="opening" label="開盤" width="70">
      </el-table-column>
      <el-table-column prop="ReceivedYesterday" label="昨收" width="70">
      </el-table-column>
      <el-table-column prop="volume" label="成交量" width="70">
      </el-table-column>
      <el-table-column prop="time" label="時間" sortable width="80"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
};
</script>

<style>
.table1 {
  position: absolute;
  top: 150%;
  left: 10%;
}
.table2 {
  position: absolute;
  top: 500%;
  left: 10%;
}
</style>
