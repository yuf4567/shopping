//配置路由
import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)

//引入组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// console.log(VueRouter.prototype.push);
// 重写push方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        //拓展call和apply的区别
        originPush.call(this, location, resolve, reject)
    }
    else {
        originPush.call(this, location, () => { }, () => { })
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        //拓展call和apply的区别
        originReplace.call(this, location, resolve, reject)
    }
    else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { showFooter: true }
        },
        {
            path: '/search/:keyword?',
            component: Search,
            meta: { showFooter: true },
            name: 'search',
            // 路由传参
            // 1、布尔值写法
            // props: true
            // 2、对象写法（额外的给路由组件传递一些参数）
            // props: { a: 1, b: 2 }
            // 3、函数写法
            props: ($route) => ({ keyword: $route.params.keyword, k: $route.query.k })
        },
        {
            path: '/login',
            component: Login,
            meta: { showFooter: false }
        },
        {
            path: '/register',
            component: Register,
            meta: { showFooter: false }
        },
        // 重定向，让项目跑起来就访问home
        {
            path: '*',
            redirect: 'home'
        }
    ]
})