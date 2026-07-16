import { Component } from '@angular/core';
import { PointBuyComponent } from './pages/point-buy/point-buy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PointBuyComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}