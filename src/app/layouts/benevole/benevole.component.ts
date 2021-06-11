import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './benevole.component.html',
  styleUrls: ['./benevole.component.css']
})
export class BenevoleComponent implements OnInit {
  private _router: Subscription;

  constructor( private router: Router) { }


  ngOnInit(): void {
  }

}
