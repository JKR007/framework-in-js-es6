import { BasePage } from './base-page.js';
import { DataTableComponent } from '../ui/data-table-component.js';
import { application } from '../app.js';

export class CatsPage extends BasePage {

  constructor() {
    super('Cats');
  }

  createComponent() {
    super.createComponent();

    let headers = ['Name', 'Age', 'Weight', 'Breed'];
    let dataTable = new DataTableComponent(headers, application.petsDataService.getCats());
    dataTable.appendToComponent(this.component);
  }

  getComponentString() {
    return `<div style="margin:20px"><h3>${this.pageTitle}</h3></div>`
  }
}