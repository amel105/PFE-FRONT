import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  
})
export class AccueilComponent implements OnInit {
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