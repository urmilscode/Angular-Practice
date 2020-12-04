import {Component} from '@angular/core';

@Component({
  selector: 'app-footy',
  templateUrl: './football.component.html'
})

export class FootballComponent {
  isWerderBremenRelegated = true;
  losclilleislosing = true;
  acmilanTopOfTheTable = false;
  constructor() {
    this.isWerderBremenRelegated = false;
    setTimeout(() => {
      this.losclilleislosing = false;
    }, 2000);
    setTimeout(() => {
      this.acmilanTopOfTheTable = true;
    }, 5000);
  }
}
