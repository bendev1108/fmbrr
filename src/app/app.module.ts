import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { PlotActivityComponent } from './plot-activity/plot-activity.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './nav/header/header.component';
import { FooterComponent } from './nav/footer/footer.component';
import { SidebarComponent } from './nav/sidebar/sidebar.component';
import { SettingComponent } from './nav/setting/setting.component';
import { PlotActivityNextComponent } from './plot-activity/plot-activity-next/plot-activity-next.component';
import { ActivitySummaryComponent } from './activity-summary/activity-summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivitySummaryNextComponent } from './activity-summary/activity-summary-next/activity-summary-next.component';
import { InformationSCFComponent } from './information-scf/information-scf.component';
import { SugarcaneCueGroupsComponent } from './sugarcane-cue-groups/sugarcane-cue-groups.component';
import { MapComponent } from './map/map.component';
import { PlotComponent } from './plot/plot.component';
import { LoginComponent } from './login/login.component';
import { PlotDetailComponent } from './plot/plot-detail/plot-detail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ScqDetailsComponent } from './sugarcane-cue-groups/scq-details/scq-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PlotActivityComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    SettingComponent,
    PlotActivityNextComponent,
    ActivitySummaryComponent,
    DashboardComponent,
    ActivityComponent,
    ActivitySummaryNextComponent,
    InformationSCFComponent,
    SugarcaneCueGroupsComponent,
    MapComponent,
    PlotComponent,
    LoginComponent,
    PlotDetailComponent,
    PagenotfoundComponent,
    ScqDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
