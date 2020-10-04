import $ from 'jquery';
import { pets } from './pets-data.js';
import { PetsDataService } from './services/pets-data-service.js';
import { BaseApplication } from './app-manager/base-application.js';
import { HomePage } from './pages/home-page.js';
import { DogsPage } from './pages/dogs-page.js';
import { CatsPage } from './pages/cats-page.js';
import { MapPage } from './pages/map-page.js'

export class App extends BaseApplication {
  constructor(title) {
    // Initialize Title Bar
    super(title);
    this.petsDataService = new PetsDataService();
    this.petsDataService.loadData(pets);

    // Add routes
    this.addRoute('Home', new HomePage(), true);
    this.addRoute('Dogs', new DogsPage());
    this.addRoute('Cats', new CatsPage());
    this.addRoute('Map', new MapPage());
  }
}

export let application = new App('Dogs & Cats');
application.show($('body'));



