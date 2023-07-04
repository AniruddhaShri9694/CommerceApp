import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { DialogalertComponent } from './Components/dialogalert/dialogalert.component';
import { CustomerComponent } from './Components/customer/customer.component';
import { AdminComponent } from './Components/admin/admin.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { HighlightDirective } from './highlight.directive';
import { HeaderComponent } from './Components/header/header.component';
import { LandingComponent } from './Components/landing/landing.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ApidataComponent } from './Components/apidata/apidata.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CartComponent } from './Components/cart/cart.component';
import { ApiurlService } from '../apiurl.service';
import { AppConfig } from './app.config';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

//import { RouterModule } from '@angular/router';
import { FiltercomponentComponent } from './filtercomponent/filtercomponent.component';
import { TableFilterPipe } from './table-Filter.pipe';
import { MatDataFilterComponent } from './Components/mat-data-filter/mat-data-filter.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    AdminComponent,
    RegistrationComponent,
    AboutComponent,
    HighlightDirective,
    HeaderComponent,
    LandingComponent,
    PagenotfoundComponent,
    ApidataComponent,
    // DialogalertComponent,
    CartComponent,
    FiltercomponentComponent,
    TableFilterPipe,
    MatDataFilterComponent,
    CheckoutComponent,
    // MyDashboardComponent,
    // MatnavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    ApiurlService,
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfig) => () => config.load(),
      deps: [AppConfig],
      multi: true,
    },
  ],
  // entryComponents: [LandingComponent, DialogalertComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
