<template>
    <el-row class="bulletin_el-row">
        <el-col :xs="24" :sm="24" :lg="4">
            <LeftBulletin />
        </el-col>
        <el-col :xs="24" :sm="24" :lg="20" class="bulletin_right-col">
            <el-row :class="[ this.$route.path=='/city' ? 'move': '']">
                <div class="tab10"></div>
                <div class="picture">
                    <img alt="city logo" src="@/assets/img/city.png" style="width: 25%" />
                </div>
                <el-col :xs="12" :sm="12">
                    <div class="RB1">
                        <el-button @click="dialogTableVisible = true" class="corrbutton1">半導體製程設備</el-button>
                        <el-dialog v-model="dialogTableVisible" title="相關度排行" width="60%">
                            <Competition />
                        </el-dialog>
                    </div>
                    <div class="RB2">
                        <el-button @click="dialogTableVisible = true" class="corrbutton2">電力工程</el-button>
                    </div>
                    <div class="RB3">
                        <el-button @click="dialogTableVisible = true" class="corrbutton3">無塵室工程</el-button>
                    </div>
                    <div class="RB4">
                        <el-button @click="dialogTableVisible = true" class="corrbutton4">探針</el-button>
                    </div>
                    <div class="RB5">
                        <el-button @click="dialogTableVisible = true" class="corrbutton5">光罩</el-button>
                    </div>
                </el-col>
                <el-col :xs="12" :sm="12">
                    <div class="RB6">
                        <el-button @click="dialogTableVisible = true" class="corrbutton6">矽晶圓</el-button>
                    </div>
                    <div class="RB7">
                        <el-button @click="dialogTableVisible = true" class="corrbutton7">耗材&化學品</el-button>
                    </div>
                    <div class="RB8">
                        <el-button @click="dialogTableVisible = true" class="corrbutton8">IC封測</el-button>
                    </div>
                    <div class="RB9">
                        <el-button @click="dialogTableVisible = true" class="corrbutton9">高階SOC前端</el-button>
                    </div>
                    <div class="RB10">
                        <el-button @click="dialogTableVisible = true" class="corrbutton10">半導體檢測</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>
<script>
import LeftBulletin from "@/components/LeftBulletin.vue";
import Competition from "@/components/Competition.vue";

export default {
    name: "city",
    components: {
        LeftBulletin,
        Competition,
    },
    data() {
        return {
            dialogTableVisible: false,
            timer: '',
            value: false
        };
    },
    mounted() {
        window.addEventListener("wheel", this.onScroll);
        this.timer = setTimeout(this.get, 1000);
    },
    unmounted() {
        window.removeEventListener("wheel", this.onScroll);
        clearTimeout(this.timer);
    },
    methods: {
        get() {
            this.value = true;
        },
        onScroll(e) {
            if (this.value == true) {
                if (e.deltaY < 0) {
                    this.$router.push("/cloud");
                } else if (e.deltaY > 0) {
                    console.log("scrolling down")
                }
            }
        },
    },
};
</script>
<style lang="css" src="@/assets/css/bulletin_margintop.css" scoped>

</style>
<style scoped>
@media only screen and (min-width: 1200px) {
    .el-row {
        height: 100%;
    }

    .RB1 {
        position: absolute;
        top: 10vh;
        left: 35%;
    }

    .RB2 {
        position: absolute;
        top: 10vh;
        left: 58%;
    }

    .RB3 {
        position: absolute;
        top: 25vh;
        left: 26%;
    }

    .RB4 {
        position: absolute;
        top: 25vh;
        left: 67%;
    }

    .RB5 {
        position: absolute;
        top: 40vh;
        left: 20%;
    }

    .RB6 {
        position: absolute;
        top: 40vh;
        left: 75%;
    }

    .RB7 {
        position: absolute;
        top: 55vh;
        left: 26%;
    }

    .RB8 {
        position: absolute;
        top: 55vh;
        left: 67%;
    }

    .RB9 {
        position: absolute;
        top: 70vh;
        left: 35%;
    }

    .RB10 {
        position: absolute;
        top: 70vh;
        left: 58%;
    }

    .picture {
        position: absolute;
        top: 25vh;
        width: 100%;
        display: inline-block;
        animation: movepoint 1.5s infinite alternate;
        -webkit-animation: movepoint 1.5s infinite alternate;
    }

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
}

@media only screen and (max-width: 1200px) {
    .tab10 {
        height: 15vh;
    }

}
</style>