import { RouteConfig } from "vue-router";
import Layout from "@/layout/index.vue"

export const playerRoutes: RouteConfig = {
    path: '/players',
    component: Layout,
    meta: {
        title: 'playerMgt',
        icon: 'peoples'
    },
    children: [
        {
            path: 'list',
            component:()=>import('@/views/player/list.vue'),
            meta: {
                title: 'playerList', 
                icon: 'list'
            }
        }
    ]
}