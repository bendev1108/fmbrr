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
