<template>
  <div id="container">
    <h2>登入</h2>
    <el-form @submit.prevent="login">
      <div class="form-group">
        <el-input type="account" id="inputAccount" v-model="account" placeholder="帳號" required/>
        <el-input
          type="password"
          id="inputPassword"
          v-model="password"
          placeholder="密碼, 至少有8位"
        required/>
        <el-button plain type="primary" native-type="submit">登入</el-button>
      </div>
    </el-form>  
  </div>
</template>

<script>
//////
import { ElMessage } from "element-plus";
//////
export default {
  data() {
    return {
      account: "",
      password: "",
      token: "",
    };
  },
  methods: {
    login() {
      this.axios
        .post("https://stock.bakerychu.com/api/auth/login", {
          account: this.account,
          password: this.password,
        })

        .then((res) => {
          console.log(res);
          const token = res.data.token;
          this.$Cookies.set("token", token), { expires: 1 };
          if (this.$Cookies.get("token")) {
            this.$router.push("/");
          }
        })

        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
            if (error.response.status == "401") {
              ElMessage.error("帳密錯誤");
            }
          }
        });
    },
  },
};
</script>

<style>
* {
  font-family: 微軟正黑體;
}
h2,
#inputAccount,
#inputPassword {
  width: 200px;
  height: 20px;
  margin: 10px;
  color: #23995c;
}
#container {
  //margin: 50px;
  padding: 10px;
  width: 230px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  border-top: 10px solid #23995c;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);

  /*定位對齊*/
  position: relative;
  margin: auto;
  top: 100px;
  //text-align:center;
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
  background: #219e53;
}
input {
  padding: 5px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 5px;
}
</style>
