import {Component} from '@angular/core';

@Component({
  selector: 'app-plant',
  templateUrl: './plants.component.html'
})
export class PlantComponent {
  detailData = '';
  plantDetails = '';
  details = 'Yup plants are the best';
  plantList = ['Christmas', 'Avacado', 'Bamboo'];
  getPlantData(event: Event) {
    console.log(event);
    this.plantDetails = (<HTMLInputElement> event.target).value;
  }
  getDetails() {
    this.detailData = 'Plants provide more oxygen';
  }
  getDetailData(event: Event) {
    console.log(event);
    this.detailData = (<HTMLInputElement> event.target).value;
  }
}
