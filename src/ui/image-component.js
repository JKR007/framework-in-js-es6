import { BaseComponent } from './base-component.js';

export class ImageComponent extends BaseComponent {
  constructor(imagePath) {
    super();
    this.imagePath = imagePath;
  }

  getComponentString() {
    return `
      <img src=${this.imagePath} style="margin:20px;display:block;width:100%;" />
    `;
  }
}