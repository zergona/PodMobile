import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { RequestPageComponent } from './request-page/request-page.component';
import { CancelPageComponent } from './cancel-page/cancel-page.component';
import { QueueStatePageComponent } from './queue-state-page/queue-state-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SentRequestComponent } from './sent-request/sent-request.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'confirmation', component: ConfirmationPageComponent },
  { path: 'form', component: RequestPageComponent },
  { path: 'cancel', component: CancelPageComponent },
  { path: 'queue', component: QueueStatePageComponent },
  { path: 'sentrequest', component: SentRequestComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ConfirmationPageComponent,
    RequestPageComponent,
    CancelPageComponent,
    QueueStatePageComponent,
    PageNotFoundComponent,
    SentRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
