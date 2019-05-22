import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom Components
import { WelcomeComponent } from './home/welcome.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { PrintSheetComponent } from './printsheet/printsheet.component';

const routes: Routes = [
  { path: 'charactersheet', component: CharacterSheetComponent },
  { path: 'printsheet', component: PrintSheetComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
