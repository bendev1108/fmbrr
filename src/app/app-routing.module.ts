import { PlotActivityComponent } from './plot-activity/plot-activity.component';
import { ActivityComponent } from './activity/activity.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlotActivityNextComponent } from './plot-activity/plot-activity-next/plot-activity-next.component';
import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationSCFComponent } from './information-scf/information-scf.component';
import { SugarcaneCueGroupsComponent } from './sugarcane-cue-groups/sugarcane-cue-groups.component';
import { MapComponent } from './map/map.component';
import { PlotComponent } from './plot/plot.component';
import { LoginComponent } from './login/login.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ScqDetailsComponent } from './sugarcane-cue-groups/scq-details/scq-details.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'กิจกรรมรายแปลง', component: PlotComponent},
  {path: 'รายละเอียดกิจกรรม', component: PlotDetailComponent},
  {path: 'แบบฟอร์มบันทึก', component: PlotActivityComponent},
  {path: 'แบบฟอร์มกิจกรรมรายแปลง', component: PlotActivityNextComponent},
  {path: 'สรุปรายชาวไร่', component: ActivitySummaryComponent},
  {path: 'สรุปรายแปลง', component: ActivityComponent},
  {path: 'ข้อมูลแปลงอ้อย', component: InformationSCFComponent},
  {path: 'จัดกลุ่มคิวอ้อย', component: SugarcaneCueGroupsComponent},
  {path: 'รายละเอียดคิวอ้อย', component: ScqDetailsComponent},
  {path: 'แผนที่แปลงอ้อย', component: MapComponent},
  {path: 'login', component: LoginComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
