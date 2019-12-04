import Vue from 'vue'
import Router from 'vue-router'

import PageLogin from '@/pages/PageLogin'
import PageRegister from '@/pages/PageRegister'
import PageHome from '@/pages/PageHome'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'PageHome',
            component: PageHome
        },
        {
            path: '/login',
            name: 'PageLogin',
            component: PageLogin
        },
        {
            path: '/register',
            name: 'PageRegister',
            component: PageRegister
        }
        
    ]
}) 

export default router