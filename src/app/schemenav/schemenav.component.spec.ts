import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemenavComponent } from './schemenav.component';

describe('SchemenavComponent', () => {
  let component: SchemenavComponent;
  let fixture: ComponentFixture<SchemenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
