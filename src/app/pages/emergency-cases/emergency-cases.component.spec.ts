import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyCasesComponent } from './emergency-cases.component';

describe('EmergencyCasesComponent', () => {
  let component: EmergencyCasesComponent;
  let fixture: ComponentFixture<EmergencyCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyCasesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
