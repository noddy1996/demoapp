import CreateProduct from '../screens/CreateProduct';
import DetailsScreen from '../screens/Details';
import Home from '../screens/Home';

export const RoutesList = [
  {
    name: 'Home',
    component: Home,
    options: {},
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: {},
  },
  {
    name: 'Create',
    component: CreateProduct,
    options: {},
  },
];
