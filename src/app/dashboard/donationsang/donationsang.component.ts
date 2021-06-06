import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donationsang',
  templateUrl: './donationsang.component.html',
    styleUrls: ['./donationsang.component.css']

})
export class DonationsangComponent implements OnInit {
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

}
