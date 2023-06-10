import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-plot-detail',
  templateUrl: './plot-detail.component.html',
  styleUrls: ['./plot-detail.component.scss']
})
export class PlotDetailComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/plot-activity-next.js';
    document.body.appendChild(script);
  }
}
