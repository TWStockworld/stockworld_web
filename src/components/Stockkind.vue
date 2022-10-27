<template>
  <div class="stockkind_computer" :class="[ this.$route.path=='/ranking' ? 'move': '']">
    <el-row>
      <el-col :lg="12" :sm="24" :xs="24">
        <el-row class="AllrankData_A1">
          <el-table :data="AllrankData_A1_Up">
            <el-table-column prop="rank" label="排行" sortable />

            <el-table-column prop="code1" label="代號" />

            <el-table-column prop="name1" label="名稱" />

            <el-table-column prop="VS" label="VS" />

            <el-table-column prop="code2" label="代號" />

            <el-table-column prop="name2" label="名稱" />

            <el-table-column prop="up" label="漲" />

            <el-table-column prop="follow" label="追蹤" width="180" />
          </el-table>
        </el-row>
        <el-row class="AllrankData_A2">
          <el-table :data="AllrankData_A2_Up">
            <el-table-column prop="rank" label="排行" sortable />

            <el-table-column prop="code1" label="代號" />

            <el-table-column prop="name1" label="名稱" />  

            <el-table-column prop="VS" label="VS" />

            <el-table-column prop="code2" label="代號" />

            <el-table-column prop="name2" label="名稱" />

            <el-table-column prop="up" label="漲" />

            <el-table-column prop="follow" label="追蹤" width="180" />
          </el-table>
        </el-row>
      </el-col>
      <el-col :lg="12" :sm="24" :xs="24">
        <el-row class="AllrankData_B1">
          <el-table :data="AllrankData_B1_Down">
            <el-table-column prop="rank2" label="排行" sortable />

            <el-table-column prop="code3" label="代號" />

            <el-table-column prop="name3" label="名稱" />

            <el-table-column prop="VS" label="VS" />

            <el-table-column prop="code4" label="代號" />

            <el-table-column prop="name4" label="名稱" />

            <el-table-column prop="down" label="跌" />

            <el-table-column prop="follow" label="追蹤" width="180" />
          </el-table>
        </el-row>
        <el-row class="AllrankData_B2">
          <el-table :data="AllrankData_B2_Down">
            <el-table-column prop="rank2" label="排行" sortable />

            <el-table-column prop="code3" label="代號" />

            <el-table-column prop="name3" label="名稱" />

            <el-table-column prop="VS" label="VS" />

            <el-table-column prop="code4" label="代號" />

            <el-table-column prop="name4" label="名稱" />

            <el-table-column prop="down" label="跌" />

            <el-table-column prop="follow" label="追蹤" width="180" />
          </el-table>
        </el-row>
      </el-col>
    </el-row>
    
  </div>
</template>
<script>

export default {
  name: "Stockkind",
  data() {
    return {
      rank: "",
      code1: "",
      name1: "",
      code2: "",
      name2: "",
      up: "",
      rank2: "",
      code3: "",
      name3: "",
      code4: "",
      name4: "",
      down: "",
    };
  },
  mounted() {
    this.axios
      .get("https://stock.bakerychu.com/api/stock/get_all_stock_probability"), {
        rank: this.probability_up.order,
        code1: this.probability_up.stockA_id,
        name1: this.probability_up.stockA_name,
        code2: this.probability_up.stockB_id,
        name2: this.probability_up.stockB_name,
        up: this.probability_up.up,
        rank2: this.probability_down.order,
        code3: this.probability_down.stockA_id,
        name3: this.probability_down.stockA_name,
        code4: this.probability_down.stockB_id,
        name4: this.probability_down.stockB_name,
        down: this.probability_down.down,
      }
      .then((res) => {
        console.log(res.data);
        this.probability_up.order = res.data.order;
        this.probability_up.stockA_id = res.data.stockA_id;
        this.probability_up.stockA_name = res.data.stockA_name;
        this.probability_up.stockB_id = res.data.stockB_id;
        this.probability_up.stockB_name = res.data.stockB_name;
        this.probability_up.up = res.data.up;
        this.probability_down.order = res.data.order;
        this.probability_down.stockA_id = res.data.stockA_id;
        this.probability_down.stockA_name = res.data.stockA_name;
        this.probability_down.stockB_id = res.data.stockB_id;
        this.probability_down.stockB_name = res.data.stockB_name;
        this.probability_down.down = res.data.down;
      })
  }
  
};
</script>
<style scoped>
@media only screen and (min-width: 1200px) {
  .stockkind_computer {
    box-shadow: 5px 7px #00000026;
    position: absolute;
    width: 60%;
    top: 5%;
    left: 25%;
    font-size: 20px;
  }
  .AllrankData_A1 {
    top:0%;
  }
  .AllrankData_A2 {
    top:10%;
  }
  .AllrankData_B1 {
    top:0%;
    left:25%;
  }
  .AllrankData_B2 {
    top:10%;
    left:25%;
  }
  .stockkind_cellphone {
    display: none;
  }

  .move {
    animation: movepoint1 2s ease-in-out;
  }

  @keyframes movepoint1 {
    0% {
      left: 100%;
    }

    50% {
      left: 25%;
    }

  }
}

@media only screen and (max-width: 1200px) {
  .stockkind_computer {
    display: none;
  }

  .stockkind_cellphone {
    /* position: absolute;
    width: 70%;
    top: 25vh;
    left: 15%;
    font-size: 20px; */
  }
  .move1 {
    animation: movepoint2 2s ease-in-out;
  }

  @keyframes movepoint2 {
    0% {
      left: 100%;
    }

    50% {
      left: 15%;
    }

  }
}
/*
mounted() {
    this.axios
      .get(url), {
        rank: this.order_up,
        code1: this.stockA_id_up,
        name1: this.stockA_name_up,
        code2: this.stockB_id_up,
        name2: this.stockB_name_up,
        up: this.up,
        rank2: this.order_down,
        code3: this.stockA_id_down,
        name3: this.stockA_name_down,
        code4: this.stockB_id_down,
        name4: this.stockB_name_down,
        down: this.down,
      }
      .then((res) => {
        console.log(res.data);
        this.order_up = res.data.probability_up.order;
        this.stockA_id_up = res.data.probability_up.stockA_id;
        this.stockA_name_up = res.data.probability_up.stockA_name;
        this.stockB_id_up = res.data.probability_up.stockB_id;
        this.stockB_name_up = res.data.probability_up.stockB_name;
        this.up = res.data.probability_up.up;
        this.order_down = res.data.probability_down.order;
        this.stockA_id_down = res.data.probability_down.stockA_id;
        this.stockA_name_down = res.data.probability_down.stockA_name;
        this.stockB_id_down = res.data.probability_down.stockB_id;
        this.stockB_name_down = res.data.probability_down.stockB_name;
        this.down = res.data.probability_down.down;
      })
  }
*/ 
</style>



 