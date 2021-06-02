import { AfterViewInit, Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import PerfectScrollbar from 'perfect-scrollbar';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-gestioncompte',
  templateUrl: './gestioncompte.component.html',

})
export class GestioncompteComponent implements OnInit {
  test: Date = new Date();
  succes = false
  error = false
  message = ""
  users :any[]
  constructor(
    private http: HttpClient
    ) { 
      this.http.get(environment.connection+'getusers').subscribe(
        

          (data : any) => {
              console.log(data);
              this.users = data
                    
          },
          (error) => {
         
          })
        
      
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
