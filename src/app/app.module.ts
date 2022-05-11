import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin/admin-routing.module';
import { AdminModule } from './admin/admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './global-components/home/home.component';
import { PagenotfoundComponent } from './global-components/pagenotfound/pagenotfound.component';
import { LoginRoutingModule } from './login/login/login-routing.module';
import { LoginModule } from './login/login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppdataService } from './appservices/services/appdata.service';
import { NewArrivalComponent } from './global-components/new-arrival/new-arrival.component';
import { MenComponent } from './global-components/men/men.component';
import { WomenComponent } from './global-components/women/women.component';
import { KidsComponent } from './global-components/kids/kids.component';
import { CollaborationComponent } from './global-components/collaboration/collaboration.component';
import { SaleComponent } from './global-components/sale/sale.component';
import { HeaderComponent } from './global-components/header/header.component';
import { FooterComponent } from './global-components/footer/footer.component';
import { AllComponent } from './global-components/all/all.component';
import { MobileTabsComponent } from './global-components/mobile-tabs/mobile-tabs.component';
import { TvApplianceComponent } from './global-components/tv-appliance/tv-appliance.component';
import { ComputerOfficeComponent } from './global-components/computer-office/computer-office.component';
import { ToolsComponent } from './global-components/tools/tools.component';
import { OppoComponent } from './brands/oppo/oppo.component';
import { DellComponent } from './brands/dell/dell.component';
import { LenovoComponent } from './brands/lenovo/lenovo.component';
import { AsusComponent } from './brands/asus/asus.component';
import { SamsungComponent } from './brands/samsung/samsung.component';
import { SonyComponent } from './brands/sony/sony.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    NewArrivalComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    CollaborationComponent,
    SaleComponent,
    HeaderComponent,
    FooterComponent,
    AllComponent,
    MobileTabsComponent,
    TvApplianceComponent,
    ComputerOfficeComponent,
    ToolsComponent,
    OppoComponent,
    DellComponent,
    LenovoComponent,
    AsusComponent,
    SamsungComponent,
    SonyComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AdminRoutingModule,
    LoginModule,
    LoginRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
