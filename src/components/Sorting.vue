<template>
    <el-button v-for="category in categories" :key="category.id" @click="go(category.id)">
        {{ category.category }}
    </el-button>
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
@media only screen and (max-width: 768px) {}

@media only screen and (min-width: 768px) {}
</style>
  