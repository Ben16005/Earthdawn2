import { Component, OnInit, Input, Inject } from '@angular/core';
import * as Disciplines from '../../core/disciplines';
import { Discipline } from '../../core/models/discipline';
import { Talent } from '../../core/models/talent';
import { EditModeService } from '../../core/services/editmode.service';
import { CharacterModalDialogComponent } from '../../shared/dialogs/modal/modaldialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-talents',
  templateUrl: './talents.component.html',
  styleUrls: ['./talents.component.css']
})
export class TalentsComponent implements OnInit {
  @Input() selectedCharacter;

  currentDisc: Discipline[] = [Disciplines.airSailor, Disciplines.archer, Disciplines.wizard];

  constructor(private editService: EditModeService, public dialog: NgbModal) {}

  editMode: boolean;
  ranks: number;
  ngOnInit() {
    this.editService.currentMode.subscribe(
      futureMode => (this.editMode = futureMode)
    );
    this.editService.currentRanks.subscribe(
      futureRanks => (this.ranks = futureRanks)
    );
  }

  increaseTalent(talent: Talent) {
    if (talent.rankSave < 15) {
      talent.rankSave = talent.rankSave + 1;
      this.editService.changeRanks(this.ranks + this.rankCalculation(talent));
    }
  }

  decreaseTalent(talent: Talent) {
    if (talent.rankSave > 0) {
      this.editService.changeRanks(this.ranks - this.rankCalculation(talent));
      talent.rankSave = talent.rankSave - 1;
    }
  }

  // Calculates the ranks given the talent and circle
  rankCalculation(talent: Talent): number {
    let rankCircle = Math.floor((talent.circle - 1) / 4) - 1;

    // Multiple discipline logic will go here

    if (rankCircle === -1) {
      rankCircle = 0;
    }

    let rankTalent = Math.floor((talent.rankSave - 1) / 4);

    if (rankTalent === 0) {
      rankTalent = 1;
    }
    return rankTalent + rankCircle;
  }

  getKarma(talent: Talent) {
    if (talent.discipline) {
      return 'D';
    } else if (talent.karma) {
      return 'K';
    } else {
      return 'N';
    }
  }

  openDialog(currentTalent: Talent) {
    const modalRef = this.dialog.open(CharacterModalDialogComponent);
    modalRef.componentInstance.data = currentTalent;
  }
}
