<template>
    <Header></Header>
    <h1>Welcome, Update Restaurant Page</h1>
    <form class="add-restaurant">
        <input v-model="restaurant.name" type="text" name="name" id="" placeholder="Enter Your Restaurant Name">
        <input v-model="restaurant.contact" type="text" name="contact" id="" placeholder="Enter Contact Number">
        <input v-model="restaurant.address" type="text" name="address" id="" placeholder="Enter Address">
        <button @click="updateRestaurant" type="button">Update Restaurant</button>
    </form>
</template>

<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'AddRestaurent',
    components: {
        Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                contact: '',
                address: ''
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info')
        if (!user) {
            this.$router.push({ name: 'Login' });
        }
        let result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);
        this.restaurant = result.data
        console.log(result.data)
    },
    methods:
    {
        async updateRestaurant() {
            const result = await axios.put("http://localhost:3000/restaurant/"+ this.$route.params.id, {
                name: this.restaurant.name,
                contact: this.restaurant.contact,
                address: this.restaurant.address,
            });
            if (result.status === 200) {
                this.$router.push({ name: 'Home' });
            }
            console.log("Button Click")
        }
    },
}
</script>

<style>
.add-restaurant input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.add-restaurant button {
    width: 324px;
    height: 40px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.add-restaurant button:hover {
    background-color: skyblue;
    color: white;
    cursor: pointer;
}
</style>