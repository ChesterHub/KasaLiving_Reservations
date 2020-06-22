<template>
  <div class="listing-page">
      <div class="listing-title">Your Reservation in {{reservation.city}}</div>
      <div class="listing-column">
        <img class="listing-img" v-bind:src="reservation.cityImage"/>
        <div class="listing-rating">
          <p>Rate your Experience!</p>
          {{reservation.rating ? reservation.rating : ""}}
        </div>
      </div>
      <div class="listing-column details">
        <div class="detail-row">
          <h5 class="title">Location</h5>
          <p>some location here at {{reservation.city}}</p>
        </div>
        <div class="detail-row">
          <h5 class="title">Dates</h5>
          <p>{{`${reservation.checkInDate} - ${reservation.checkOutDate}`}}</p>
        </div>
        <div class="detail-row">
          <h5 class="title">Confirmation</h5>
          <p>#{{reservation.confirmationCode}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "ReservationComponent",
  data() {
    return {
      reservation: {}
    }
  },
  created() {
    this.getReservation()
  },
  methods: {
    setReservation(obj) {
      this.reservation = {...obj}
    },
    getReservation() {
      const route = this.$route
      //check if there is query params with the reservation data
      if ("confirmationCode" in route.query) {
          this.setReservation(route.query)
      } else {
          this.getReservationData(route.params?.reservation)
      }
    },
    async getReservationData(code) {
      if (!code) return
      const config = {
        headers: {'Accept': 'application/json'}
      }
      try {
        const res = await axios.get(`https://my-json-server.typicode.com/ChesterHub/KasaLiving_JsonServer/${code}`, config)
        this.setReservation(res.data)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.listing-page {
  padding-left: 108px;
}
.listing-title {
  font-weight: bold;
  font-size: 32px;
}
.listing-column {
  display: inline-block;
  margin-top: 48px;
  max-width: 448px;
  vertical-align: top;
}
.listing-column.details {
  margin-left: 24px;
}
.detail-row {
  margin-bottom: 15px;
}
.title {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
.listing-img {
  width: 100%;
}
.listing-rating {
  margin-top: 24px;
  height: 149px;
  background: #FFFFFF;
  border: 1px solid rgba(45, 45, 45, 0.2);
  border-radius: 4px;
  text-align: center;
}
</style>