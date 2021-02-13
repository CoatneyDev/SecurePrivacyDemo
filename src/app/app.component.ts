import { Component } from '@angular/core';

@Component({
  selector: 'sp-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}} Demo/Test!
      </h1>
     
      <sp-cookie-banner></sp-cookie-banner>
    </div>
   
    
  `,
  styles: []
})
export class AppComponent {
  title = 'secureprivacy';
}
