import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Thanks from './views/Thanks.vue'
import App from './views/App.vue'


Vue.use(Router)

let router = new Router({
  routes: [
   {
     path: '/',
     name: 'app',
     component: App
   },
   {
    path: '/home',
    name: 'home',
    component: Home
   },
   {
    path:'/thanks',
    name:'thanks',
    component: Thanks

   }
   
   
  ]
}
)

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
