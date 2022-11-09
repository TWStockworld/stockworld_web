<template>
  <el-row class="bulletin_el-row">
    <el-col :xs="24" :sm="24" :lg="4">
      <LeftBulletin />
    </el-col>
    <el-col :xs="24" :sm="24" :lg="20" class="bulletin_right-col">
      <Ranking v-if="this.now == 'ranking'" :stock_calculate_groups_id="stock_calculate_groups_id" />
      <Sorting v-if="this.now == 'sort'" />
      <BulletinDetail v-if="this.now != 'ranking' && this.now != 'sort'" :bulletin_id="bulletin_id"
        :stock_calculate_groups_id="stock_calculate_groups_id" />
    </el-col>
  </el-row>
</template>

<script>
import LeftBulletin from "@/components/LeftBulletin.vue";
import Ranking from "@/components/Ranking.vue";
import BulletinDetail from "@/components/BulletinDetail";
import Sorting from "@/components/Sorting";

export default {
  props: ["stock_calculate_groups_id"],
  components: {
    LeftBulletin,
    Ranking,
    BulletinDetail,
    Sorting
  },
  data() {
    return {
      timer: '',
      value: false,
      now: this.$route.params.name,
      bulletin_id: ''
    };
  },
  watch: {
    '$route.params.name': {
      handler: function () {
        this.now = this.$route.params.name
        switch (this.now) {
          case 'tsmc':
            this.bulletin_id = 1
            break;

          case 'HHcar':
            this.bulletin_id = 2
            break;
          case 'meta':
            this.bulletin_id = 3
            break;
          case 'ic':
            this.bulletin_id = 4
            break;
        }
      },
      deep: true,
      immediate: true
    },
  }
};
</script>
<style lang="css" src="@/assets/css/bulletin_margintop.css" scoped>

</style>

<style scoped>

</style>