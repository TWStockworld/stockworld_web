<template>
  <el-row class="favorite1">
    <el-col :lg="6" :sm="6" :xs="24">
      <UserMenu />
    </el-col>
    <el-col :lg="6" :sm="6" :xs="24">
      <h1 class="FavoriteTitle">最愛</h1>
      <el-row class="favorite2">
        <el-col class="favorite3">
          <div class="grid-content bg-purple-light">
            <div class="favorite4">
              <h3>上市水泥類股-成分股即時資訊</h3>
              <el-table :data="StockFavorite" border stripe style="width: 100%" max-height="250"
                :default-sort="{ prop: 'code', prop: 'time' }">
                <el-table-column prop="code" label="代號" sortable width="93">
                </el-table-column>
                <el-table-column prop="name" label="名稱" width="93">
                </el-table-column>
                <el-table-column prop="FinalPrice" label="成交價" width="93">
                </el-table-column>
                <el-table-column prop="UPandDown" label="漲跌" width="93">
                </el-table-column>
                <el-table-column prop="UPandDownAmplitude" label="漲跌幅" width="93">
                </el-table-column>
                <el-table-column prop="buy" label="買進" width="93">
                </el-table-column>
                <el-table-column prop="sell" label="賣出" width="93">
                </el-table-column>
                <el-table-column prop="opening" label="開盤" width="93">
                </el-table-column>
                <el-table-column prop="ReceivedYesterday" label="昨收" width="93">
                </el-table-column>
                <el-table-column prop="volume" label="成交量" width="93">
                </el-table-column>
                <el-table-column prop="time" label="時間" sortable width="93">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";

export default {
  name: "Favorite",
  components: {
    UserMenu,
  },
  data() {
    return {
      StockFavorite: [
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

<style scoped>
.FavoriteTitle {
  font-size: 50px;
  margin: auto;
  color: #23995c;
}

.favorite1 {
  z-index: -1;
  position: fixed;
  top: 9%;
  left: 25%;
  width: 75%;
  height: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
}

.favorite2 {
  width: 70%;
  /* margin: auto; */
  margin-top: 10%;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.favorite3 {
  border-radius: 4px;
}
</style>