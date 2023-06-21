import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-plot-activity-next',
  templateUrl: './plot-activity-next.component.html',
  styleUrls: ['./plot-activity-next.component.scss']
})
export class PlotActivityNextComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/plot-activity-next.js';
    document.body.appendChild(script);
  }   

}
