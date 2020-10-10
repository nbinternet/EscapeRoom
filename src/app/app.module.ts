import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AlhambraComponent} from './components/alhambra/alhambra.component';
import {CentralglasgowComponent} from './components/centralglasgow/centralglasgow.component'
import {RouterModule} from '@angular/router';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {SecrettunnelComponent} from './components/secrettunnel/secrettunnel.component';
import {CentrallowlevelComponent} from './components/centrallowlevel/centrallowlevel.component';
import {StenochundergroundComponent} from './components/stenochunderground/stenochunderground.component';
import {StenochrouteComponent} from './components/stenochroute/stenochroute.component';
import {HillheadmapComponent} from './components/hillheadmap/hillheadmap.component';
import {HillheadtunnelComponent} from './components/hillheadtunnel/hillheadtunnel.component';
import {MaphilightModule} from "ng-maphilight";
import {PuzzletaxiComponent} from './components/puzzletaxi/puzzletaxi.component';
import {PuzzleapocalypticmapComponent} from './components/puzzleapocalypticmap/puzzleapocalypticmap.component';
import {PuzzlednaComponent} from './components/puzzledna/puzzledna.component';
import {PuzzleplantsComponent} from './components/puzzleplants/puzzleplants.component';
import {PuzzlebustimetableComponent} from './components/puzzlebustimetable/puzzlebustimetable.component';
import {PuzzlelocationsComponent} from './components/puzzlelocations/puzzlelocations.component';
import {FormsModule} from "@angular/forms";
import {BotanicgardensComponent} from './components/botanicgardens/botanicgardens.component';
import {BotanicstationComponent} from './components/botanicstation/botanicstation.component';
import {ParktunnelComponent} from './components/parktunnel/parktunnel.component';

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
    HillheadtunnelComponent,
    PuzzletaxiComponent,
    PuzzleapocalypticmapComponent,
    PuzzlednaComponent,
    PuzzleplantsComponent,
    PuzzlebustimetableComponent,
    PuzzlelocationsComponent,
    BotanicgardensComponent,
    BotanicstationComponent,
    ParktunnelComponent
  ],
  imports: [
    BrowserModule,
    MaphilightModule,
    RouterModule.forRoot([
      {path: 'puzzletaxi', component: PuzzletaxiComponent},
      {path: 'puzzlemap', component: PuzzleapocalypticmapComponent},
      {path: 'puzzledna', component: PuzzlednaComponent},
      {path: 'puzzleplants', component: PuzzleplantsComponent},
      {path: 'puzzlemap', component: PuzzleapocalypticmapComponent},
      {path: 'puzzlemap', component: PuzzleapocalypticmapComponent},
      {path: 'puzzlebus', component: PuzzlebustimetableComponent},
      {path: 'puzzlelocaltions', component: PuzzlelocationsComponent},
      {path: 'MainOffice', component: AlhambraComponent},
      {path: 'centralGlasgow', component: CentralglasgowComponent},
      {path: 'secrettunnel', component: SecrettunnelComponent},
      {path: 'centrallowlevel', component: CentrallowlevelComponent},
      {path: 'hillheadtunnel', component: HillheadtunnelComponent},
      {path: 'HillheadMap', component: HillheadmapComponent},
      {path: 'stenochtunnel', component: StenochrouteComponent},
      {path: 'stenochunderground', component: StenochundergroundComponent},
      {path: 'BotanicGardens', component: BotanicgardensComponent},
      {path: 'BotanicStation', component: BotanicstationComponent},
      {path: 'ParkTunnel', component: ParktunnelComponent},
      {path: '', redirectTo: '/centralGlasgow', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent}
    ]),
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
