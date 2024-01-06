import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyBackpackComponent } from './emergency-backpack.component';

describe('EmergencyBackpackComponent', () => {
  let component: EmergencyBackpackComponent;
  let fixture: ComponentFixture<EmergencyBackpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyBackpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyBackpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
