import{createRouter, createWebHistory} from 'vue-router'

import Homepage from "./../components/HomePage.vue"
import AboutUs from "./../components/AboutUs.vue"
import Alumini from "./../components/Alumini.vue"
import ContactUs from "./../components/ContactUs.vue"
import Courses from "./../components/Courses.vue"
import Events from "./../components/Events.vue"
import Library from "./../components/Library.vue"
import Partnerships from "./../components/Patnerships.vue"
const routes = [
    {
        path: '/',
        name: 'homepage',
        component: Homepage
    },
    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUs
    },
    {
        path: '/alumini',
        name: 'alumini',
        component: Alumini
    },
    {
        path: '/contactUs',
        name: 'contactUs',
        component: ContactUs
    },
    {
        path: '/courses',
        name: 'courses',
        component: Courses
    },
    {
        path: '/events',
        name: 'events',
        component: Events
    },
    {
        path: '/library',
        name: 'library',
        component: Library
    },
    {
    path: '/partnerships',
        name : 'partnerships',
        component: Partnerships
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router