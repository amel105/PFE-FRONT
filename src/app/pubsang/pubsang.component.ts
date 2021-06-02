import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pubsang',
  templateUrl: './pubsang.component.html',
  
})
export class PubsangComponent implements OnInit {
  test: Date = new Date();
  succes = false
  error = false
  message = ""
  users :any[]
  constructor(
    private http: HttpClient
    ) { 
      this.http.get(environment.connection+'getusers').subscribe(
        

          (data : any) => {
              console.log(data);
              this.users = data
                    
          },
          (error) => {
         
          })



}  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}