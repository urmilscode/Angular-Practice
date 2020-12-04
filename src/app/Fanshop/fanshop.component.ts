import {Component} from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './fanshop.component.html'
})

export class FanshopComponent {
  ajaxfans = true;
  psvfans = false;
  constructor() {
    setTimeout(()=> {},3000) {
      
    }
    changePSVSupportStatement(){
      this.psvfans = true;
    }
  }
  changeSupportStatement() {
    this.ajaxfans = !true;
  }
}
