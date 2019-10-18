import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Talent } from '../../../core/models/talent';

@Component({
    selector: 'app-modaldialog',
    templateUrl: 'modaldialog.component.html'
  })
  export class CharacterModalDialogComponent {
    // Defined input needs a name and description field
    @Input() data: any;

    constructor(public activeModal: NgbActiveModal) {}
  }
