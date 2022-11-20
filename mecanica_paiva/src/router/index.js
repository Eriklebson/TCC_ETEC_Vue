import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import About from '../views/AboutView.vue';
import Cadastro from '../views/CadastroView.vue'
import DashBoard from '../DashBoard/DashBoardView.vue';
import Emails from '../DashBoard/views/EmailView.vue';
import Servicos from '../DashBoard/views/ServicosView.vue';
import hisServicos from '../DashBoard/views/HisServicosView.vue';
import Clientes from '../DashBoard/views/ClientesView.vue';
import Estatisticas from '../DashBoard/views/EstatisticasView.vue';
import Gerenciar from '../DashBoard/views/GerenciarView.vue';
import Configuracoes from '../DashBoard/views/ConfiguracoesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: Cadastro,
  },
  {
    path: '/DashBoard',
    name: 'DashBoard',
    component: DashBoard,
    children:[
      {
        path: '/DashBoard',
        name: 'Emails',
        component: Emails,
      },
      {
        path: '/DashBoard/Servicos',
        name: 'Servicos',
        component: Servicos,
      },
      {
        path: '/DashBoard/hisServicos',
        name: 'hisServicos',
        component: hisServicos,
      },
      {
        path: '/DashBoard/Clientes',
        name: 'Clientes',
        component: Clientes,
      },
      {
        path: '/DashBoard/Estatisticas',
        name: 'Estatisticas',
        component: Estatisticas,
      },
      {
        path: '/DashBoard/Gerenciar',
        name: 'Gerenciar',
        component: Gerenciar,
      },
      {
        path: '/DashBoard/Configuracoes',
        name: 'Configuracoes',
        component: Configuracoes,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
