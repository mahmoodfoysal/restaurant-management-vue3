<template>
    <Header></Header>
    <h1>Hello {{ name }}, Welcome to Home Page</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Address</th>
        </tr>
        <tr v-for="(item, index) in restaurant" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
        </tr>
    </table>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'Home',
    data() {
        return {
            name: '',
            restaurant: []
        }
    },
    components: {
        Header
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name
        if (!user) {
            this.$router.push({ name: 'Login' })
        }
        let result = await axios.get('http://localhost:3000/restaurant');
        this.restaurant = result.data;
        console.log(result.data);
    }
}
</script>

<style>
td{
    width: 160px;
    height: 40px;
}
</style>