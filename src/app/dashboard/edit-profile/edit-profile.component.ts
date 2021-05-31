import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
})
export class EditProfileComponent implements OnInit {
user :{
        First_Name :String,
        Last_Name:String,
        Email:String,
        Company:String,
        description:String,
        titre:String,
        Phone_Number:String,
}

  constructor(private formBuilder: FormBuilder,private http:HttpClient) { 
      this.user = {  

          First_Name:"",
          Last_Name:"",
          Email:"",
          Company:"",
          description:"",
          titre:"",
          Phone_Number:""
      }
   }

  ngOnInit(): void {
    // ng on init 
    let userId = localStorage.getItem('userId')
    this.http.get(environment.connection+'api/users/'+userId).subscribe(
      (resultat : any) => {
       // console.log(resultat);
       // this.user.firstName = resultat.firstName;
        this.user.First_Name = resultat.FirstName
        this.user.Last_Name = resultat.LastName
        this.user.Email = resultat.Email
        this.user.Company = resultat.Company
        this.user.description = resultat.description
        this.user.titre = resultat.titre
        this.user.Phone_Number = resultat.Phone_Number


        console.log(this.user);
        
      },
      (error) => {
        console.log(error);
        
       //   consol.log(error);
          
      })
   

  }


  editProfil(formP){
    // alert('bonjour')
  // console.log(formP.form.value);
   let formValue :any
   formValue = formP.form.value
   formValue.idUser = localStorage.getItem('userId')
   console.log(formValue);
   
   return  this.http.post(environment.connection+'editProfil',formP.form.value).subscribe(
       (data : any) => {
    
                 
       },
       (error) => {
           alert(error.error)
             //  console.log(error);
               
       })
   
 }

}
