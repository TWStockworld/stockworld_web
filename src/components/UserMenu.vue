<template>
  <div>
    <div class="top">
      <div class="photo">
        <img class="img-responsive2" src="@/assets/img/logo.png" />
      </div>
      <!-- <p class="username2">Jo Jo</p> -->
    </div>
    <div class="sidebar1">
      <router-link to="/personalfile" class="userprofile2">
        <a class="userprofile3" href="#"
          ><ion-icon name="person-outline"></ion-icon>個人檔案</a
        >
      </router-link>
      
      <router-link to="/changepassword" class="userprofile2">
        <a class="userprofile3" href="#"
          ><ion-icon name="lock-closed-outline"></ion-icon>更改密碼</a
        >
      </router-link>

      <router-link to="/favorite" class="userprofile2">
        <a class="userprofile3" href="#"
          ><ion-icon name="star-half-outline"></ion-icon>追蹤最愛</a
        >
      </router-link>

      <router-link to="/help_support" class="userprofile2">
        <a class="userprofile3" href="#"
          ><ion-icon name="help-outline"></ion-icon>Help & Support</a
        >
      </router-link>

      <component
        :is="'script'"
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></component>
      <component
        :is="'script'"
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></component>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  @media only screen and (max-width: 768px) {
    /* .userprofile1 {
      position: fixed;
      top: 9%;
      left: 0px;
      width: 25%;
      height: 100%;
      background: rgb(240, 240, 240);
    } */
    .userprofile1 .top {
      position: relative;
      /* width: 200px;
      height: 200px; */
      background: rgb(240, 240, 240);
      display: flex;
      align-items: center;
    }
    .userprofile1 .top .username2 {
      white-space: nowrap;
      color: #555;
      font-size: 3em;
    }
    .userprofile1 .top .photo {
      position: relative;
      /* min-width: 180px;
      height: 180px; */
      overflow: hidden;
      background: rgb(0, 0, 0);
      border-radius: 50%;
      border: 10px solid rgb(240, 240, 240);
    }
    .userprofile1 .top .photo .img-responsive2 {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .sidebar1 {
      /* position: absolute;
      width: 100%;
      height: calc(100% - 200px);
      margin-top: 50px;
      padding: 20px;
      border-top: 1px solid rgba(0, 0, 0, 0.1); */
    }
    .sidebar1 .userprofile2 {
      list-style: none;
    }
    .sidebar1 .userprofile2 .userprofile3 {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 30px 0;
      font-size: 19px;
      text-decoration: none;
      color: #555;
    }
    .sidebar1 .userprofile2 .userprofile3:hover {
      color: #4e65ff;
    }
    .sidebar1 .userprofile2 .userprofile3 ion-icon {
      font-size: 1.5em;
    }
  }

  @media only screen and (min-width: 768px) {
    /* .userprofile1 {
      position: fixed;
      top: 9%;
      left: 0px;
      width: 25%;
      height: 100%;
      background: rgb(240, 240, 240);
    } */
    .userprofile1 .top {
      position: relative;
      width: 200px;
      height: 200px;
      background: rgb(240, 240, 240);
      display: flex;
      align-items: center;
    }
    .userprofile1 .top .username2 {
      white-space: nowrap;
      color: #555;
      font-size: 3em;
    }
    .userprofile1 .top .photo {
      position: relative;
      min-width: 180px;
      height: 180px;
      overflow: hidden;
      background: rgb(0, 0, 0);
      border-radius: 50%;
      border: 10px solid rgb(240, 240, 240);
    }
    .userprofile1 .top .photo .img-responsive2 {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .sidebar1 {
      position: absolute;
      width: 100%;
      height: calc(100% - 200px);
      margin-top: 50px;
      padding: 20px;
      /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
    }
    .sidebar1 .userprofile2 {
      list-style: none;
    }
    .sidebar1 .userprofile2 .userprofile3 {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 30px 0;
      font-size: 19px;
      text-decoration: none;
      color: #555;
    }
    .sidebar1 .userprofile2 .userprofile3:hover {
      color: #4e65ff;
    }
    .sidebar1 .userprofile2 .userprofile3 ion-icon {
      font-size: 1.5em;
    }
  }


</style>