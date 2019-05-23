import { Component } from '@angular/core';
import { EditModeService } from '../services/editmode.service';

@Component({
  selector: 'pm-aside-left',
  templateUrl: './asideleft.component.html',
  styleUrls: ['./asideleft.component.css']
})
export class AsideLeftComponent {
  editMode = false;

  constructor(private editService: EditModeService) {}

  toggleEditMode(value: boolean) {
    this.editService.changeEditMode(value);
  }
}
