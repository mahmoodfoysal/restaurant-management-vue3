import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import AddRestaurentVue from "./components/AddRestaurent.vue";
import UpdateRestaurantVue from "./components/UpdateRestaurant.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/add-restaurant',
        name: 'AddRestaurant',
        component: AddRestaurentVue
    },
    {
        path: '/update-restaurant',
        name: 'UpdateRestaurant',
        component: UpdateRestaurantVue
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;