<template>
  <div class="index-container">
    <ReservationSearchBox v-bind:reservations="reservations"/>
  </div>
</template>

<script>
import axios from "axios"
import ReservationSearchBox from "../components/ReservationSearchBox"

export default {
  components: {
    ReservationSearchBox
  },
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
.index-container {
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 100px;
}
</style>
