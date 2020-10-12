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
import {PuzzletaxiComponent} from './puzzles/puzzletaxi/puzzletaxi.component';
import {PuzzleapocalypticmapComponent} from './puzzles/puzzleapocalypticmap/puzzleapocalypticmap.component';
import {PuzzlednaComponent} from './puzzles/puzzledna/puzzledna.component';
import {PuzzleplantsComponent} from './puzzles/puzzleplants/puzzleplants.component';
import {PuzzlebustimetableComponent} from './puzzles/puzzlebustimetable/puzzlebustimetable.component';
import {PuzzlelocationsComponent} from './puzzles/puzzlelocations/puzzlelocations.component';
import {FormsModule} from "@angular/forms";
import {BotanicgardensComponent} from './components/botanicgardens/botanicgardens.component';
import {BotanicstationComponent} from './components/botanicstation/botanicstation.component';
import {ParktunnelComponent} from './components/parktunnel/parktunnel.component';
import {CountdownModule} from "ngx-countdown";
import {LandingpageComponent} from './components/landingpage/landingpage.component';
import {SciencecenterComponent} from './components/sciencecenter/sciencecenter.component';
import {PuzzlescienceComponent} from './puzzles/puzzlescience/puzzlescience.component';
import {EndingComponent} from './components/ending/ending.component';

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
    ParktunnelComponent,
    LandingpageComponent,
    SciencecenterComponent,
    PuzzlescienceComponent,
    EndingComponent
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
      {path: 'puzzlelocation', component: PuzzlelocationsComponent},
      {path: 'puzzlescience', component: PuzzlescienceComponent},

      {path: 'MainOffice', component: AlhambraComponent},
      {path: 'centralGlasgow', component: CentralglasgowComponent},
      {path: 'secrettunnel', component: SecrettunnelComponent},
      {path: 'centrallowlevel', component: CentrallowlevelComponent},
      {path: 'hillheadtunnel', component: HillheadtunnelComponent},
      {path: 'HillheadMap', component: HillheadmapComponent},
      {path: 'stenochtunnel', component: StenochrouteComponent},
      {path: 'ScienceCentre', component: SciencecenterComponent},
      {path: 'stenochunderground', component: StenochundergroundComponent},
      {path: 'BotanicGardens', component: BotanicgardensComponent},
      {path: 'BotanicStation', component: BotanicstationComponent},
      {path: 'ParkTunnel', component: ParktunnelComponent},

      {path: 'LandingPage', component: LandingpageComponent},
      {path: 'Ending', component: EndingComponent},
      {path: '', redirectTo: '/LandingPage', pathMatch: 'full'},
      {path: '**', component: PagenotfoundComponent}
    ]),
    FormsModule,
    CountdownModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
