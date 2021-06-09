import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueilbenificeur',
  templateUrl: './accueilbenificeur.component.html',
  styleUrls: ['./accueilbenificeur.component.css']
})
export class AccueilbenificeurComponent implements OnInit {
  test: Date = new Date();
  succes = false
  error = false
  message = ""
  user :string 
  constructor(
    private http: HttpClient
    ) { 
       //
       
       this.user = localStorage.getItem('username')
        //alert(this.user)
      }
  

  ngOnInit(): void {
  }

  logout(){
    localStorage.removeItem('token')
    location.reload();

}

}
