

require('./bootstrap');

import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "./view/App";
import Hello from "./view/Hello";
import Home from "./view/Home";
import Contact from "./view/Contact";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});


const app = new Vue({
    el: '#app',
    components: { App },
    router
});
