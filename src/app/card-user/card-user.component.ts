import { Component, OnInit } from '@angular/core';
import { DataAPIService } from '../data-api.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  private userName:String='';
  user: any;
  constructor(private dataService: DataAPIService) { }

  ngOnInit(){
    this.userName=this.dataService.userName;
    this.dataService.getUserbyId(this.userName)
    .subscribe(user => (this.user = user));
    console.log(this.user);
  }

}
