import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BenevolGuardService implements CanActivate{


  constructor(private router: Router) { }
  canActivate():boolean {
    
    if(this.getToken()!== null && localStorage.getItem('role') == 'benevole'){
        return true;
    }else if(this.getToken()!== null && localStorage.getItem('role') == 'beneficeur'){
      this.router.navigate(['/accueilbeneficeur']);

    }else if(this.getToken()!== null && localStorage.getItem('role') == 'admin'){
      this.router.navigate(['/dashboard']);

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
