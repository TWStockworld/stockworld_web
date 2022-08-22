<template>

  <div id="changepassword1">
    <UserMenu/>
    <h1 class="ChangePasswordTitle">更改密碼</h1>
    <el-row class="changepassword2">
      <el-col class="changepassword3">
        <div class="changepassword4">
          <el-form @submit.prevent>
            <div class="form-group">
              <input
                type="password"
                id="inputOldPassword1"
                v-model="oldpassword"
                placeholder="舊的密碼"
                required
              />
              <div class="tab2"></div>
              <input
                type="password"
                id="inputNewPassword1"
                v-model="newpassword1"
                placeholder="新密碼, 至少有8位"
                required
              />
              <div class="tab2"></div>
              <input
                type="password"
                id="inputNewPassword2"
                v-model="newpassword2"
                placeholder="再次輸入新密碼，必須符合新密碼"
                required
              />
              <div class="tab2"></div>
              <el-button plain type="primary" native-type="submit1"
                >確認修改</el-button
              >
            </div>
          </el-form>
        </div>
      </el-col> 
    </el-row>
  </div>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";

export default {

  name: "ChangePassword",
  components: {
    UserMenu,
  },
   data() {
    return {
      oldpassword: "",
      newpassword1: "",
      newpassword2: "",
    };
  },
};
</script>

<style>
#changepassword1 {
  z-index: -1;
  position: fixed;
  top: 9%;
  left: 25%;
  width: 75%;
  height: 100%;
  background: rgb(240, 240, 240);
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

.ChangePasswordTitle {
  font-size: 50px;
  margin: auto;
  color: #23995c;
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
</style>