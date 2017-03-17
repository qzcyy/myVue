import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'
import indexVue from './component/hello_index.vue'
import contentVue from './component/hello_content.vue'
import resource from 'vue-resource'
import todolist from './component/todolist.vue'
Vue.use(router);
Vue.use(resource);

const v1=new router({
  mode:'history',
  base:__dirname,
  routes:[{
    path:'/first',
    components: {
      index:indexVue,
      content:contentVue
    } 
  },
  {
    path:'/second',
    components: {
      index:contentVue,
      content:indexVue
    }
    
  },
  {
    path:'/todo',
    components: {
    
      todo:todolist
    }
    
  }]
});

const app=new Vue({
  router:v1,
  render:h=>h(App)
}).$mount('#app')
