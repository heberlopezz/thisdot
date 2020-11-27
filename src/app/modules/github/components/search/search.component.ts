import {
  Component,
  OnInit
} from '@angular/core';

import { User } from '../../interfaces/user.interface';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  users: User[];
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  getUsers(search: string = ''): void {
    this.githubService
      .search(search)
      .subscribe((response) => (this.users = response.items));
  }
}
