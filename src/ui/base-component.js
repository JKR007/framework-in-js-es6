import $ from 'jquery';

export class BaseComponent {
  constructor() {
    this.component = null; // jQuery element
  }

  appendToComponent(component) {
    this.createComponent();
    component.append(this.component);
    this.enableJS();
  }

  createComponent() {
    this.component = $(this.getComponentString());
  }

  getComponentString() {
    throw 'Please, overwrite getComponentString() in BaseComponent class';
  }

  // this is for material design lite to support js effects
  enableJS() {
    if(!(typeof(componentHandler) == 'undefined')){
      componentHandler.upgradeAllRegistered();
    }
  }
}