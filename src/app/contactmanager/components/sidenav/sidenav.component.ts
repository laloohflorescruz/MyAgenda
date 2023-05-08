import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public isScreenSmall: boolean | undefined;
  users: Observable<User[]> | undefined;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private router: Router
    ) { }

    @ViewChild(MatDrawer) drawer: MatDrawer | undefined;

  ngOnInit() {
    this.breakpointObserver.observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    });

    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => {
      if (data.length > 0) this.router.navigate(['/contactmanager', data [0].id]);
     });

     this.router.events.subscribe(() =>
     {
      if (this.isScreenSmall) {
        this.drawer?.close();
      }
    });
  }
}
