import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import {
  ProfileCardComponent
} from './components/profile-card/profile-card.component';
import { SearchComponent } from './components/search/search.component';
import { GithubRoutingModule } from './github-routing.module';

const components = [SearchComponent, ProfileCardComponent];
const materialModules = [MatCardModule, MatInputModule, MatPaginatorModule, MatTableModule];

@NgModule({
  declarations: [components],
  imports: [CommonModule, GithubRoutingModule, materialModules],
})
export class GithubModule {}
