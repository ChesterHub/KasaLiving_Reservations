<template>
  <div class="index-container">
    <ReservationSearchBox v-bind:reservations="reservations"/>
    <img class="index-img" src="../assets/livingroom.png"/>
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
  created() {
    this.getUserReservations()
  },
  methods: {
    async getUserReservations() {
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
  
}
</script>

<style>
.index-container {
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 100px;
  min-height: calc(100vh - 85px);
}
.index-img {
  position: absolute;
  top: 10vh;
  max-width: 100%;
  height: auto;
  margin-left: 20%;
  z-index: -1;
}
</style>
