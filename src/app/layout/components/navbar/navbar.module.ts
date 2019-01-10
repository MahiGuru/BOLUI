import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { NavbarComponent } from './navbar.component';
 
 

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule
    ],
    exports     : [
        NavbarComponent
    ]
})
export class NavbarModule
{
}
