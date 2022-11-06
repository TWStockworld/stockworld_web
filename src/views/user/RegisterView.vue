<template>
  <div id="register">
    <div class="register_computer_size">
      <el-row>
        <!--<el-col :span="6" :offset="4"-->
        <el-col :span="8">
          <!--<div class="grid-content ep-bg-purple" />-->
          <div class="" />
          <div id="container1">
            <h3>註冊</h3>
            <div class="tab1"></div>
            <el-form @submit.prevent="register">
              <input type="username" id="inputUsername" v-model="name" placeholder="名字" required />
              <div class="tab"></div>
              <input type="account" id="inputAccount" v-model="account" placeholder="帳號" required />
              <div class="tab"></div>
              <input type="password" id="inputPassword" v-model="password" placeholder="密碼" required />
              <div class="tab"></div>
              <input type="email" id="inputEmail" v-model="email" placeholder="Email" required />
              <div class="tab"></div>

              <el-button type="primary" class="submit" @click="register">註冊</el-button>
            </el-form>
          </div>
        </el-col>
        <el-col :span="16">
          <!--<div class="grid-content ep-bg-purple" />-->
          <div class="" />
          <div id="container1">
            <!--<div class="picture2">
            <img
              alt="anime"
              src="@/assets/img/anime.jpg"
              style="width: 90%; border-radius: 10px"
            />
            </div>
            -->
            <img alt="anime" src="@/assets/img/anime.jpg" style="height: 100%; width: 100%; border-radius: 10px" />
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="register_cellphone_size">
      <div class="" />
      <div id="container1">
        <h3>註冊</h3>
        <div class="tab1"></div>
        <el-form @submit.prevent="register">
          <input type="username" id="inputUsername" v-model="name" placeholder="名字" required />
          <div class="tab"></div>
          <input type="account" id="inputAccount" v-model="account" placeholder="帳號" required />
          <div class="tab"></div>
          <input type="password" id="inputPassword" v-model="password" placeholder="密碼" required />
          <div class="tab"></div>
          <input type="email" id="inputEmail" v-model="email" placeholder="Email" required />
          <div class="tab"></div>

          <el-button type="primary" class="submit" @click="register">註冊</el-button>
        </el-form>
      </div>
    </div>

  </div>
</template>

<script>
//////
import { ElMessage } from "element-plus";
//////

export default {
  data() {
    return {
      name: "",
      account: "",
      password: "",
      email: "",
    };
  },

  methods: {
    register() {
      if (
        this.name === "" ||
        this.account === "" ||
        this.password === "" ||
        this.email === ""
      ) {
        ElMessage.error("名字、帳號、密碼、信箱不能為空");
      } else {
        this.axios
          .post("/api/auth/register", {
            name: this.name,
            account: this.account,
            password: this.password,
            email: this.email,
          })

          .then((res) => {
            console.log(res);
            ElMessage({
              message: "Congrats, this is a success message.",
              type: "success",
            });
            this.$router.push("/personalfile");
          })

          .catch(function (error) {
            if (error.response) {
              console.log(error.response.status);
              if (error.response.status == "401") {
                ElMessage.error("資料填寫錯誤");
              } else if (error.response.status == "402") {
                ElMessage({
                  message: "帳號名稱重複!",
                  type: "warning",
                });
              }
            }
          });
      }
    },
  },
};
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .register_computer_size {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .register_cellphone_size {
    display: none;
  }
}

h3 {
  margin: auto;
  color: #23995c;
}

#inputAccount,
#inputEmail,
#inputUsername,
#inputPassword {
  width: 200px;
  height: 30px;
  margin: 10px;
  color: #23995c;
}

.tab {
  height: 20px;
  margin: 10px;
}

.submit {
  color: white;
  background: #23995c;
  width: 200px;
  height: 30px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 0px;
}

.submit:hover {
  background: #23995c;
}

input {
  padding: 5px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 5px;
}

.tab1 {
  height: 20px;
  margin: 10px;
}

/**/
#container1 {
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
}

#register {
  width: 70%;
  /* margin: auto; */
  margin-top: 6%;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  height: 100vh;
}

/**/
</style>
