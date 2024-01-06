import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneInformationComponent } from './done-information.component';

describe('DoneInformationComponent', () => {
  let component: DoneInformationComponent;
  let fixture: ComponentFixture<DoneInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
