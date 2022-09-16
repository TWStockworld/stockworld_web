<template>
  <el-row class="personalfile1">
    <el-col :lg="6" :sm="6" :xs="24">
      <UserMenu />
    </el-col>
    <el-col :lg="18" :sm="18" :xs="24">
      <h1 class="PersonalFileTitle">個人資料</h1>
      <el-row class="personalfile2">
        <el-col class="personalfile3">
          <div class="personalfile4">使用者名稱: JO JO</div>
          <div class="personalfile4">性別: 男生</div>
          <div class="personalfile4">生日: 2115年5月7日</div>
          <div class="personalfile4">Gmail: xxxxxx@gmail.com</div>
          <div class="personalfile4">電話: 09xxxxxxxx</div>
        </el-col>
      </el-row>
    </el-col>

  </el-row>
</template>

<script>
import UserMenu from "@/components/UserMenu.vue";

export default {
  name: "PersonalFile",
  components: {
    UserMenu,
  },
};
</script>


<style>
.personalfile1 {
  z-index: -1;
  position: fixed;
  top: 9%;
  left: 25%;
  width: 75%;
  height: 100%;
  background: rgb(255, 255, 255);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
}

.PersonalFileTitle {
  font-size: 50px;
  margin: auto;
  color: #23995c;
}

.personalfile2 {
  width: 70%;
  /* margin: auto; */
  margin-top: 5%;
  margin-right: auto;
  margin-bottom: auto;
  margin-left: 20%;
}

/* .personalfile4 {
  font-size: 30px;
} */
.space1 {
  height: 40px;
  margin: 10px;
}

.personalfile2 .personalfile3 .personalfile4 {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
  font-size: 1.3em;
  text-decoration: none;
  color: #555;
}
</style>