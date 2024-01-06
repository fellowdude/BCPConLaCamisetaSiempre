import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfectedZonesComponent } from './afected-zones.component';

describe('AfectedZonesComponent', () => {
  let component: AfectedZonesComponent;
  let fixture: ComponentFixture<AfectedZonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfectedZonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfectedZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
