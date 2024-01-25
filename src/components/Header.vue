<template>
<div class="nav">
    <a href="">Home</a>
    <a href="">Add Resturant</a>
    <a href="">Update Resturant</a>
    <a href="">Logout</a>
</div>
</template>

<script>
export default {
    name: 'Header'
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
}
</style>