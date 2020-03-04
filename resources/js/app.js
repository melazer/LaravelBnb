

require('./bootstrap');
import router from './routes'
import VueRouter from 'vue-router';

window.Vue = require('vue');
Vue.use(VueRouter);


Vue.component('example-component', require('./components/ExampleComponent.vue').default);



const app = new Vue({
    el: '#app',
    router
});
