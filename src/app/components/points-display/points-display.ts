import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-points-display',
  standalone: true,
  templateUrl: './points-display.html',
  styleUrl: './points-display.scss'
})
export class PointsDisplayComponent {

  @Input({ required: true })
  remainingPoints!: number;

  @Input({ required: true })
  totalPoints!: number;

  get percentage(): number {
    return (this.remainingPoints / this.totalPoints) * 100;
  }

  get barColor(): string {

    const p = this.remainingPoints / this.totalPoints;

    if (p >= 0.90)
      return "linear-gradient(90deg, #145A32, #228B22)";

    if (p >= 0.80)
      return "linear-gradient(90deg, #228B22, #27AE60)";

    if (p >= 0.70)
      return "linear-gradient(90deg, #27AE60, #2ecc55)";

    if (p >= 0.60)
      return "linear-gradient(90deg, #2ecc55, #A3CB38)";

    if (p >= 0.50)
      return "linear-gradient(90deg, #F1C40F, #F4D03F)";

    if (p >= 0.40)
      return "linear-gradient(90deg, #F4D03F, #F39C12)";

    if (p >= 0.30)
      return "linear-gradient(90deg, #F39C12, #E67E22)";

    if (p >= 0.20)
      return "linear-gradient(90deg, #E67E22, #C0392B)";

    if (p >= 0.10)
      return "linear-gradient(90deg, #C0392B, #8B0000)";

    return "linear-gradient(90deg, #860000, #640000)";

  }

}