import Work from './Work';
import WorkDetail from './WorkDetail';
const route = [
  {
    path: '/work',
    component: Work
  },
  {
    path: '/work/:id',
    component: WorkDetail
  }
]
export default route
