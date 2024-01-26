<template>
<div class="nav">
    <router-link :to="{name: 'Home'}">Home</router-link>
    <router-link :to="{name: 'AddRestaurant'}">Add Resturant</router-link>
    <!-- <router-link :to="{name: 'UpdateRestaurant'}">Update Resturant</router-link> -->
    <a @click="logOut" href="">Logout</a>
</div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logOut() {
            localStorage.clear();
            this.$router.push({name: 'Login'})
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: white;
    padding: 16px 14px;
    text-decoration: none;
    font: bold;
    cursor: pointer;
}
.nav a:hover {
    color: black;
    background-color: white;
    font: bold;
}
</style>