import { Component } from '@angular/core';
import { MediaModalService } from 'src/app/shared/modals/media/media-modal.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  banners: Array<string> = ['b_1','b_2','b_3'];
  bannerType: string = 'b_1';
  index: number = 0;

  constructor(private mediaModalService: MediaModalService) {}

  ngOnInit(): void {
   setInterval(
    ()=>{
      this.bannerType = this.banners[this.index];
      this.index++;
      if(this.index > this.banners.length - 1){
        this.index = 0
      }
    }, 2500
   )
  }

  openModal(): void {
    this.mediaModalService.open();
  }
}
