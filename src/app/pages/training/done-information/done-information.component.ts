import { Component } from '@angular/core';

@Component({
  selector: 'app-done-information',
  templateUrl: './done-information.component.html',
  styleUrls: ['./done-information.component.scss']
})
export class DoneInformationComponent {
  section: number = 1;

  changeSection(): void {
    if(this.section === 1) this.section = 2; else this.section = 1;
  }
}
