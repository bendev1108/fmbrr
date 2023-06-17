import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-promotion-money',
  templateUrl: './promotion-money.component.html',
  styleUrls: ['./promotion-money.component.scss']
})
export class PromotionMoneyComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/promotion-money.js';
    document.body.appendChild(script);
  }


}
