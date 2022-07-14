<template>
  <div id="container">
    <h2>登入</h2>
    <el-form @submit.prevent="login">
      <div class="form-group">
        <el-input id="inputAccount" v-model="account" placeholder="帳號" required/>
        <el-input
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
import { ElMessageBox } from "element-plus";
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
      // if (this.account == "" || this.password == "") {
      //   alert("帳號或密碼不能為空");
      // }
      this.axios
        .post("https://stockworld.ddns.net/api/auth/login", {
          account: this.account,
          password: this.password,
        })

        .then((res) => {
          console.log(res);
          const token = res.data.token;
          this.$Cookies.set("token", token), { expires: 1 };
          if (this.$Cookies.get("token")) {
            this.$router.push("/pm25");
          }
        })

        .catch(function (error) {
          if (error.response) {
            console.log(error.response.status);
            if (error.response.status == "401") {
              // alert("資料填寫錯誤");
              //////

              // ElMessage({
              //   showClose: true,
              //   message: "資料填寫錯誤",
              //   type: "error",
              // });
              ElMessageBox.alert("資料填寫錯誤", "錯誤", {
                confirmButtonText: "OK",
              });

              //////
            }
          }
        });
    },
    // getData() {
    //   // 先從瀏覽器 cookie 取得 token
    //   this.token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, "$1");
    //   const api = "https://stockworld.ddns.net/api/auth/login";

    //   // https://github.com/axios/axios#global-axios-defaults
    //   // 並且 header 按照後端 api 文件的規格要求填上 Bearer token 字樣
    //   this.axios.defaults.headers.common.Authorization = `this.token`;
    //   this.axios.get(api).then((res) => {
    //     console.log(res);
    //   });
    // },
    // logout() {
    //   // 清除瀏覽器 cookie 的 Token
    //   document.cookie = `loginToken = ""; expires = "";`;
    // <button type="button" class="btn btn-primary" @click="logout">
    //       Logout
    //     </button>
    // },
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
