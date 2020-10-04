import { BasePage } from './base-page.js';
import { GoogleMapComponent } from '../ui/google-map-component.js'

export class MapPage extends BasePage {

  constructor() {
    super('Map');
  }

  createComponent() {
    super.createComponent();

    // This is the latitude of the Tashkent city
    let centerOfMap = { lat: 41.316440, lng: 69.294860 };

    // Latitude of the districts
    let districtsCoordinates = [{lat: 41.335995, lng: 69.350218}, {let: 41.289456, lng: 69.272033}];

    let map = new GoogleMapComponent(centerOfMap, districtsCoordinates);
    map.appendToComponent(this.component);
  }

  getComponentString() {
    return `<div style="margin:20px"><h3>${this.pageTitle}</h3></div>`
  }
}