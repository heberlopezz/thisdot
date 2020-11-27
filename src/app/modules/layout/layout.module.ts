import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

const components = [HeaderComponent, LayoutComponent];
const materialModules = [MatToolbarModule];

@NgModule({
  declarations: [components],
  imports: [CommonModule, LayoutRoutingModule, materialModules],
})
export class LayoutModule {}
