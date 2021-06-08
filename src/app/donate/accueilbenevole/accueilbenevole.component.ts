import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueilbenevole',
  templateUrl: './accueilbenevole.component.html',
  styleUrls: ['./accueilbenevole.component.css']
})
export class AccueilbenevoleComponent implements OnInit {

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
