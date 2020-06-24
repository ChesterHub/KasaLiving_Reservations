<template>
    <div class="footer">
        <h2>Kasa<span> Your home on the road</span></h2>
        <div class="link-column">
            <h3>Cities</h3>
        </div>
        <div class="link-column">
            <h3>Guests</h3>
        </div>
        <div class="link-column">
            <h3>Kasa in your building</h3>
        </div>
        <div class="link-column">
            <h3>Company & Resources</h3>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .footer {
        height: 588px;
        background: #F2F2F2;
        margin-top: 20px;
        padding-top: 50px;
        padding-left: 100px;
        overflow: hidden;
    }
    h2 {
        margin-bottom: 50px;
    }
    h2 > span {
        font-size: 12px;
        margin-left: 5px;
    }
    .link-column {
        display: inline-flex;
        flex-direction: row;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        color: rgba(45, 45, 45, 0.6);
        margin-right: 24px;
    }
</style>