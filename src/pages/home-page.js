import { BasePage } from './base-page.js';
import { ImageComponent } from '../ui/image-component.js';
import { ButtonComponent } from '../ui/button-component.js';
import { application } from '../app.js';

export class HomePage extends BasePage {
  constructor() {
    super('Home');
  }

  createComponent() {
    super.createComponent();

    let image = new ImageComponent('../../images/pets.jpg');
    image.appendToComponent(this.component);

    let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';

    let dogsButton = new ButtonComponent('Dogs');
    dogsButton.setStyleString(styleString);
    dogsButton.appendToComponent(this.component);
    dogsButton.component.click(() => application.activateRoute('Dogs'));

    let catsButton = new ButtonComponent('Cats');
    catsButton.setStyleString(styleString);
    catsButton.appendToComponent(this.component);
    catsButton.component.click(() => application.activateRoute('Cats'));
  }

  getComponentString() {
    return '<div style="text-align:center;"></div>';
  }
}