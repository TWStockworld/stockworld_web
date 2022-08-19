<template>

  <div class="personalfile1">
    <UserMenu/>
    <h1 class="personalfiletitle">個人資料</h1>
    
  </div>
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
  background: rgb(237, 220, 220);
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.1);
}
</style>