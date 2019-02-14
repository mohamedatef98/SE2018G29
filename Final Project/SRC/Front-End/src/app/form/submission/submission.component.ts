import { Component } from "@angular/core";

@Component({
    selector: 'app-submission',
    template:`
    <div class="container-fluid"
     style="height: 100vh; background-color: rgba(0,0,0,0.1); padding: 3rem; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif">
        <div class="container" style="border-radius: 5px; background-color: white; box-shadow: 2px 2px 2px #ccc; padding: 3rem">
            <router-outlet></router-outlet>
        </div>
    </div>

    `,
    styles: [``]
})
export class SubmissionComponent{

}