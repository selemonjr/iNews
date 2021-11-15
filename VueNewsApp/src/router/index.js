import {createRouter,createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Business from "../views/Business.vue";
import Entertainment from "../views/Entertainment.vue";
import Sports from "../views/Sports.vue";
import Technology from "../views/Technology.vue";
const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path:"/",
        component:Home,
    },
    {
        path:'/business',
        component:Business,
    },
    {
        path:"/entertainment",
        component:Entertainment,
    },
    {
        path:'/technology',
        component:Technology
    },
    {
        path:"/sports",
        component:Sports,
    }
]
})
export default router;