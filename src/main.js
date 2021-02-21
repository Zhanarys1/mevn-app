import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Thanks from './views/Thanks.vue'

Vue.config.productionTip = false
Vue.use(Router)

let router = new Router({
  routes: [
   {
     path: '/',
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
  render: h => h(Home),
}).$mount('#app')
