import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverWasCreated = true;
  serverCreationStatus = 'Affermative';
  applicantName = '';
  footballerName = '';
  constructor() {
    console.log('this is a servers component');
    setTimeout(() => {
       this.serverWasCreated = false;
    }, 4000);
  }
  ngOnInit(): void {
  }
  statusChanged() {
    this.serverCreationStatus = 'Not affermative';
  }
  serverChangedAgain() {
    this.serverWasCreated = false;
  }
  getApplicantName($event: Event) {
    //console.log(event);
    this.applicantName = (<HTMLInputElement> event.target).value;
  }
   getFootballerName($event: Event) {
    //console.log(event);
     this.footballerName = (<HTMLInputElement> event.target).value;
  }

}
