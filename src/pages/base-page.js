import { BaseComponent } from '../ui/base-component.js';

export class BasePage extends BaseComponent {

  constructor(pageTitle) {
    super();
    this.pageTitle = pageTitle;
  }
}