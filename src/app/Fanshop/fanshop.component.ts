import {Component} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './fanshop.component.html'
})

export class FanshopComponent {
  ajaxfans = true;
  psvfans = false;
  constructor() {
    setTimeout(() => {
      this.ajaxfans = false;
    }, 3000);
    setTimeout(() => {this.psvfans = true;
    }, 3000);
    }
  }
