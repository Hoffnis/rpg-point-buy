import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointBuyComponent } from './point-buy';

describe('PointBuy', () => {
  let component: PointBuyComponent;
  let fixture: ComponentFixture<PointBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointBuyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PointBuyComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
