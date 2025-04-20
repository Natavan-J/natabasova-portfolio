import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhoyPageComponent } from './ahoy-page.component';

describe('AhoyPageComponent', () => {
  let component: AhoyPageComponent;
  let fixture: ComponentFixture<AhoyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AhoyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AhoyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
