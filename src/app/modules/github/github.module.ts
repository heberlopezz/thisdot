import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import {
  ProfileCardComponent
} from './components/profile-card/profile-card.component';
import { SearchComponent } from './components/search/search.component';
import { GithubRoutingModule } from './github-routing.module';

const components = [SearchComponent, ProfileCardComponent];
const materialModules = [MatCardModule, MatInputModule];

@NgModule({
  declarations: [components],
  imports: [CommonModule, GithubRoutingModule, materialModules],
})
export class GithubModule {}
