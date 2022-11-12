import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheckStatusComponent } from './scheck-status.component';

describe('ScheckStatusComponent', () => {
  let component: ScheckStatusComponent;
  let fixture: ComponentFixture<ScheckStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheckStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheckStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
