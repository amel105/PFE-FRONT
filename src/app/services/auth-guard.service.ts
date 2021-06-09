import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{


  constructor(private router: Router) { }
  canActivate():boolean {
    
    if(this.getToken()!== null && localStorage.getItem('role') == 'admin'){
        
      return true;

    }else if(this.getToken()!== null && localStorage.getItem('role') == 'benevole'){
      this.router.navigate(['/donate/acceuil']
    );

    }else if(this.getToken()!== null && localStorage.getItem('role') == 'beneficeur'){
      this.router.navigate(['/reclam/accueilbenificeur']);

    }
    
    else{
      this.router.navigate(['/pages/login']);
    }
  }



  getToken() {
    if (localStorage.getItem('token') !== null){
      return  localStorage.getItem('token') ;
    }
    return null
  }

}
