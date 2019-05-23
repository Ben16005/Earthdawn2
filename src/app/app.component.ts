import { Component, OnInit } from "@angular/core";
import { CharacterService } from "./services/character.service";
import { Character } from "./models/character";
import { UserService } from './shared/auth/user.service';

@Component({
  selector: "pm-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Earthdawn Character Sheet";
  currentValue: number;
  currentUser: any;

  public selectedCharacter = new Character("Suroshi");

  constructor(private characterService: CharacterService, private user: UserService) {}

  ngOnInit() {
    this.loadCharacterInformation();
    this.currentValue = this.characterService.getCurrentCharacter();
    this.currentUser = this.user.getCurrentUser();
  }

  increaseValue() {
    this.characterService.setCurrentCharacter(this.currentValue + 1);
    this.currentValue = this.characterService.getCurrentCharacter();
  }

  loadCharacterInformation() {
    this.selectedCharacter.age = 18;
    this.selectedCharacter.gender = "M";
    this.selectedCharacter.height = "6'1\"";
    this.selectedCharacter.weight = 170;
    this.selectedCharacter.player = "Ben";
  }
}
