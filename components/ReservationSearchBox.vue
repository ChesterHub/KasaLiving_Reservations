<template>
<div class="reservation-search-box">
  <h1 class="reserve-title">
    Find Your Reservation
  </h1>
  <p class="re-subtitle">
    You can search by providing the city or the confirmation code of your reservation.
  </p>
  <input class="re-input">
  <div class="re-list">
    <div 
      class="re-list-item" 
      v-for="re in reservations" 
      v-bind:key="re.confirmationCode"
      v-on:click="onReservationClick(re)"
    >
      {{re.city}} -- {{re.confirmationCode}}
      {{re.checkInDate}} -- {{re.checkOutDate}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ReservationSearchBox",
  props : ['reservations'],
  methods: {
    onReservationClick(reservation) {
      this.$router.push({
        path: `/${reservation.confirmationCode}`,
        query: {...reservation}
      })
    }
  }
}
</script>

<style scoped>
  .reservation-search-box {
    background: #FAFAFA;
    width: 448px;
    height: 488px;
    padding: 48px 48px 0 48px;
  }
  .re-subtitle {
    margin-top: 24px;
  }
  .re-input {
    margin-top: 24px;
    width: 100%;
    height: 40px;
  }
  .re-list {
    border: 1px solid darkgray;
    background: white;
    margin-top: 6px;
    padding-top: 10px;
  }
  .re-list-item {
    display: block;
    height: 40px;
    width: 100%;
    margin-bottom: 2px;
  }
  .re-list-item:hover {
    background: #FAFAFA;
    cursor: pointer;
  }
</style>