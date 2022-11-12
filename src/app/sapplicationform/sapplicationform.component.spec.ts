import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapplicationformComponent } from './sapplicationform.component';

describe('SapplicationformComponent', () => {
  let component: SapplicationformComponent;
  let fixture: ComponentFixture<SapplicationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapplicationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SapplicationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
