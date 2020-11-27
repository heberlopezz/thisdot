import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

import {
  ProfileCardComponent
} from './components/profile-card/profile-card.component';
import { SearchComponent } from './components/search/search.component';
import { GithubRoutingModule } from './github-routing.module';

const components = [SearchComponent, ProfileCardComponent];
const materialModules = [MatCardModule, MatInputModule, MatPaginatorModule];

@NgModule({
  declarations: [components],
  imports: [CommonModule, GithubRoutingModule, FormsModule, materialModules],
})
export class GithubModule {}
