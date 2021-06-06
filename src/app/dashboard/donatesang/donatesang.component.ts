import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-donatesang',
  templateUrl: './donatesang.component.html',
  styleUrls: ['./donatesang.component.css']
})
export class DonatesangComponent implements OnInit {

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
