import {Component} from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html'
})
export class CandidateComponent {
  candidateList = ['cr', 'chiesa', 'pirlo'];
  gbCandidateList = ['cr', 'dybala', 'lion'];
}
