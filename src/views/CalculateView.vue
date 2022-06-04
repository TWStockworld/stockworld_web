<template>
  <el-form @submit.prevent="cal">
    <div class="form-group">
      <div class="demo-date-picker">
        <div class="block">
          <span class="demonstration">開始日</span>
          <el-date-picker
            v-model="startdate"
            type="date"
            placeholder="Pick a day"
          />
        </div>
        <div class="block">
          <span class="demonstration">結束日</span>
          <el-date-picker
            v-model="enddate"
            type="date"
            placeholder="Pick a day"
          />
        </div>
        <div class="block">
          <span class="demonstration">相差日</span>
          <el-input v-model="diff" placeholder="輸入數字" />
        </div>
      </div>
      <el-button plain type="primary" native-type="submit">送出</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      startdate: "",
      enddate: "",
      diff: "",
    };
  },
  methods: {
    cal() {
      this.axios
        .post("https://stockworld.ddns.net/api/stock/cal_stock", {
          startdate: this.startdate,
          enddate: this.enddate,
          diff: this.diff,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
