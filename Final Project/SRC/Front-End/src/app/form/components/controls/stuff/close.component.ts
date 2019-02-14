import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'app-close',
    template: `
        <a (click)="emit()"><mat-icon>cancel</mat-icon></a>
    `,
    styles: [`
        a{
            cursor: pointer;
        }

        mat-icon{
            color: black;
            transition: color 0.2s ease-in-out;
            font-size: 50px;
        }

        mat-icon:hover{
            color: var(--pink);
        }
    `]
})
export class CloseComponent{
    @Output('clicked') clicked = new EventEmitter<any>();

    emit(){
        this.clicked.emit();
    }
}