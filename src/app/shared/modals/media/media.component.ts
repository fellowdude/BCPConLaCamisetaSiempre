import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaModalService } from './media-modal.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {

  visible!: Observable<boolean>;

  constructor(private mediaModalService: MediaModalService){
    this.visible = this.mediaModalService.watch();
  }

  close(): void {
    this.mediaModalService.close();
  }
}
