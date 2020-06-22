<template>
    <div>
        <img class="listing-img" v-bind:src="reservation.cityImage"/>
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
                this.getReservationData(route.params?.confirmationCode)
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
 .listing-img {
     width: 448px;
     height: 274px;
 }
</style>