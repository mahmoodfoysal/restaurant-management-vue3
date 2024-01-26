<template>
    <Header></Header>
    <h1>Welcome, Add Restaurant Page</h1>
    <form class="add-restaurant">
        <input 
        v-model="restaurant.name"
        type="text" name="name" id="" placeholder="Enter Your Restaurant Name">
        <input 
        v-model="restaurant.contact"
        type="text" name="contact" id="" placeholder="Enter Contact Number">
        <input 
        v-model="restaurant.address"
        type="text" name="address" id="" placeholder="Enter Address">
        <button 
        @click="addRestaurant"
        type="button">Add New</button>
    </form>
</template>

<script>
import Header from './Header.vue';
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
    methods: {
        addRestaurant() {
            console.log("Button Click")
        }
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