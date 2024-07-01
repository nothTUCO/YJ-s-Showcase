import { createRouter, createWebHistory } from 'vue-router'
import home from "../pages/home.vue";
import login from "../pages/login.vue";
import about from '../pages/about.vue';



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path:'/',
        component:login,
      },
      {
        path:'/home',
        component:home
      },
      {
        path:'/about',
        component:about,
        children:
        [
          {
            
          }
        ]
      }
        
      
      
    ]
  })
  
  export default router