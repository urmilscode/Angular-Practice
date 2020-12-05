import {Component} from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html'
})
export class PlayersComponent {
  playerOfTheMonth = 'Ziyech from Ajax';
  players = ['Ziyech', 'Mak Van Bommel', 'Lucio', 'Dusan Tadic'];
  constructor() {
    console.log('Player of the month is  {{players[0]}}');
    setTimeout(() => {
      this.playerOfTheMonth = 'Player of the month is Mario Götze from PSV';
    }, 5000);
  }
}
