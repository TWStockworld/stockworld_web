<template>
  <div class="home">
   
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <leftbutton />
    <rightsuspendbutton />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";
import leftbutton from "@/components/leftbutton.vue"
import rightsuspendbutton from "@/components/rightsuspendbutton.vue"
import correlation from "@/components/correlation.vue"
export default {
  name: "HomeView",
  components: {
    Login,leftbutton,rightsuspendbutton,correlation
  },
};
</script>
<img alt="Vue logo" src="../assets/logo.png" />
    <rightsuspendbutton />
    <correlation />

