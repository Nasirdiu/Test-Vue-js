import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import Blog from "../components/Home.vue"
import About from "../components/Home.vue"
import Contact from "../components/Home.vue"

const routes = [
    { path: '/',
     component: Home 
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router