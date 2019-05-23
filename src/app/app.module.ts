import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Custom Components
import { WelcomeComponent } from "./home/welcome.component";
import { CharacterSheetComponent } from "./charactersheet/charactersheet.component";
import { StatsComponent } from "./charactersheet/stats/stats.component";
import { TalentsComponent } from "./charactersheet/talents/talents.component";
import { CharacterModalDialog } from "./shared/dialogs/modal/modaldialog.component";
import { SpellsComponent } from "./charactersheet/spells/spells.component";
import { AsideLeftComponent } from "./aside-left/asideleft.component";
import { PrintSheetComponent } from "./printsheet/printsheet.component";

// Custom Services
import { CharacterService } from "./services/character.service";
import { EditModeService } from "./services/editmode.service";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharacterSheetComponent,
    StatsComponent,
    TalentsComponent,
    SpellsComponent,
    AsideLeftComponent,
    PrintSheetComponent,
    CharacterModalDialog
  ],
  entryComponents: [CharacterModalDialog],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [CharacterService, EditModeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
