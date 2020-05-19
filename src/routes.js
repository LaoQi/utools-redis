import List from './components/List';
import Create from './components/Create';
import Test from './components/Test';

const routes = [
    { path: '/redis', component: List },
    { path: '/redis-create-link', component: Create },
    { path: '/:path', component: Test, props: true }
]

export default routes