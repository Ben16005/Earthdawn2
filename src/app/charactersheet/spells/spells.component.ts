import { Component } from '@angular/core';
import { Spells } from '../../models/spells';
import { CharacterModalDialogComponent } from 'src/app/shared/dialogs/modal/modaldialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-spells',
    templateUrl: './spells.component.html',
    styleUrls: ['./spells.component.css']
  })

  export class SpellsComponent {
    constructor(public dialog: NgbModal) {}

    spellList: Spells[] =
      [{ name: 'Fireball', description: 'Shoots a big ball of fire', effect: 'WILLPOWER + 5', discipline: 'Elementalist', circle: 5 },
      { name: 'Lightning', description: 'Shoots a big bolt of lightning', effect: 'PERCEPTION + 5', discipline: 'Elementalist', circle: 4 }
    ];

    openDialog(currentSpell: Spells) {
      const modalRef = this.dialog.open(CharacterModalDialogComponent);
      modalRef.componentInstance.data = currentSpell;
    }
  }
