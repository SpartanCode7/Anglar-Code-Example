import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminFooterComponent,
    DashboardComponent,
    OrdersComponent,
    ProductsComponent,
    CategoriesComponent,
    CustomersComponent,
    AdminhomeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
