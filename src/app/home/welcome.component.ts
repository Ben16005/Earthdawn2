import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    constructor(private googleAuthentication: AuthService) {}

    login() {
      this.googleAuthentication.doGoogleLogin();
    }
}
