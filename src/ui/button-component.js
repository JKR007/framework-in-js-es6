import { BaseComponent } from './base-component.js';

export class ButtonComponent extends BaseComponent {
  constructor(title) {
    super();
    this.title = title;
    this.styleString = '';
  }

  getComponentString() {
    return `
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" style="${this.styleString}">
      ${this.title}
    </button>
    `;
  }

  setStyleString(styleString) {
    this.styleString = styleString;
  }
}