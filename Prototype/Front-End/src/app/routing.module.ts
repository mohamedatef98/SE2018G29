import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormEditComponent } from "./form/edit/edit.component";
import { SubmissionFormComponent } from './form/submission/form/submission-form.component';
import { LayoutComponent } from "./layout/layout.component";
import { SubmissionComponent } from "./form/submission/submission.component";
import { SubmissionDoneComponent } from "./form/submission/done/submission-done.component";

const routes: Route[] =  [
  { path: '', component: LayoutComponent, children:[
    { path: '', component: HomeComponent },
    { path: 'create', component: FormEditComponent },
    { path: 'edit/:id', component: FormEditComponent },
  ]},
  { path: 'submit/:id', component: SubmissionComponent, children: [
    { path: '', component: SubmissionFormComponent },
    { path: 'done', component: SubmissionDoneComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
