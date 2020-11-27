import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchComponent } from './components/search/search.component';
import { GithubRoutingModule } from './github-routing.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, GithubRoutingModule],
})
export class GithubModule {}
