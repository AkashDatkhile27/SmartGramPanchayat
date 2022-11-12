import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SRgisterComponent } from './srgister.component';

describe('SRgisterComponent', () => {
  let component: SRgisterComponent;
  let fixture: ComponentFixture<SRgisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SRgisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SRgisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
