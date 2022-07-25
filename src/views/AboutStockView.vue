<template>
  <div v-if="token">
    <AboutStock />
  </div>
</template>

<script>

import AboutStock from "@/components/AboutStock.vue";

export default {
  data(){
    return{
      token: this.$Cookies.get('token'),
    }
  },
  name: 'aboutstock',
  components: {
    AboutStock
  }
 
}

</script>