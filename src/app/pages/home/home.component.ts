import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/shared/services/layout/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('inicio', {static: false}) private home!: ElementRef<HTMLDivElement>;
  @ViewChild('info', {static: false}) private info!: ElementRef<HTMLDivElement>;
  @ViewChild('video', {static: false}) private video!: ElementRef<HTMLDivElement>;
  @ViewChild('about', {static: false}) private about!: ElementRef<HTMLDivElement>;
  bannerIsOnView: boolean = false;
  infoIsOnView: boolean = false;
  videoIsOnView: boolean = false;
  aboutIsOnView: boolean = false;
  currentSection: string = '';

  constructor(private headerService: HeaderService){}

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.home){
      const rect = this.home.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight / 2;
      this.bannerIsOnView = topShown && bottomShown;
      this.bannerIsOnView && (this.currentSection = 'inicio')
    }
    if (this.info){
      const rect = this.info.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight / 2;
      this.infoIsOnView = topShown && bottomShown;
      this.infoIsOnView && (this.currentSection = 'afrontar')
    }
    if (this.video){
      const rect = this.video.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight / 2;
      this.videoIsOnView = topShown && bottomShown;
      this.videoIsOnView && (this.currentSection = 'protegerte')
    }
    if (this.about){
      const rect = this.about.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight / 2;
      this.aboutIsOnView = topShown && bottomShown;
      this.aboutIsOnView && (this.currentSection = 'nosotros')
    }

    this.headerService.change(this.currentSection);
  }
}
