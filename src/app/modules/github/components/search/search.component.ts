import {
  AfterViewInit,
  Component,
  ViewChild
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import {
  distinctUntilChanged
} from 'rxjs/internal/operators/distinctUntilChanged';
import { Subject } from 'rxjs/internal/Subject';

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
  searchParam = 'thisdot';
  searchParamChanged: Subject<string> = new Subject<string>();
  page = 1;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private githubService: GithubService) {
    this.searchParamChanged
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((model) => {
        this.searchParam = model;
        this.getUsers();
      });
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe((data) => {
      this.page = data.pageIndex + 1;
      this.getUsers();
    });
    this.getUsers();
  }

  getUsers(): void {
    this.githubService
      .search(this.searchParam, this.page)
      .subscribe((response) => {
        this.users = response.items;
        this.total = response.totalCount;
      });
  }

  onSearchParam(value: string): void {
    this.searchParamChanged.next(value);
  }
}
