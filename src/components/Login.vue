<template>
    <img class="signup-logo" src="../assets/signup-logo-removebg-preview.png" alt="Login Logo">
    <h1 class="signup-text">Login</h1>
    <div class="register">
        <input 
        v-model="email" 
        type="email"
        placeholder="Enter Your Email">
        <input 
        v-model="password" 
        type="password" 
        placeholder="Enter Your Password">
        <button 
        @click="login" 
        class="signup-btn-style">
        Login
    </button>
    </div>
    <div>
        <p>Do you have not an account? Please <router-link :to="{name: 'SignUp'}">Register</router-link></p>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            async login() {
                let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)
                if(result.status === 200 && result.data.length > 0) {
                    localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                    this.$router.push({name: 'Home'})
                }
                console.log("Clicked", result.data)
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info')
        if(user) {
            this.$router.push({name: 'Home'})
        }
        }
    }
</script>

<style>
.signup-text {
    margin-top: 0;
    padding: 0;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.signup-btn-style {
    width: 324px;
    height: 40px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.signup-btn-style:hover {
    background-color: skyblue;
    color: white;
    cursor: pointer;
}
.signup-logo {
  height: 190px;
}
</style>