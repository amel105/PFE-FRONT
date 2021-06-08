import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { MaterialModule } from '../../app.module';
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

  logout(){
    localStorage.removeItem('token')
    location.reload();

}

}
