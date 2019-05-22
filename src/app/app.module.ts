import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSidenavModule, MatListModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Components
import { WelcomeComponent } from './home/welcome.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { StatsComponent } from './charactersheet/stats/stats.component';
import { TalentsComponent } from './charactersheet/talents/talents.component';
import { SpellsComponent } from './charactersheet/spells/spells.component';
import { AsideLeftComponent } from './aside-left/asideleft.component';
import { PrintSheetComponent } from './printsheet/printsheet.component';

// Custom Services
import { CharacterService } from './services/character.service';
import { EditModeService } from './services/editmode.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterSheetComponent,
    StatsComponent,
    TalentsComponent,
    SpellsComponent,
    AsideLeftComponent,
    PrintSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    CharacterService,
    EditModeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
