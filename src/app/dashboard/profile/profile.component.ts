import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
 
})
export class ProfileComponent implements OnInit {
  user ={
    firstName :"",
    lastName:"",
    email:"",
    phoneNumber:'',
    Job:'',
    Country:'',
    BloodGroup:'',
    picture:"",
    role:'',
  }
  constructor(private http:HttpClient) { 
   
    let Email = {
      Email :localStorage.getItem('Email')    
    }
    this.http.post(environment.connection+'getuser' ,Email).subscribe(
      (resultat : any) => {
  
        console.log(resultat);
        const obj = JSON.parse(resultat);
        console.log(obj);

 this.user = {
          firstName :obj.firstName,
          lastName:obj.lastName,
          email:obj.email,
          phoneNumber:obj.phoneNumber,
          Job:obj.Job,
          Country:obj.Country,
          BloodGroup:obj.BloodGroup,
          role:obj.role,
          picture:"",
  
        }
        //console.log(this.user);
        
  
      },
      (error) => {
        console.log(error);
        
       //   console.log(error);
          
      })
  
  }

  ngOnInit(): void {
   
  }

}
        
         