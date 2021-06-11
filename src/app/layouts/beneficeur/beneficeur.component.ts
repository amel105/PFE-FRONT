import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-beneficeur',
  templateUrl: './beneficeur.component.html',
  styleUrls: ['./beneficeur.component.css']
})
export class BeneficeurComponent implements OnInit {
  private _router: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
