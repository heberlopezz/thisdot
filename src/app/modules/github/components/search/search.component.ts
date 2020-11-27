import {
  AfterViewInit,
  Component,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { User } from '../../interfaces/user.interface';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements AfterViewInit {
  users: User[];
  total = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private githubService: GithubService) {}

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((data) => console.log(data));
    this.getUsers();
  }

  getUsers(search: string = 'thisdot'): void {
    this.githubService.search(search).subscribe((response) => {
      this.users = response.items;
      this.total = response.totalCount;
    });
  }
}
