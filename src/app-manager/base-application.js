import { NavBarComponent } from '../ui/nav-bar-component.js';

export class BaseApplication {
  constructor(title) {
    this.title = title;
    this.navBar = new NavBarComponent(this.title);
    this.routeMap = {};
    this.dafaultRoute = null;
  }

  addRoute(id, pageOBject, dafaultRoute = false) {
    this.navBar.addNavParams(id, '');

    this.routeMap[id] = pageOBject;

    if(dafaultRoute) {
      this.dafaultRoute = id;
    }
  }

  show(element) {
    this.navBar.appendToComponent(element);

    this.navBar.component.find('.mdl-navigation__link').click((event) => {
      let route = event.target.innerHTML;
      this.activateRoute(route.trim());
    });

    if(this.dafaultRoute) {
      let route = this.dafaultRoute
      this.activateRoute(route);
    }
  }

  activateRoute(route) {
    let content = this.navBar.component.find('.page-content'); // .find is the jquery method
    content.empty();

    this.routeMap[route].appendToComponent(content);
  }
}