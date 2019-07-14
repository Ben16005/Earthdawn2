import { Component } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle = 'EarthDawn Web Application';

    constructor(private googleAuthentication: AuthService) {}

    login() {
      this.googleAuthentication.doGoogleLogin();
    }
}
