import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BenefeceurGuardService implements CanActivate{


  constructor(private router: Router) { }
  canActivate():boolean {
    
    if(this.getToken()!== null && localStorage.getItem('role') == 'beneficeur'){
        return true;
    }else if(this.getToken()!== null && localStorage.getItem('role') == 'benevole'){
      this.router.navigate(['/accueilbenevole']);

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
