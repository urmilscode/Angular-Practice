import {Component} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './teams.component.html'
})
export class  TeamsComponent {
  teams =  ['Real Madrid', 'Liverpool', 'Chelsea', 'PSG'];
  players =  ['Ronaldo', 'zidane', 'kaka'];
  serieAPlayers = ['Shevchenko', 'Cafu', 'Zlatan'];
  laligaPlayers = ['Vannistelrooy', 'Beckham', 'Guti'];
  bundesligaPlayers = ['Schweinsteiger', 'Reus', 'Kroos'];
}
