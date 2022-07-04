<template>

  <div>
    <h2>登入</h2>
    <el-form @submit.prevent="login">
      <div class="form-group">
        <el-input v-model="name" placeholder="帳號" />
        <el-input v-model="password" placeholder="密碼, 至少有8位" />
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
h2, #inputUsername, #inputPassword{
  width: 200px;
  height: 20px;
  margin: 10px;
  color: #23995c;
}

</style>
