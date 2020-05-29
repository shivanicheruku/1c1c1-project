import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit() {
  }
  navigate1(){
    this.router.navigate(['view-accounts']);
  }
  navigate2(){
    this.router.navigate(['view-balance']);
  }
  navigate3(){
    this.router.navigate(['view-statements']);
  }

}
