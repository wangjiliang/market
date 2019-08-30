export default [
    {
        path: "",
        redirect: "/home"
    },
    {
        path: "/home",
        component: () => import('views/home/home.vue')
    },
    {
        path: "/category",
        component: () => import('views/category/category')
    },
    {
        path: "/cart",
        component: () => import('views/cart/cart')
    },
    {
        path: "/profile",
        component: () => import('views/profile/profile')
    }
]
