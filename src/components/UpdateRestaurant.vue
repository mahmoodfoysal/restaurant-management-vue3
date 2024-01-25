<template>
    <Header></Header>
    <h1>Welcome, Update Restaurant Page</h1>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'AddRestaurent',
    components: {
        Header
    },
    mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'Login' })
        }
    }
}
</script>

<style>

</style>