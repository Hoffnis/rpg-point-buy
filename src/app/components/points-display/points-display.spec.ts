import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsDisplayComponent } from './points-display';

describe('PointsDisplay', () => {
  let component: PointsDisplayComponent;
  let fixture: ComponentFixture<PointsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointsDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PointsDisplayComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
