import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Components
import { WelcomeComponent } from './home/welcome.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { StatsComponent } from './charactersheet/stats/stats.component';
import { TalentsComponent } from './charactersheet/talents/talents.component';
import { CharacterModalDialogComponent } from './shared/dialogs/modal/modaldialog.component';
import { SpellsComponent } from './charactersheet/spells/spells.component';
import { AsideLeftComponent } from './aside-left/asideleft.component';
import { PrintSheetComponent } from './printsheet/printsheet.component';

// Custom Services
import { CharacterService } from './core/services/character.service';
import { EditModeService } from './core/services/editmode.service';

// Auth Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserService } from './core/auth/user.service';
import { AuthGuard } from './core/auth/authguard.service';
import { UserResolver } from './core/auth/userresolver.service';
import { AuthService } from './core/auth/auth.service';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC2ZH54DKl7g1aglSTX3-0gpimzQNtulgY',
  authDomain: 'earthdawn-charactersheet.firebaseapp.com',
  databaseURL: 'https://earthdawn-charactersheet.firebaseio.com',
  projectId: 'earthdawn-charactersheet',
  storageBucket: 'earthdawn-charactersheet.appspot.com',
  messagingSenderId: '345125635149',
  appId: '1:345125635149:web:ecac0d7e2f374b76'
};

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
    CharacterModalDialogComponent
  ],
  entryComponents: [CharacterModalDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // Bootstrap Modules
    NgbModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    // Auth Modules
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [CharacterService, EditModeService, UserService, AuthGuard, UserResolver, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
