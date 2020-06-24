<template>
<div class="reservation-search-box">
  <h1 class="reserve-title">
    Find Your Reservation
  </h1>
  <p class="re-subtitle">
    You can search by providing the city or the confirmation code of your reservation.
  </p>
  <input class="re-input" v-on:input="onInputChange">
  <div class="re-list">
    <div 
      class="re-list-item" 
      v-for="re in filteredReservations" 
      v-bind:key="re.confirmationCode"
      v-on:click="onReservationClick(re)"
    >
      <h5 class="title">{{re.city}}</h5>
      <p>{{re.checkInDate}} - {{re.checkOutDate}}, {{re.confirmationCode}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ReservationSearchBox",
  props : ['reservations'],
  data() {
    return {
      filteredReservations: []
    }
  },
  watch: {
    reservations: {
      immediate: true,
      handler(newList) {
        this.updateFilteredReservations(newList)
      }
    }
  },
  methods: {
    onInputChange(e) {
      let val = e.target.value.toLowerCase()
      this.updateFilteredReservations(this.reservations, val)

    },
    updateFilteredReservations(newList, searchStr = "") {
      if (searchStr) {
        this.filteredReservations = newList.filter((item) => {
          return item.confirmationCode.toLowerCase().includes(searchStr) || item.city.toLowerCase().includes(searchStr)
        })
      } else {
        this.filteredReservations = newList
      }
    },
    onReservationClick(reservation) {
      this.$router.push({
        path: `/${reservation.confirmationCode}`,
        // disabled query for now, to allow for service workers to cache specific reservation requests
        // query: {...reservation}
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
    z-index: 1;
  }
  .re-subtitle {
    margin-top: 24px;
  }
  .re-input {
    margin-top: 24px;
    width: 100%;
    height: 40px;
    font-size: 15px;
    padding-left: 10px;
  }
  .re-list {
    border: 1px solid darkgray;
    background: white;
    margin-top: 6px;
    padding-top: 10px;
    height: 121px;
    overflow: scroll;
  }
  .re-list-item {
    display: block;
    height: 40px;
    width: 100%;
    padding-left: 10px;
    margin-bottom: 2px;
    font-size: 15px;
  }
  .re-list-item > p {
    font-size: 13px;
  }
  .re-list-item:hover {
    background: #FAFAFA;
    cursor: pointer;
  }
</style>