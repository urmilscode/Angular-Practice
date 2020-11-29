
import {Component} from '@angular/core';

@Component( {
    selector: 'app-fc',
    templateUrl: './fc.component.html'
  }
)

export class FcComponent {
  footballclubs = ['PSV', 'Ajax', 'FC Twente'];
  playerOfTheMonth = 'Klaas Jan Huntelaar';
}

