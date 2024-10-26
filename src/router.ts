import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Services from './views/Services.vue'
import Gallery from './views/Gallery.vue'
import Testimonials from './views/Testimonials.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/services', component: Services },
    { path: '/gallery', component: Gallery },
    { path: '/testimonials', component: Testimonials },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router