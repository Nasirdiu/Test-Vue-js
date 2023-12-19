import { createRouter, createWebHistory } from "vue-router"
import Home from "../components/Home.vue"
import Blog from "../components/Blog.vue"
import About from "../components/About.vue"
import Contact from "../components/Contact.vue"

const routes = [
    { path: '/',
     component: Home ,
     name:'home'

    },
    {
        path: '/blog',
        component: Blog,
        name:'blog'
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