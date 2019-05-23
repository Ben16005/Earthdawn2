import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Talent } from '../../../models/talent';

@Component({
    selector: "modaldialog.component.html",
    templateUrl: "modaldialog.component.html"
  })
  export class CharacterModalDialog {
    // Defined input needs a name and description field
    @Input() data: any;

    constructor(public activeModal: NgbActiveModal) {}
  }