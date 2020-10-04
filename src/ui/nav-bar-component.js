import { BaseComponent } from './base-component.js';

export class NavBarComponent extends BaseComponent {
  constructor(title) {
    super();
    this.title = title;
    this.navParams = [];
  }

  addNavParams(navName, navLink) {
    this.navParams.push({navName, navLink}); // in ES6 syntax for the Hash with the same key
  }

  getComponentString() {
    let anchor_tags = '';

    for (const param of this.navParams) {
      anchor_tags += `<a class="mdl-navigation__link" style="cursor:pointer;">${param.navName}</a>\n`
    }
    return `
      <!-- Always shows a header, even in smaller screens. -->
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <!-- Title -->
            <span class="mdl-layout-title">${this.title}</span>
            <!-- Add spacer, to align navigation to the right -->
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              ${anchor_tags}
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">${this.title}</span>
          <nav class="mdl-navigation">
            ${anchor_tags}
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content"><!-- Your content goes here --></div>
        </main>
      </div>
    `;
  }
}