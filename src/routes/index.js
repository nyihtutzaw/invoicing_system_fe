import Home from '../pages/home'
import Invoices from '../pages/invoices'
import Graphs from '../pages/graph'
export const routes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'Invoices',
    path: '/invoices',
    component: <Invoices />,
  },
  {
    name: 'Graph',
    path: '/graphs',
    component: <Graphs />,
  },
]
