import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './global-components/home/home.component';
import { PagenotfoundComponent } from './global-components/pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './login/login/components/forgetpassword/forgetpassword.component';
import { AuthGuard } from './guard/auth.guard';
import { AllComponent } from './global-components/all/all.component';
import { MobileTabsComponent } from './global-components/mobile-tabs/mobile-tabs.component';
import { ComputerOfficeComponent } from './global-components/computer-office/computer-office.component';
import { TvApplianceComponent } from './global-components/tv-appliance/tv-appliance.component';
import { WomenComponent } from './global-components/women/women.component';
import { KidsComponent } from './global-components/kids/kids.component';
import { ToolsComponent } from './global-components/tools/tools.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'mobile-tablets', component: MobileTabsComponent },
      { path: 'computer-office-supplies', component: ComputerOfficeComponent },
      { path: 'tv-appliance', component: TvApplianceComponent },
      { path: 'womens', component: WomenComponent },
      { path: 'kids', component: KidsComponent },
      { path: 'tools', component: ToolsComponent },
    ]
 },

  {
    path: 'login',
    loadChildren: () => import('./login/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin/admin.module').then(m => m.AdminModule)
  },
 { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
