<template>
    <h1 class="signup-text">Sign Up</h1>
    <div class="register">
            <input
            v-model="name"
            type="text" placeholder="Enter Your Name">
            <input
            v-model="email"
            type="email" name="" id="" placeholder="Enter Your Email">
            <input
            v-model="password"
            type="password" name="" id="" placeholder="Enter Your Password">
            <button @click="signUp" class="signup-btn-style">Sign Up</button>
    </div>

</template>

<script>
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
    signUp() {
        console.log("Signup click", this.name, this.email, this.password)
    }
}
}

</script>

<style>
.signup-text {
    margin-top: 0;
    padding: 0;
}
.register input{
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

</style>