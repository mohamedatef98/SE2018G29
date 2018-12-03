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
    SubmissionComponent
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
  providers: [FormsService, SubmissionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
