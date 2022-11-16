<template>
    <!-- :class="[$route.path == '/bulletin/tsmc' ? 'move' : '']" -->
    <el-row>

        <el-row>
            <el-col :xs="24" :sm="24" :lg="11">
                <img :src="require('@/assets/img/' + $route.params.name + '.png')" />
            </el-col>
            <el-col :xs="24" :sm="24" :lg="12">
                <el-main style="padding:0" v-loading="loading1" element-loading-text="讀取資料中"
                    element-loading-background="rgba(0, 0, 0, 0.1)">
                    <h3 style="background-color: white;">相關股票</h3>
                    <el-table :data="stocks" border stripe height="200" :default-sort="{ prop: 'rank' }"
                        empty-text="無相關資料">

                        <el-table-column prop="stock_name" label="股票">
                            <template v-slot="scope">
                                <router-link :to="{ path: '/aboutstock/' + scope.row.stock_id }">{{ scope.row.stock_name
                                }}
                                </router-link>
                            </template>

                        </el-table-column>

                        <el-table-column prop="stock_category" label="主類別">
                            <template v-slot="scope">
                                <router-link :to="{ path: '/aboutstock/' + scope.row.stock_category_id }">{{
                                        scope.row.stock_category
                                }}
                                </router-link>
                            </template>
                        </el-table-column>
                        <el-table-column prop="title" label="次類別" />


                    </el-table>
                </el-main>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="1" />

        </el-row>
        <el-row>
            <el-col :xs="24" :sm="24" :lg="1" />

            <el-col :xs="24" :sm="24" :lg="22">
                <div class="margintop">
                    <StockProbability :res2="res2" :bulletin_id="bulletin_id"
                        :stock_calculate_groups_id="stock_calculate_groups_id" />
                    <div class="box">
                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :lg="1" />

        </el-row>

    </el-row>

</template>
  
<script>
import StockProbability from "@/components/StockProbability.vue";

export default {
    name: "BulletinDetail",
    components: {
        StockProbability
    },
    props: ["bulletin_id", "stock_calculate_groups_id"],
    data() {
        return {
            timer: '',
            value: false,
            stocks: [],
            res2: '',
            loading1: true
        };
    },
    created() {
        this.$watch(
            () => ({
                stock_calculate_groups_id: this.stock_calculate_groups_id,
                bulletin_id: this.bulletin_id
            }),
            () => {

                this.stocks = []
                this.res2 = ''
                this.loading1 = true

                const get_stock_special_kind_detail = this.axios
                    .post("/api/stock/get_stock_special_kind_detail", {
                        bulletin_id: this.bulletin_id
                    });
                const get_stock_probability = this.axios
                    .post("/api/stock/get_stock_probability", {
                        show_zero_diff: 0,
                        bulletin_id: this.bulletin_id,
                        stock_calculate_groups_id: this.stock_calculate_groups_id
                    });
                this.axios.all([get_stock_special_kind_detail, get_stock_probability]).then(
                    this.axios.spread((res1, res2) => {
                        this.stocks = []
                        this.res2 = ''
                        res1.data.success.forEach((res1) => {
                            this.stocks.push({
                                stock_id: res1.stock_id,
                                stock_name: res1.stock_name + "\n(" + res1.stock_id + ")",
                                title: res1.title,
                                stock_category: res1.stock_category,
                                stock_category_id: res1.stock_category_id,
                            })
                        })
                        this.res2 = res2
                        this.loading1 = false
                    })
                );

            },
            { deep: true, immediate: true }
        );
    },

    // window.addEventListener("wheel", this.onScroll);
    // this.timer = setTimeout(this.get, 1000);
    // unmounted() {
    //     window.removeEventListener("wheel", this.onScroll);
    //     clearTimeout(this.timer);
    // },
    // methods: {
    //     get() {
    //         this.value = true;
    //     },
    //     onScroll(e) {
    //         if (this.value == true) {
    //             if (e.deltaY < 0) {
    //                 this.$router.push("/ranking");
    //             } else if (e.deltaY > 0) {
    //                 this.$router.push("/HHcar");
    //             }
    //         }
    //     },
    // },
};
</script>
<style lang="css" src="@/assets/css/bulletin_margintop.css" scoped>

</style>
  
<style scoped>
.el-row {
    width: 100%;
}

img {
    width: 50%;
}

@media only screen and (min-width: 1200px) {
    .picture {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .el-main {
        margin-top: 12%;

    }




    /* .picture {
        position: absolute;
        top: 25vh;
        width: 100%;
        display: inline-block;
        animation: movepoint 1.5s infinite alternate;
        -webkit-animation: movepoint 1.5s infinite alternate;
    } */

    @keyframes movepoint {
        0% {
            top: 25vh;
        }

        100% {
            top: 23vh;
        }

        0% {
            top: 25vh;
        }

    }

    .move {
        animation: movepoint1 2s ease-in-out;
    }

    @keyframes movepoint1 {
        0% {
            left: 100%;
        }

        50% {
            left: 0%;
        }

    }

    .margintop {
        margin-top: 2%;
    }
}

@media only screen and (max-width: 1200px) {



    .margintop {
        margin-top: 5%;
    }

}
</style>