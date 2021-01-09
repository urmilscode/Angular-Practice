import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  user = ['user1', 'user 2', 'user 3', 'user 4'];
  getUserName(event: any) {
    console.log(event);
  }

  getPassword(event: any) {
    console.log(event);
  }
}
