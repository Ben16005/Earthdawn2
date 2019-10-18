import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Custom Components
import { WelcomeComponent } from './home/welcome.component';
import { CharacterSheetComponent } from './charactersheet/charactersheet.component';
import { PrintSheetComponent } from './printsheet/printsheet.component';
import { AuthGuard } from './core/auth/authguard.service';
import { UserResolver } from './core/auth/userresolver.service';

const routes: Routes = [
  // { path: 'printsheet', component: PrintSheetComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'charactersheet', component: CharacterSheetComponent, resolve: { data: UserResolver} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
