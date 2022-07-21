<template>
  <div v-if = "token">
    <leftbutton />
    <rightsuspendbutton />
  </div>
</template>

<script>
import leftbutton from "@/components/leftbutton.vue"
import rightsuspendbutton from "@/components/rightsuspendbutton.vue"
import correlation from "@/components/correlation.vue"

export default {
  data(){
    return{
      token: this.$Cookies.get('token'),
    }
  },
  name: 'tsmc',
  components: {
    leftbutton,rightsuspendbutton,correlation
  }
 
}

</script>