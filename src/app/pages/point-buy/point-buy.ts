import { Component, ChangeDetectorRef } from '@angular/core';
import { Attribute } from '../../models/attribute.model';
import { POINT_BUY_COSTS } from '../../constants/point-buy-costs';
import { AttributeCardComponent } from '../../components/attribute-card/attribute-card';
import { PointsDisplayComponent } from '../../components/points-display/points-display';

@Component({
  selector: 'app-point-buy',
  standalone: true,
  imports: [
    AttributeCardComponent,
    PointsDisplayComponent
  ],
  templateUrl: './point-buy.html',
  styleUrl: './point-buy.scss'
})
export class PointBuyComponent {
  private toastTimeout?: ReturnType<typeof setTimeout>;

  showToast = false;

  readonly TOTAL_POINTS = 30;

  attributes: Attribute[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.resetAttributes();
  }

  resetAttributes(): void {

    this.attributes = [
      { name: '💪 Força', value: 8 },
      { name: '🏹 Destreza', value: 8 },
      { name: '❤️ Constituição', value: 8 },
      { name: '🧠 Inteligência', value: 8 },
      { name: '👁️ Sabedoria', value: 8 },
      { name: '🎭 Carisma', value: 8 }
    ];

  }

  get pointsSpent(): number {

    return this.attributes.reduce(
      (total, attribute) => total + POINT_BUY_COSTS[attribute.value],
      0
    );

  }

  get remainingPoints(): number {

    return this.TOTAL_POINTS - this.pointsSpent;

  }

  increase(attribute: Attribute): void {

    if (!this.canIncrease(attribute)) {
      return;
    }

    attribute.value++;

  }

  decrease(attribute: Attribute): void {

    if (!this.canDecrease(attribute)) {
      return;
    }

    attribute.value--;

  }

  canIncrease(attribute: Attribute): boolean {

    if (attribute.value >= 20) {
      return false;
    }

    const currentCost = POINT_BUY_COSTS[attribute.value];
    const nextCost = POINT_BUY_COSTS[attribute.value + 1];

    return this.remainingPoints >= (nextCost - currentCost);

  }

  canDecrease(attribute: Attribute): boolean {

    return attribute.value > 5;

  }

  copyBuild(): void {

    let text = "⚔ Distribuição de Atributos\n\n";

    this.attributes.forEach(attribute => {

      const modifier = Math.floor((attribute.value - 10) / 2);

      text += `${attribute.name}: ${attribute.value} (${modifier >= 0 ? "+" : ""}${modifier})\n`;

    });

    text += `\nPontos restantes: ${this.remainingPoints}/${this.TOTAL_POINTS}`;

    navigator.clipboard.writeText(text);

    this.showToast = false;
    this.cdr.detectChanges();
    clearTimeout(this.toastTimeout);

    setTimeout(() => {
      this.showToast = true;
      this.cdr.detectChanges();

      this.toastTimeout = setTimeout(() => {
        this.showToast = false;
        this.cdr.detectChanges();
      }, 2500);

    }, 10);

  }

  costTable = Object.entries(POINT_BUY_COSTS).map(([score, cost]) => ({
    score: Number(score),
    cost: cost
  }));

}