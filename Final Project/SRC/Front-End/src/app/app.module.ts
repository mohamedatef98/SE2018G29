import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormEditComponent } from './form/edit/edit.component';
import { InputComponent, InputViewComponent } from './form/components/controls/input.component';
import { CheckBoxComponent, CheckBoxViewComponent } from './form/components/controls/check.component';
import { RadioComponent, RadioViewComponent } from './form/components/controls/radio.component';
import { TextAreaViewComponent, TextAreaComponent } from './form/components/controls/textarea.component';
import { CloseComponent } from './form/components/controls/stuff/close.component';
import { FormsService } from './forms.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicControlViewComponent, DynamicControlRealComponent } from './form/components/dynamic-control.component';
import { SubmissionFormComponent } from './form/submission/form/submission-form.component';
import { LayoutComponent } from './layout/layout.component';
import { SubmissionDoneComponent } from './form/submission/done/submission-done.component';
import { SubmissionComponent } from './form/submission/submission.component';
import { SubmissionsService } from './submissions.service';
import {FormViewComponent} from "./form/view/form-view.component";
import {FormSubmissionsComponent} from "./form/submission/submissions/form-submissions.component";
import {NotFoundComponent} from "./not-found/not-found.component.t";
import {OneSubmissionComponent} from "./form/submission/submissions/one-submission/one-submission.component";
import {AuthService} from "./auth.service";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {TokenService} from "./token.service";
import {LoggedInGuard} from "./guards/loggedIn.guard";
import {NotLoggedInGuard} from "./guards/notLoggedIn.guard";
import {PNotifyService} from "./pnotify.service";
import {MainComponent} from "./layout/main/main.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormEditComponent,
    InputComponent,
    InputViewComponent,
    CheckBoxComponent,
    CheckBoxViewComponent,
    RadioComponent,
    RadioViewComponent,
    TextAreaViewComponent,
    TextAreaComponent,
    CloseComponent,
    DynamicControlViewComponent,
    SubmissionFormComponent,
    LayoutComponent,
    DynamicControlRealComponent,
    SubmissionDoneComponent,
    SubmissionComponent,
    FormViewComponent,
    FormSubmissionsComponent,
    NotFoundComponent,
    OneSubmissionComponent,
    LoginComponent,
    SignupComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    InputComponent,
    InputViewComponent,
    CheckBoxComponent,
    CheckBoxViewComponent,
    RadioComponent,
    RadioViewComponent,
    TextAreaViewComponent,
    TextAreaComponent,
  ],
  providers: [FormsService, SubmissionsService, AuthService, TokenService, LoggedInGuard, NotLoggedInGuard, PNotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
