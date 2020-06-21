<template>
  <div class="container">
    <div v-for="re in reservations" v-bind:key="re.confirmationCode">
      ohyea
      {{re.checkInDate}} -- {{re.checkOutDate}}
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      reservations: []
    }
  },
  async created() {
    const config = {
      headers: {'Accept': 'application/json'}
    }
    try {
      const res = await axios.get('https://my-json-server.typicode.com/ChesterHub/KasaLiving_JsonServer/reservations', config)
      this.reservations = res.data
    } catch (err) {
      console.log(err)
      }
  }
  
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
