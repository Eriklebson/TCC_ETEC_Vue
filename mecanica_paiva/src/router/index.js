import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/LoginView.vue';
import About from '../views/AboutView.vue';
import Cadastro from '../views/CadastroView.vue'
import DashBoard from '../DashBoard/DashBoardView.vue';
import Usuarios from '../DashBoard/views/UsuariosView.vue';
import EditUsuario from '../DashBoard/views/EditUsuarioView.vue'
import Servicos from '../DashBoard/views/ServicosView.vue';
import hisServicos from '../DashBoard/views/HisServicosView.vue';
import ServicosAbertos from '../DashBoard/views/ServicosAbertosView.vue';
import Gerenciar from '../DashBoard/views/GerenciarView.vue';
import Configuracoes from '../DashBoard/views/ConfiguracoesView.vue';
import Shop from '../DashBoard/views/ShopView.vue';
import Agenda from '../DashBoard/views/AgendaView.vue';
import Historico from '../DashBoard/views/HistoricoView.vue';
import Carros from '../DashBoard/views/CarrosView.vue';
import ContratarServico from '../DashBoard/views/ContratarServicoView.vue';
import AndamentoServico from '../DashBoard/views/EditAndamentoServView.vue';
import VisualizarServico from '../DashBoard/views/VisualizarServView.vue';

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
        path: '/DashBoard/Usuarios',
        name: 'Usuarios',
        component: Usuarios,
      },
      {
        path: '/DashBoard/EditUsuario',
        name: 'EditUsuario',
        component: EditUsuario
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
        path: '/DashBoard/ServicosAbertos',
        name: 'ServicosAbertos',
        component: ServicosAbertos,
      },
      {
        path: '/DashBoard/AndamentoServico',
        name: 'AndamentoServico',
        component: AndamentoServico,
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
      {
        path: '/DashBoard/Shop',
        name: 'Shop',
        component: Shop,
      },
      {
        path: '/DashBoard/ContratarServico',
        name: 'ContratarServico',
        component: ContratarServico,
      },
      {
        path: '/DashBoard/Agenda',
        name: 'Agenda',
        component: Agenda,
      },
      {
        path: '/DashBoard/Historico',
        name: 'Historico',
        component: Historico,
      },
      {
        path: '/DashBoard/Carros',
        name: 'Carros',
        component: Carros,
      },
      {
        path: '/DashBoard/VisualizarServico',
        name: 'VisualizarServico',
        component: VisualizarServico,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
