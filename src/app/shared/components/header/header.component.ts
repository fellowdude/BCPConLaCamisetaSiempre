import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../../services/layout/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onTop: boolean = true;
  openMenu: boolean = false;
  activaded!: Observable<string>;

  constructor(private headerService: HeaderService){
    this.activaded = this.headerService.watch();
  }

  toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any){
    if(window.scrollY === 0){
      this.onTop = true;
    }else{
      this.onTop = false;
    }
  }
}
