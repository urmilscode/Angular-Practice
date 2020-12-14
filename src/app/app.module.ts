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
import {PlayersComponent} from './Players/players.component';
import { ServersComponent } from './servers/servers.component';
import {FormsModule} from '@angular/forms';
import {CandidateComponent} from './Candidate/candidate.component';


@NgModule({
  declarations: [
    AppComponent,
    FcComponent,
    PlayerlistComponent,
    FanshopComponent,
    WarningAlertComponent,
    SuccessComponent,
    FootballComponent,
    PlayersComponent,
    ServersComponent,
    CandidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
