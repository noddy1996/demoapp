import Home from '../screens/Home';

export const RoutesList = [
  
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'Home',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
];
