<template>
    <header class="header">
        <h1>Kasa</h1>
        <ul>
            <li>
                <nuxt-link to='/'>Your reservations</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/'>FAQ</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/'>Contact</nuxt-link>
            </li>
            <li>
                <nuxt-link to='/'>Guest Portal</nuxt-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
}
</script>

<style scoped>
    .header {
        margin-left: 20px;
        height: 85px;
        line-height: 85px;
        padding-left: 80px;
    }
    h1 {
        display: inline-block;
    }
    ul {
        display: inline-block;
        position: absolute;
        right: 0;
        margin-right: 40px;
    }
    li {
        display: inline-block;
        margin-left: 4px;
    }
</style>