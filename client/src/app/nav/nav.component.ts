import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../_services/_services/account.service';
import * as $ from 'jquery';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};
  
  showDropdown = false;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {

  }
  

  login() 
  {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }
  
  logout(){
    this.accountService.logout();
  }
}
