import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit{

   //Integrate AdminLTM ChartJS
   ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/charts/pie-charts.js';
    document.body.appendChild(script);
  }

}
