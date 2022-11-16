<template>
  <div class="LB1">

    <el-button @click="ranking" :class="[ $route.params.name=='ranking' ? 'select': '']">
      <span>
        <img :src="require('@/assets/img/ranking.svg')" style="width: 40%" />
        關係度總排行

      </span>
    </el-button>

    <el-button @click="sort" :class="[$route.params.name == 'sort' ? 'select' : '']">
      <span>
        <img :src="require('@/assets/img/sort.svg')" style="width: 40%" />
        台股分類
      </span>
    </el-button>

    <el-button @click="tsmc" :class="[$route.params.name == 'tsmc' ? 'select' : '']">
      <span>
        <img :src="require('@/assets/img/tsmc.png')" style="width: 40%" />
        台積電
      </span>
    </el-button>

    <el-button @click="HHcar" :class="[$route.params.name == 'HHcar' ? 'select' : '']">
      <span>
        <img :src="require('@/assets/img/HHcar.png')" style="width: 40%" />
        鴻海電動車
      </span>

    </el-button>

    <el-button @click="meta" :class="[$route.params.name == 'meta' ? 'select' : '']">
      <span>
        <img :src="require('@/assets/img/meta.png')" style="width: 40%" />
        元宇宙概念股
      </span>
    </el-button>

    <el-button @click="ic" :class="[$route.params.name == 'ic' ? 'select' : '']">
      <span>
        <img :src="require('@/assets/img/ic.png')" style="width: 40%" />
        IC設計產業
      </span>
    </el-button>

  </div>
</template>
<script>
export default {
  methods: {
    ranking() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'ranking',
        }
      });
    },
    sort() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'sort',
        }
      });
    },
    tsmc() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'tsmc',
        }
      });
    },
    HHcar() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'HHcar',
        }
      });
    },
    meta() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'meta',
        }
      });
    },
    ic() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'ic',
        }
      });
    },
  },
};
</script>

<style scoped>
.el-button {
  background-color: #ffffff69;
  height: 50px;
  font-size: 2vh;

}

.el-button span {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
}

.select {
  border-radius: 10px;
  background: linear-gradient(to left, #72b6fa 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
  color: white;
}


@keyframes movepoint1 {
  0% {
    background-position: left;
  }

}

@media only screen and (max-width: 1200px) {
  .LB1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    margin: 3% 2% 5% 2%;
  }

  .el-button {
    width: 100%;
  }

  .leftbulletin_li {
    display: inline;

  }



  .LB1::-webkit-scrollbar {
    background-color: #f5f5f500;
  }

  .LB1::-webkit-scrollbar-thumb {
    border: 6px solid transparent;
    border-radius: 100px;
    background-color: #8070d4;
    background-clip: content-box;
  }
}

@media only screen and (min-width: 1200px) {
  .el-button {
    margin-left: 0;
  }

  .LB1 {
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-evenly;
    align-items: center;
  }

  .el-button {
    width: 50%;
  }

  .leftbulletin_ul {
    list-style-type: none;
    /* height: 100vh; */
    /* overflow-y: scroll; */
  }

  .leftbulletin_ul::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
  }

  .leftbulletin_ul::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 100px;
    background-color: #8070d4;
    background-clip: content-box;
  }


}
</style>
