import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent {
  highlighted: Array<SafeUrl> = [];
  videoList: Array<SafeUrl> = [
    this.sanitizeLink('https://www.youtube.com/embed/BL6db8V9iWA?controls=0&feature=oembed&enablejsapi=1'),
    this.sanitizeLink('https://www.youtube.com/embed/_Vjin_5tTuM?controls=0&feature=oembed&enablejsapi=1'),
    this.sanitizeLink('https://www.youtube.com/embed/PtQEu1LMgy8?controls=0&feature=oembed&enablejsapi=1'),
    this.sanitizeLink('https://www.youtube.com/embed/EeWXCT1lkMQ?controls=0&feature=oembed&enablejsapi=1'),
    this.sanitizeLink('https://www.youtube.com/embed/dbzzirLw2Ac?controls=0&feature=oembed&enablejsapi=1'),
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.highlighted = this.videoList.slice(0,3);
  }

  sanitizeLink(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  nextVideo(): void {
    let poped = this.videoList.shift();
    poped && this.videoList.push(poped);
    this.highlighted = this.videoList.slice(0,3);
  }

  prevVideo(): void {
    let poped = this.videoList.pop();
    poped && this.videoList.unshift(poped);
    this.highlighted = this.videoList.slice(0,3);
    console.log(this.videoList);
  }
}
