import { Component, OnInit } from '@angular/core';
import { User } from './user';

import { DataAPIService } from '../data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[] = [];
  private iduser:String='';
  constructor(private dataService: DataAPIService, private router: Router) { }

  ngOnInit() {

    this.dataService.getUsers()
    .subscribe(users => (this.users = users));
  }

  gouser(userName:String){
    console.log("funciono", userName);
    this.dataService.userName =  userName;
    this.router.navigate(["/user"]);
  }

}
