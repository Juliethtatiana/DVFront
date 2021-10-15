import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { DataAPIService } from '../data-api.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[] = [];
  username = new FormControl('userform', Validators.min(4));
  
  private iduser:String='';
  constructor(private dataService: DataAPIService, private router: Router) { }

  ngOnInit() {
    
    this.dataService.getUsers()
    .subscribe(users => (this.users = users));
  }

  gouser(userName:String){
    this.dataService.userName =  userName;
    this.router.navigate(["/user"]);
  }
  searchName(userName:String){
    if(userName){
      this.dataService.searchUsers(userName)
      .subscribe(data => (this.users = data));
    }

  }

}
