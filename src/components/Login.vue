<template>

  <div id="logintest1">
    <h2>登入</h2>
    <el-form @submit.prevent="login">
      <div class="form-group">
        <el-input id="inputUsername" v-model="name" placeholder="帳號" />
        <el-input id="inputPassword" v-model="password" placeholder="密碼, 至少有8位" />
        <el-button plain type="primary" native-type="submit">登入</el-button>
      </div>
    </el-form>
  </div>

</template>

<script>

export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.axios
        .post("https://stockworld.ddns.net/api/auth/login", {
          name: this.name,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};

</script>

<style>

*{
  font-family:微軟正黑體;  
}
h2,#inputUsername, #inputPassword{
  width: 200px;
  height: 20px;
  margin: 10px;
  color: #23995c;
}
#logintest1{
  //margin: 50px;
  padding: 10px;
  width: 230px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  border-top: 10px solid #23995c;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  
   /*定位對齊*/
  position:relative;   
  margin: auto;
  top: 100px;
 //text-align:center; 
}
.system_name{
  /*定位對齊*/
  position:relative;   
  margin: auto;
  top: 100px;
  text-align:center; 
}

.submit{
  color: white;  
  background: #23995c;
  width: 200px;
  height: 30px;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 0px;
}

.submit:hover{
  background: #219e53;
}
input{
  padding: 5px;
  border: none; 
  border:solid 1px #ccc;
  border-radius: 5px;
}

</style>
