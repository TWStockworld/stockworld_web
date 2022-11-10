<template>
    <el-row class="sort">
        <el-button v-for="category in categories" :key="category.id" @click="go(category.id)">
            {{ category.category }}
        </el-button>
    </el-row>

</template>
  
<script>
export default {
    data() {
        return {
            categories: [],
        };
    },
    methods: {
        go(stock_id) {
            this.$router.push({
                name: 'aboutstock',
                params: {
                    stockid: stock_id,
                }
            });
        },
    },
    mounted() {
        this.axios
            .get("/api/stock/get_stock_category")
            .then((res) => {
                console.log(res.data.success);
                this.categories = res.data.success;
            })
    }
};
</script>
<style scoped>
@media only screen and (max-width: 768px) {
    .sort {
        height: 100vh;
    }
}

@media only screen and (min-width: 768px) {
    .sort {
        display: flex;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        align-content: space-around;
        justify-content: center;
    }
}
</style>
  