import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverWasCreated = true;
  constructor() {
    console.log('this is a servers component');
    setTimeout(() => {
       this.serverWasCreated = false;
    }, 4000);
  }
  ngOnInit(): void {
  }

}
