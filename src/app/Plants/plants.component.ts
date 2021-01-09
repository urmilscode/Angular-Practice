import {Component} from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plants.component.html'
})
export class PlantComponent {
  plantList = ['Christmas', 'Avacado', 'Bamboo'];
  getPlantData(event: Event) {
    console.log(event);
  }
}
