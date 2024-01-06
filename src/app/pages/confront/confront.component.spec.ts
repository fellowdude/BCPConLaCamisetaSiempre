import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfrontComponent } from './confront.component';

describe('ConfrontComponent', () => {
  let component: ConfrontComponent;
  let fixture: ComponentFixture<ConfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
