<template>
    <div id="container1">
    <h3>註冊</h3>
    <el-form @submit.prevent="register">
    <input type="username" id="inputUsername" v-model="name" placeholder="名字"  />
     <div class="tab"></div>
     <input type="account" id="inputAccount" v-model="account" placeholder="帳號"  />
     <div class="tab"></div>
     <input type="password" id="inputPassword" v-model="password" placeholder="密碼" />
     <div class="tab"></div>
     <input type="email" id="inputEmail" v-model="email" placeholder="Email" />
     <div class="tab"></div>
    
        <el-button type="primary" class="submit" @click="register" >註冊</el-button>
     </el-form> 
    </div> 
</template>


<script>



export default {
  data() {
     return {
        name: "",
        account: "",
        password: "",
        email: "",     
    };
  }, 
 // mounted(){
    
 // },
  methods:{
    register(){
      if(this.name === ''|| this.account === '' || this.password === '' || this.email === ''){
        alert('名字、帳號、密碼、信箱不能為空')
      }else{
        this.axios
        .post("https://stockworld.ddns.net/api/auth/register",{
            name: this.name,
            account: this.account,
            password: this.password,
            email: this.email,
        })
          
        .then((res) => {
          console.log(res);
          alert ('註冊成功')
          if(res.status == '200' ){
            this.$router.push('/pm25')
            }
          })
        
        .catch(function(error) {
          if (error.response) { 
            console.log(error.response.status);
             if(error.response.status == '401'){
                alert ('資料填寫錯誤')
              }else if(error.response.status == '402'){
                alert('帳號名稱重複!')
              }
          }
        });
      }   
    },  
 }

}



</script>


<style>
*{
  font-family:微軟正黑體;  
}
h3, #inputAccount, #inputEmail,#inputUsername, #inputPassword{
  width: 200px;
  height: 20px;
  margin: 10px;
  color: #23995c;
}
#container1{
  //margin: 50px;
  padding: 10px;
  width: 230px;
  height: 320px;
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
