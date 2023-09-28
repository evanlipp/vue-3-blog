import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import TasksView from '@/views/TasksView.vue'
import UsersView from '@/views/UsersView.vue'
import { getUser } from '@/firebase/userAuthState'

const routes = [
  {
    name: 'authview',
    path: '/auth',
    component: AuthView,
    redirect: '/login',
    children: [
      {
        name: 'loginform',
        path: '/login',
        component: LoginForm
      },
      {
        name: 'registerform',
        path: '/register',
        component: RegisterForm
      }
    ]
  },
  {
    name: 'mainview',
    path: '/',
    component: (() => import('@/views/MainView.vue')),
    meta: {
      requiredAuth: true
    },
    children: [
      {
        name: 'projectsview',
        path: '/projects',
        component: ProjectsView,
      },
      {
        name: 'tasksview',
        path: '/tasks',
        component: TasksView
      },
      {
        name: 'usersview',
        path: '/users',
        component: UsersView
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

})


router.beforeEach(async (to) => {
  const user = await getUser()
  if (to.meta.requiredAuth && !user) {
    return '/auth'
  }
})

export default router
