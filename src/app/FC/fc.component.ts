
import {Component} from '@angular/core';

@Component({
  selector: 'app-fc',
  templateUrl: './fc.component.html'
})



export class FcComponent {
  footballclubs = ['Feynoord', 'PSV', 'Ajax'];
  bestplayer:string = 'Ziyech';
}
