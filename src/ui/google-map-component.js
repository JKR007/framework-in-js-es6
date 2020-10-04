import { BaseComponent } from './base-component.js';

export class GoogleMapComponent extends BaseComponent {
  constructor(centerOfMap, locations) {
    super();
    this.centerOfMap = centerOfMap;
    this.locations = locations;
  }

  createComponent() {
    super.createComponent();

    setTimeout(() => {
      let map = new google.maps.Map(document.getElementById("map"), {
        center: this.centerOfMap,
        zoom: 20
      });
    
      for (const location of locations) {
        let position = new window.google.maps.LatLng(location.lat, location.lng);

        let marker = new google.maps.Marker({
          position: position,
          map
        });

        marker.setMap(map);
      }
    }, 0);
  }

  getComponentString() {
    return '<div id="map" style="width:800px; height:400px;"></div>'
  }
}