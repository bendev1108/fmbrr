import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotActivityComponent } from './plot-activity/plot-activity.component';
import { PlotActivityNextComponent } from './plot-activity/plot-activity-next/plot-activity-next.component';

const routes: Routes = [
  {path: 'กิจกรรมรายแปลง', component: PlotActivityComponent},
  {path: 'แบบฟอร์มกิจกรรมรายแปลง', component: PlotActivityNextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
