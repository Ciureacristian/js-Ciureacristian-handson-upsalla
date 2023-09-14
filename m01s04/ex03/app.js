var routes = [
  {
    name: 'Home',
    route: '/',
    text: 'Te afli pe homepage',
  },
  {
    name: 'Contact',
    route: '/contact',
    text: 'Te afli pe pagina de contact',
  },
  {
    name: 'About',
    route: '/about',
    text: 'Te afli pe pagina de about',
  },
];
var selectedRoute = '/about-us';

switch (selectedRoute) {
  case '/':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  case '/about':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  case '/contact':
    var route = routes.find(function (route) {
      return route.route === selectedRoute;
    });
    console.log(route.text);
    break;

  default:
    console.log('404');
}
