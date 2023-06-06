import { ActivityComponent } from './activity/activity.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotActivityComponent } from './plot-activity/plot-activity.component';
import { PlotActivityNextComponent } from './plot-activity/plot-activity-next/plot-activity-next.component';
import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'หน้าแรก', component: DashboardComponent},
  {path: 'กิจกรรมรายแปลง', component: PlotActivityComponent},
  {path: 'แบบฟอร์มกิจกรรมรายแปลง', component: PlotActivityNextComponent},
  {path: 'สรุปรายชาวไร่', component: ActivitySummaryComponent},
  {path: 'สรุปรายแปลง', component: ActivityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
