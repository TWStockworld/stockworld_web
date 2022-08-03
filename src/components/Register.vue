<template>
  <el-row :gutter="20">
    <el-col :span="6" :offset="4"
      ><div class="grid-content ep-bg-purple" />
      <div id="container1">
        <h3>註冊</h3>
        <div class="tab1"></div>
        <el-form @submit.prevent="register">
          <input
            type="username"
            id="inputUsername"
            v-model="name"
            placeholder="名字"
            required
          />
          <div class="tab"></div>
          <input
            type="account"
            id="inputAccount"
            v-model="account"
            placeholder="帳號"
            required
          />
          <div class="tab"></div>
          <input
            type="password"
            id="inputPassword"
            v-model="password"
            placeholder="密碼"
            required
          />
          <div class="tab"></div>
          <input
            type="email"
            id="inputEmail"
            v-model="email"
            placeholder="Email"
            required
          />
          <div class="tab"></div>

          <el-button type="primary" class="submit" @click="register"
            >註冊</el-button
          >
        </el-form>
      </div>
    </el-col>
    <el-col :span="11" 
      ><div class="grid-content ep-bg-purple" />
      <div id="container1">
        <div class="picture2">
          <img alt="anime" src="../assets/anime.jpg" style="width: 90%;border-radius: 10px;" />
        </div>
      </div>
    </el-col>
  </el-row>
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
          .post("https://stock.bakerychu.com/api/auth/register", {
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

<style>
* {
  font-family: 微軟正黑體;
}
h3 {
  width: 100%;
  height: 70px;
  margin: 10px;
  color: #23995c;
}
#inputAccount,
#inputEmail,
#inputUsername,
#inputPassword {
  width: 200px;
  height: 20px;
  margin: 10px;
  color: #23995c;
}
#container1 {
  margin: 50px;
  padding: 10px;
  width: 100%;
  height: 526px;
  background-color: white;
  border-radius: 10px;
  border-top: 10px solid #23995c;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);

  /*定位對齊*/
  position: relative;
  margin: auto;
  top: 100px;
  text-align: center;
}
.tab {
  height: 5px;
  margin: 5px;
}
.system_name {
/*定位對齊*/
position: relative;
  margin: auto;
  top: 100px;
  text-align: center;
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

.picture2 {
  position: absolute;
  top: -10px;
  left: -50px;
  width: 988px;
 
}

.tab1 {
  height: 20px;
  margin: 10px;
}
</style>
