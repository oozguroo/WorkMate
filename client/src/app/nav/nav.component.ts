import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import * as $ from 'jquery';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  showDropdown = false;

  constructor(public accountService: AccountService, private router: Router, private alertifyService:AlertifyService) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: _ => {this.router.navigateByUrl('/members');
      this.model = {};
    }
    })
  } 

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
