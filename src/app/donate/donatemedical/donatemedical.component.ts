import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-donatemedical',
  templateUrl: './donatemedical.component.html',
  styleUrls: ['./donatemedical.component.css']
})
export class DonatemedicalComponent implements OnInit {

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


  
  
  donatemedical(form:NgForm){
    console.log(form);
    let donation=form.form.value
    console.log(donation);
     this.http.post(environment.connection+'donationMd',donation).subscribe(
      (data :any)=>{
     this.succes = true
     this.error = false
     this.message = data.result
      },
      (error :any)=>{
        this.succes = false 
        this.error = true
        this.message =error.error.result
      })

  }










  
//   logout(){
//     localStorage.removeItem('token')
//     location.reload();

// }

}
