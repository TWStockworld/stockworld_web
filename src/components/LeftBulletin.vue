<template>
  <div class="LB1">
    <ul class="leftbulletin_ul">
      <li class="leftbulletin_li">
        <el-button @click="ranking" style="width: auto; height: 50px; font-size: 2vh"
          :class="[ this.$route.params.name=='ranking' ? 'select': '']">關係度總排行</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="tsmc" style="width: auto; height: 50px; font-size: 2vh"
          :class="[this.$route.params.name == 'tsmc' ? 'select' : '']">台積電</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="HHcar" style="width: auto; height: 50px; font-size: 2vh"
          :class="[this.$route.params.name == 'HHcar' ? 'select' : '']">鴻海電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="meta" style="width: auto; height: 50px; font-size: 2vh"
          :class="[this.$route.params.name == 'meta' ? 'select' : '']">元宇宙概念股</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="car" style="width: auto; height: 50px; font-size: 2vh"
          :class="[this.$route.params.name == 'car' ? 'select' : '']">電動車</el-button>
      </li>
      <li class="leftbulletin_li">
        <el-button @click="ic" style="width: auto; height: 50px; font-size: 2vh"
          :class="[this.$route.params.name == 'ic' ? 'select' : '']">IC設計產業</el-button>
      </li>
      <!-- <li class="leftbulletin_li" :class="[ this.$route.path=='/cloud' ? 'select': '']">
        <el-button @click="cloud" style="width: auto; height: 50px; font-size: 2vh">雲端相關</el-button>
      </li>
      <li class="leftbulletin_li" :class="[ this.$route.path=='/city' ? 'select8': '']">
        <el-button @click="city" style="width: auto; height: 50px; font-size: 2vh">智慧城市</el-button>
      </li>
      <li class="leftbulletin_li" :class="[ this.$route.path=='/internet' ? 'select9': '']">
        <el-button @click="internet" style="width: auto; height: 50px; font-size: 2vh">互聯網</el-button>
      </li> -->
    </ul>
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
    car() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'car',
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
    cloud() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'cloud',
        }
      });
    },
    city() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'city',
        }
      });
    },
    internet() {
      this.$router.push({
        name: 'bulletin',
        params: {
          name: 'internet',
        }
      });
    },
  },
};
</script>

<style scoped>
.select {
  border-radius: 10px;
  background: linear-gradient(to left, #72b6fa 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
  color: white;
}

.select2 {
  background-color: red;
  background: linear-gradient(to left, rgb(255, 98, 0) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

.select3 {
  background-color: red;
  background: linear-gradient(to left, rgb(255, 225, 0) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

.select4 {
  background-color: red;
  background: linear-gradient(to left, rgb(136, 255, 0) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

.select5 {
  background-color: red;
  background: linear-gradient(to left, rgb(0, 255, 242) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

.select6 {
  background-color: red;
  background: linear-gradient(to left, rgb(13, 0, 255) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

.select7 {
  background-color: red;
  background: linear-gradient(to left, rgb(137, 3, 255) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

.select8 {
  background-color: red;
  background: linear-gradient(to left, rgb(255, 3, 234) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

.select9 {
  background-color: red;
  background: linear-gradient(to left, rgb(85, 78, 78) 50%, lightblue 50%) right;
  background-size: 200%;
  transition: .5s ease-in-out;
  animation: movepoint1 1s;
}

@keyframes movepoint1 {
  0% {
    background-position: left;
  }

}

@media only screen and (max-width: 1200px) {
  .leftbulletin_ul {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 8rem;
    grid-gap: 3rem;
    list-style-type: none;
    width: 100%;
    overflow-x: scroll;
  }

  .leftbulletin_li {
    display: inline;

  }

  .leftbulletin_li1 {
    display: inline;
    background-color: brown;
  }

  .leftbulletin_ul::-webkit-scrollbar {
    background-color: #f5f5f500;
  }

  .leftbulletin_ul::-webkit-scrollbar-thumb {
    border: 6px solid transparent;
    border-radius: 100px;
    background-color: #8070d4;
    background-clip: content-box;
  }
}

@media only screen and (min-width: 1200px) {
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

  .LB1 {
    position: relative;
    left: 0%;
    line-height: 100px;

  }
}
</style>
