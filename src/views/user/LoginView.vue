<template>
  <div id="login">
    <el-row>
      <el-col :span="16"
        ><div class="" />
        <div id="container">
          <img
            alt="anime"
            src="@/assets/img/anime.jpg"
            style="height: 100%; width: 100%; border-radius: 10px"
          />
        </div>
      </el-col>
      <el-col :span="8"
        ><div class="" />
        <div id="container">
          <h2>登入</h2>
          <div class="tab2"></div>
          <el-form @submit.prevent="login">
            <div class="form-group">
              <input
                type="account"
                id="inputAccount1"
                v-model="account"
                placeholder="帳號"
                required
              />
              <div class="tab2"></div>
              <input
                type="password"
                id="inputPassword1"
                v-model="password"
                placeholder="密碼, 至少有8位"
                required
              />
              <div class="tab2"></div>
              <el-button plain type="primary" native-type="submit1"
                >登入</el-button
              >
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
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

<style scoped>
h2 {
  margin: auto;
  color: #23995c;
}

#inputAccount1 {
  width: 200px;
  height: 30px;
  margin: 10px;
  color: #23995c;
}
#inputPassword1 {
  width: 200px;
  height: 30px;
  margin: 10px;
  color: #23995c;
}
.tab2 {
  height: 40px;
  margin: 10px;
}

#container {
  height: 100%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
}

input {
  padding: 5px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 5px;
}
#login {
  width: 70%;
  /* margin: auto; */
  margin-top: 6%;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
}
</style>

