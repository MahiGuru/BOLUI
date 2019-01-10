import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import { ToolbarComponent } from './toolbar.component';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule {

}
