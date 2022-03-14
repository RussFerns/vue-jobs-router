import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import JobsView from '../views/jobs/JobsView.vue';
import JobsDetailsView from '../views/jobs/JobsDetailsView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import AdminView from '../views/AdminView.vue';
import NotFoundView from '../views/NotFoundView.vue';


const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/jobs', name: 'jobs', component: JobsView },
  { path: '/jobs/:id', name: 'jobs-details', component: JobsDetailsView, props: true },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/admin', name: 'admin', component: AdminView },
  // redirect
  { path: '/all-jobs', redirect: '/jobs' },
  // 404 catch all routing
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router

