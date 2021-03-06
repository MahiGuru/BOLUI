import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarModule } from './components/toolbar/toolbar.module';
import { FooterModule } from './components/footer/footer.module';
import { ContentModule } from './components/content/content.module';
import { SidebarModule } from '../@haribol/components/sidebar/sidebar.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    SidebarModule,
    ContentModule,
    FooterModule,
    ToolbarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class HaribolLayoutModule {
}
