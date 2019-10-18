import { Component, OnInit } from '@angular/core';
import { CharacterService } from './core/services/character.service';
import { Character } from './core/models/character';
import { UserService } from './core/auth/user.service';
import { AuthService } from './core/auth/auth.service';
import { User } from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Earthdawn Character Sheet';
  currentValue: number;
  currentUser: User;

  public selectedCharacter = new Character('Suroshi');

  constructor(private characterService: CharacterService, private userService: UserService, private googleAuthentication: AuthService) {}

  ngOnInit() {
    this.loadCharacterInformation();
    this.currentValue = this.characterService.getCurrentCharacter();
    this.userService.currentUser.subscribe(
      (futureUser) => {
        if (futureUser !== null) {
          this.currentUser = futureUser;
        }
      }
    );
  }

  increaseValue() {
    this.characterService.setCurrentCharacter(this.currentValue + 1);
    this.currentValue = this.characterService.getCurrentCharacter();
  }

  loadCharacterInformation() {
    this.selectedCharacter.age = 18;
    this.selectedCharacter.gender = 'M';
    this.selectedCharacter.height = '6\'1"';
    this.selectedCharacter.weight = 170;
    this.selectedCharacter.player = 'Ben';
  }

  logout() {
    this.googleAuthentication.doGoogleLogOut();
    this.currentUser = null;
  }
}
