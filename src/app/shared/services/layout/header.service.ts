import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private display: BehaviorSubject<string> = new BehaviorSubject('inicio');
  constructor() { }

  watch(): Observable<string> {
    return this.display.asObservable();
  }

  change(value: string) {
    this.display.next(value);
  }
}
