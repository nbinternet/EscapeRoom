import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaphilightModule } from 'ng-maphilight';
import { AlhambraComponent } from './alhambra/alhambra.component';
import { CentralglasgowComponent } from './centralglasgow/centralglasgow.component'
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SecrettunnelComponent } from './secrettunnel/secrettunnel.component';
import { CentrallowlevelComponent } from './centrallowlevel/centrallowlevel.component';
import { StenochundergroundComponent } from './stenochunderground/stenochunderground.component';
import { StenochrouteComponent } from './stenochroute/stenochroute.component';

@NgModule({
  declarations: [
    AppComponent,
    AlhambraComponent,
    CentralglasgowComponent,
    PagenotfoundComponent,
    SecrettunnelComponent,
    CentrallowlevelComponent,
    StenochundergroundComponent,
    StenochrouteComponent
  ],
  imports: [
    BrowserModule,
    MaphilightModule,
    RouterModule.forRoot([
      {path: 'alhambraHouse', component: AlhambraComponent},
      {path: 'centralGlasgow', component: CentralglasgowComponent},
      {path: 'secrettunnel', component: SecrettunnelComponent},
      {path: 'centrallowlevel', component: CentrallowlevelComponent},
      {path: 'stenochtunnel', component: StenochrouteComponent},
      {path: 'stenochunderground', component: StenochundergroundComponent},
      {path: '', redirectTo: '/centralGlasgow', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent}
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
