import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { FilterPipe } from './pipes/filter.pipe';
import { OrderPipe } from './pipes/order.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/Header.components';
import { LoadingComponent } from './components/loading/Loading.components';
import { AccountPage } from './pages/criarconta/Account.page';
import { Page404 } from './pages/page404/Page404.page';
import { UserListPage } from './pages/userList/UserList.page';
import { UserPage } from './pages/user/User.page';
import { LoginPage } from './pages/login/Login.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthService } from './services/Auth.service';
import { AuthGuard } from './services/Auth.guard';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export var options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    FilterPipe,
    OrderPipe,
    AppComponent,
    HeaderComponent,
    AccountPage,
    Page404,
    UserListPage,
    LoginPage,
    UserPage,
    LoadingComponent,
    // FontAwesomeModule
    
  ],
  imports: [
    NgxMaskModule.forRoot(options),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
