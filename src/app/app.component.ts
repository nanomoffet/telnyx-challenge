/**
 * @overview Our main app layout.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'tnx-app',
  template: `
    <tnx-navigation></tnx-navigation>

    <div class='px-3'>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
