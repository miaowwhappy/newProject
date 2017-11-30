import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'

//实现路由懒加载
let LoginPage = (resolve) => {
    return require.ensure([],() => {
        resolve(require('@/pages/loginPage'))
    })
}
let RegisterPage = (resolve) => {
    return require.ensure([],() => {
        resolve(require('@/pages/registerPage'))
    })
}

let OpenAccount = (resolve) => {
    return require.ensure([],() => {
        resolve(require('@/pages/open_account'))
    })
}

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
	    path: '/',
	    component: Index
    },
    {
    	path:'/login',
    	component: LoginPage
    },
    {
    	path:'/register',
    	component: RegisterPage
    },
    {
        path:'/open_account',
        component: OpenAccount
    },
    {
        path:'*',
        component: Index
    },
  ]
})
