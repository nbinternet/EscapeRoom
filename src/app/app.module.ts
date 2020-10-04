import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaphilightModule } from 'ng-maphilight';
import { AlhambraComponent } from './components/alhambra/alhambra.component';
import { CentralglasgowComponent } from './components/centralglasgow/centralglasgow.component'
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SecrettunnelComponent } from './components/secrettunnel/secrettunnel.component';
import { CentrallowlevelComponent } from './components/centrallowlevel/centrallowlevel.component';
import { StenochundergroundComponent } from './components/stenochunderground/stenochunderground.component';
import { StenochrouteComponent } from './components/stenochroute/stenochroute.component';
import { HillheadmapComponent } from './components/hillheadmap/hillheadmap.component';
import { HillheadtunnelComponent } from './components/hillheadtunnel/hillheadtunnel.component';

@NgModule({
  declarations: [
    AppComponent,
    AlhambraComponent,
    CentralglasgowComponent,
    PagenotfoundComponent,
    SecrettunnelComponent,
    CentrallowlevelComponent,
    StenochundergroundComponent,
    StenochrouteComponent,
    HillheadmapComponent,
    HillheadtunnelComponent
  ],
  imports: [
    BrowserModule,
    MaphilightModule,
    RouterModule.forRoot([
      {path: 'alhambraHouse', component: AlhambraComponent},
      {path: 'centralGlasgow', component: CentralglasgowComponent},
      {path: 'secrettunnel', component: SecrettunnelComponent},
      {path: 'centrallowlevel', component: CentrallowlevelComponent},
      {path: 'hillheadtunnel', component: HillheadtunnelComponent},
      {path: 'hillheadmap', component: HillheadmapComponent},
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
