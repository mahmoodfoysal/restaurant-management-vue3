<template>
    <img class="signup-logo" src="../assets/signup-logo-removebg-preview.png" alt="Signup Logo">
    <h1 class="signup-text">Sign Up</h1>
    <div class="register">
        <input 
        v-model="name" 
        type="text" 
        placeholder="Enter Your Name">
        <input 
        v-model="email" 
        type="email" 
        placeholder="Enter Your Email">
        <input 
        v-model="password" 
        type="password" 
        placeholder="Enter Your Password">
        <button 
        @click="signUp" 
        class="signup-btn-style">
        Sign Up
    </button>
    </div>
    <div>
        <p>Do you have an account? Please <router-link :to="{name: 'Login'}">Login</router-link></p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            const url = 'http://localhost:3000/user';
            let result = await axios.post(url, {
                name: this.name,
                email: this.email,
                password: this.password
            });
            if (result.status === 201) {
                console.log(result.data);
                alert("User Created Successfully");
                localStorage.setItem('user-info', JSON.stringify(result.data));
                this.$router.push({name: 'Home'})
                this.name = '';
                this.email = '';
                this.password = '';
            }

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
    /* padding-left: 20px; */
    display: block;
    /* margin-bottom: 30px; */
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