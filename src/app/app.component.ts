import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
 serverName  = 'Test server';
 serverContent = 'This is the server content';
 footballerNames = 'Zidane';
 footballerClub = 'Real Madrid';
 /*Typescript type of */

 getServerName(event: Event) {
   console.log(event);
   this.serverName = (<HTMLInputElement> event.target).value;
 }
 getServerData(event: Event ) {
   console.log(event);
   this.serverContent = (<HTMLInputElement> event.target).value;
 }
 getServerDetails(event: Event) {
   return this.serverName;
 }

getfootballerNames(event: any) {
  console.log(event);
  this.footballerNames = (<HTMLInputElement> event.target).value;
}


footballerData(event: any) {
  console.log(event);
}

}
