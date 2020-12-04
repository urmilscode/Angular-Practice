import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FcComponent} from './FC/fc.component';
import {PlayerlistComponent} from './PlayerList/playerlist.component';
import {FanshopComponent} from './Fanshop/fanshop.component';
import {WarningAlertComponent} from './WarningAlert/warning.component';
import {SuccessComponent} from './SuccessAlert/success.component';
import {FootballComponent} from './FootballClubs/football.component';

@NgModule({
  declarations: [
    AppComponent,
    FcComponent,
    PlayerlistComponent,
    FanshopComponent,
    WarningAlertComponent,
    SuccessComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
