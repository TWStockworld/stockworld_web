<template>
  <el-row class="helpsupport1">
    <el-col  :lg="6" :sm="6" :xs="24">
      <UserMenu />
    </el-col>
    <el-col :lg="18" :sm="18" :xs="24">
      <h1 class="HelpSupportTitle">幫助</h1>
    <el-row class="helpsupport2">
      <el-col class="helpsupport3">
        <div class="helpsupport4">
          1.股票網站的功能??
        </div>
        <div class="helpsupport5">
          目前這個股票分析網站注重於股票分析的技術，
          所以網站上的一些功能沒有很完整，
          但分析股票這方面有專家從網路上爬去大量股票資料，
          再利用資料庫以及程式的運算來達到專業的分析， 透過vue3來顯示在網站上。
        </div>
        <div class="helpsupport4">
          2.分析是怎麼分析?? 
        </div>
        <div class="helpsupport5">
          我們的專家會透過網路上抓取大兩股票的資料，
          再利用電腦去運算股票的走向，
          譬如:你選的A公司漲了，你選的B公司過了幾天可能漲的機率有多少%
          我們就是在研究利用分析來推測出漲幅的機率
        </div>
      </el-col>
    </el-row>
    </el-col>
  </el-row>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";

export default {
  name: "Help_Support",
  components: {
    UserMenu,
  },
};
</script>


<style scoped>
.helpsupport1 {
  z-index: -1;
  position: fixed;
  top: 9%;
  left: 25%;
  width: 75%;
  height: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
}
.HelpSupportTitle {
  font-size: 50px;
  margin: auto;
  color: #23995c;
}
.helpsupport2 {
  width: 70%;
  /* margin: auto; */
  margin-top: 10%;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
}
.helpsupport4 {
  font-size: 40px;
  color: red;
}
.helpsupport5 {
  font-size: 30px;
  color: black;
}
</style>