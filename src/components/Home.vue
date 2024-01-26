<template>
    <Header></Header>
    <h1>Hello {{ name }}, Welcome to Home Page</h1>
    <table border="1">
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact No.</th>
            <th>Address</th>
            <th>Action</th>
        </tr>
        <tr v-for="(item, index) in restaurant" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
                <router-link :to="{ name: 'UpdateRestaurant', params: { id: item.id } }"><button
                        type="button">Update</button></router-link>
                <button @click="deleteRestaurant(item.id)" type="button">Delete</button>
            </td>
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
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete('http://localhost:3000/restaurant/'+ id);
            if (result.status === 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({ name: 'Login' })
            }
            let result = await axios.get('http://localhost:3000/restaurant');
            this.restaurant = result.data;
            console.log(result.data);
        }
    },
    async mounted() {
        this.loadData();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>