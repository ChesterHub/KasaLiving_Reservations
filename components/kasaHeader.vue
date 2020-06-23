<template>
    <header>
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
    ul {
        text-align: right;
        margin-right: 40px;
    }
    li {
        display: inline-block;
        margin-left: 4px;
    }
</style>