import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormEditComponent } from "./form/edit/edit.component";
import { SubmissionFormComponent } from './form/submission/form/submission-form.component';
import { LayoutComponent } from "./layout/layout.component";
import { SubmissionComponent } from "./form/submission/submission.component";
import { SubmissionDoneComponent } from "./form/submission/done/submission-done.component";
import {FormViewComponent} from "./form/view/form-view.component";
import {FormSubmissionsComponent} from "./form/submission/submissions/form-submissions.component";
import {NotFoundComponent} from "./not-found/not-found.component.t";
import {OneSubmissionComponent} from "./form/submission/submissions/one-submission/one-submission.component";
import {LoginComponent} from "./auth/login/login.component";
import {SignupComponent} from "./auth/signup/signup.component";
import {NotLoggedInGuard} from "./guards/notLoggedIn.guard";
import {LoggedInGuard} from "./guards/loggedIn.guard";
import {MainComponent} from "./layout/main/main.component";

const routes: Route[] =  [
  { path: '', component: LayoutComponent, children:[
    { path: '', component: MainComponent },
    { path: 'login', component: LoginComponent, canActivate: [NotLoggedInGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [NotLoggedInGuard] },
    { path: 'home', component: HomeComponent, canActivate: [LoggedInGuard] },
    { path: 'create', component: FormEditComponent, canActivate: [LoggedInGuard] },
    { path: ':formId', canActivate: [LoggedInGuard], children: [
        { path: '', component: FormViewComponent },
        { path: 'edit', component: FormEditComponent },
        { path: 'submissions', children: [
            { path: '', component: FormSubmissionsComponent },
            { path: ':submissionId', component: OneSubmissionComponent }
          ]}
      ] },
  ]},
  { path: 'submit/:formId', component: SubmissionComponent, children: [
    { path: '', component: SubmissionFormComponent },
    { path: 'done', component: SubmissionDoneComponent }
  ] },
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
