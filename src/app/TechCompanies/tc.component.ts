import {Component} from '@angular/core';

@Component(
  {
    selector: 'app-tc',
    templateUrl: './tc.component.html'
  }
)
export class TechCompaniesComponent {
  companies = ['Google', 'Apple', 'Twitter', 'Amazon', 'facebook'];
}
