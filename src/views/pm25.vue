<template>
  <div>
    <h1>台中空氣品質</h1>
    <taichung />
  </div>
</template>

<script>

import taichung from '@/components/taichung.vue'

export default {
  name: 'pm25',
  components: {
    taichung
  }
 
}

</script>