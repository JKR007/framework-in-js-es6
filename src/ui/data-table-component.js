import { BaseComponent } from './base-component.js';

export class DataTableComponent extends BaseComponent {
  constructor(headers, data) {
    super();
    this.headers = headers;
    this.data = data;
  }

  getComponentString() {
    let ths = '';
    for (const header of this.headers) {
      ths += `<th class="mdl-data-table__cell--non-numeric">${header}</th>\n`;
    }

    let tds = '';
    for (const d of this.data) {
      tds += '<tr>\n';
      for(header of this.headers) {
        tds += `<td class="mdl-data-table__cell--non-numeric">${d[header.toLowerCase()]}</td>\n`;
      }
      tds += '</tr>';
    }
    return `
      <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
        <thead>
          <tr>
            ${ths}
          </tr>
        </thead>
        <tbody>
            ${tds}
        </tbody>
      </table>
    `;
  }
}