import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from './main/user';
import { arrow } from '@popperjs/core';


@Injectable({
  providedIn: 'root'
})
export class DataAPIService {
  private REST_API_SERVER = "https://api.github.com/users";
  private API_SERVER_SEARCH= "https://api.github.com/search/users?q=";
  public userName: String='';
  public data =[]
  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    
    return this.http.get<User[]>(this.REST_API_SERVER).pipe(map(arr =>{ 
      return arr.map(res =>{  
      return{
        id: res.id,
        login: res.login
        };
      });
      })
    );
  }

  searchUsers(userName:String):Observable<any[]>{
    console.log(this.API_SERVER_SEARCH+userName);
     return this.http.get<any[]>(this.API_SERVER_SEARCH+userName).pipe(map(arr =>{ 
       var dat= Object.values(arr)[2];
       console.log(dat);
      return dat;
      })
    );
    
    
  }

  getUserbyId(id:String){

    return this.http.get(this.REST_API_SERVER+"/"+id).pipe(map(arr =>{ 
      console.log(arr);
      return arr;   
      })
    );
  }
}
