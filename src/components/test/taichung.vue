<template>
<!--
  
-->
  <div>
    <button @click.once="get_pm25_data">取得</button>
    <div class="diplay-ex">
      <el-row :gutter="20">
        <div v-for="airdata in airdatas" :key="airdata">
          <el-col :span="20">
            <div class="grid-content bg-purple-dark">
              <el-header
                ><h1>{{ airdata.site }}</h1></el-header
              >
              <el-main>取得時間: {{ airdata.datacreationdate }}</el-main>
              <el-main>PM2.5: {{ airdata.pm25 }}</el-main>
              <el-main>顏色安全程度: {{ airdata.color }}</el-main>
            </div>
          </el-col>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
const url =
  "https://data.epa.gov.tw/api/v2/aqx_p_02?offset=0&limit=100&api_key=4c4ba288-de84-42fc-9553-c7897a7ba32a";

export default {
  name: "taichung",
  data() {
    return {
      airdatas: [],
    };
  },
  methods: {
    get_pm25_data() {
      this.axios.get(url).then((res) => {
        console.log(res);
        res.data.records.forEach((element) => {
          if (element.county == "臺中市") {
            if (0 <= element.pm25 && element.pm25 <= 50) {
              element.color = "綠色";
            } else if (51 <= element.pm25 && element.pm25 <= 100) {
              element.color = "黃色";
            } else if (101 <= element.pm25 && element.pm25 <= 150) {
              element.color = "橘色";
            } else if (151 <= element.pm25 && element.pm25 <= 200) {
              element.color = "紅色";
            } else if (201 <= element.pm25 && element.pm25 <= 300) {
              element.color = "紫色";
            } else {
              element.color = "褐紅色";
            }
            this.airdatas.push({
              site: element.site,
              county: element.count,
              datacreationdate: element.datacreationdate,
              pm25: element.pm25,
              color: element.color,
            });
          }
        });
      });
    },
  },
  mounted() {},
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
