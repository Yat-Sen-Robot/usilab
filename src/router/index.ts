import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Benchmark from '@/views/Benchmark.vue';
import About from '@/views/About.vue';
import Evaluation from '@/views/Evaluation.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/about',
  },
  {
    path: '/benchmark',
    name: 'Benchmark',
    component: Benchmark
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/evaluation',
    name: 'Evaluation',
    component: Evaluation
  }
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;
