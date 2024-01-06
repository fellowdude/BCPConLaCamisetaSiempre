import { Component } from '@angular/core';

@Component({
  selector: 'app-preparations',
  templateUrl: './preparations.component.html',
  styleUrls: ['./preparations.component.scss']
})
export class PreparationsComponent {
  currentSection: number = 1;

  changeSection(section: number): void {
    this.currentSection = section;
  }
}
