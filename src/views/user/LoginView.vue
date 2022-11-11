<template>
  <div id="login">
    <div class="login_computer_size">
      <el-row>
        <el-col :span="16">
          <div id="container">
            <img alt="anime" src="@/assets/img/anime.jpg" style="height: 100%; width: 100%; border-radius: 10px" />
          </div>
        </el-col>

        <el-col :span="8">
          <div id="container">
            <h2>登入</h2>
            <div class="tab2"></div>
            <el-form @submit.prevent="login">
              <div class="form-group">
                <input type="account" id="inputAccount1" v-model="account" placeholder="帳號" required />
                <div class="tab2"></div>
                <input type="password" id="inputPassword1" v-model="password" placeholder="密碼, 至少有8位" required />
                <div class="tab2"></div>
                <el-button plain type="primary" native-type="submit1">登入</el-button>
              </div>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="login_cellphone_size">
      <div id="container">
        <div class="tab2"></div>
        <h2>登入</h2>
        <el-row class="changepassword2">
          <el-col class="changepassword3">
            <div class="changepassword4">
              <el-form @submit.prevent="login">
                <div class="form-group">
                  <div class="tab2"></div>
                  <input type="account" id="inputAccount1" v-model="account" placeholder="帳號" required />
                  <div class="tab2"></div>
                  <input type="password" id="inputPassword1" v-model="password" placeholder="密碼, 至少有8位" required />
                  <div class="tab2"></div>
                  <el-button plain type="primary" native-type="submit1">登入</el-button>
                </div>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
//////
import { ElMessage } from "element-plus";
//////
export default {
  props: ["keytest"],
  data() {
    return {
      account: "",
      password: "",

    };
  },
  methods: {
    login() {
      this.axios
        .post("/api/auth/login", {
          account: this.account,
          password: this.password,
        })
        .then((res) => {
          console.log(res);
          const token = res.data.token;
          this.$cookies.set("token", token, "1h");
          this.$router.push("/personalfile");
          this.$emit('keytest');
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
@media only screen and (max-width: 768px) {
  .login_computer_size {
    display: none;
  }

  h2 {
    margin: auto;
    color: #23995c;
  }

  #changepassword1 {
    z-index: -1;
    position: fixed;
    top: 9%;
    left: 25%;
    width: 75%;
    height: 100%;
    background: rgb(255, 255, 255);
    box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
  }

  .changepassword2 {
    width: 70%;
    /* margin: auto; */
    margin-top: 8%;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
  }

  #container {
    height: 60vh;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  }

  #inputOldPassword1 {
    width: 200px;
    height: 30px;
    margin: 10px;

    color: #23995c;
  }

  #inputNewPassword1 {
    width: 200px;
    height: 30px;
    margin: 10px;

    color: #23995c;
  }

  #inputNewPassword2 {
    width: 200px;
    height: 30px;
    margin: 10px;

    color: #23995c;
  }

  .tab2 {
    height: 40px;
    margin: 10px;
  }

  input {
    padding: 5px;
    border: none;
    border: solid 1px #ccc;
    border-radius: 5px;
  }
}

@media only screen and (min-width: 768px) {
  .login_cellphone_size {
    display: none;
  }

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
}




#login {
  width: 70%;
  /* margin: auto; */
  margin-top: 6%;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: auto;
  height: 100vh;
}
</style>

