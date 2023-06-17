import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-sugarcane-cue-groups',
  templateUrl: './sugarcane-cue-groups.component.html',
  styleUrls: ['./sugarcane-cue-groups.component.scss']
})
export class SugarcaneCueGroupsComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const script = document.createElement('script');
    script.src = 'assets/dist/js/pages/scq-forms.js';
    document.body.appendChild(script);
  }
  
}
