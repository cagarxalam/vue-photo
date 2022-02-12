import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Portfolio1 from '../views/Portfolio1.vue'
import Portfolio2 from '../views/Portfolio2.vue'
import Blog from '../views/Blog.vue'
import Elements from '../views/Elements.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio-1',
    name: 'Portfolio 1',
    component: Portfolio1
  },
  {
    path: '/portfolio-2',
    name: 'Portfolio 2',
    component: Portfolio2
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/elements',
    name: 'Elements',
    component: Elements
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((from,to,next) => {
  document.title = "Photographer"
  next()
})

export default router
