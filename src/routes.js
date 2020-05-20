import List from './components/List';
import Form from './components/Form';
import Test from './components/Test';

const routes = [
    { path: '/redis', component: List },
    { path: '/redis-create-connection', component: Form },
    { path: '/:path', component: Test, props: true }
]

export default routes