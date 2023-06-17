import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-scq-forms',
  templateUrl: './scq-forms.component.html',
  styleUrls: ['./scq-forms.component.scss']
})
export class ScqFormsComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/scq-forms.js';
    document.body.appendChild(script);
  }

}
