import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Attribute } from '../../models/attribute.model';
import { ATTRIBUTE_COLORS } from "../../constants/attribute-colors"
import { POINT_BUY_COSTS } from '../../constants/point-buy-costs';

@Component({
  selector: 'app-attribute-card',
  standalone: true,
  templateUrl: './attribute-card.html',
  styleUrl: './attribute-card.scss'
})
export class AttributeCardComponent {

  @Input({ required: true })
  attribute!: Attribute;

  @Input({ required: true })
  canIncrease!: boolean;

  @Input({ required: true })
  canDecrease!: boolean;

  @Output()
  increase = new EventEmitter<void>();

  @Output()
  decrease = new EventEmitter<void>();

  getCurrentCost(value: number): number {
    return POINT_BUY_COSTS[value];
  }

  getNextCost(value: number): number {

    if (value >= 20) {
      return 0;
    }

    return POINT_BUY_COSTS[value + 1] - POINT_BUY_COSTS[value];
  }

  getPreviusCost(value: number): number {

    if (value <= 5) {
      return 0;
    }

    return (POINT_BUY_COSTS[value - 1] - POINT_BUY_COSTS[value]) * -1;
  }


  getColor(value: number): string {

    return ATTRIBUTE_COLORS[value] || '#FFFFFF';

}

getModifier(value: number): number {

    return Math.floor((value - 10) / 2);

}

  

}