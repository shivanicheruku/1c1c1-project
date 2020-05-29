import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewaccounts',
  templateUrl: './viewaccounts.component.html',
  styleUrls: ['./viewaccounts.component.css']
})
export class ViewaccountsComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit() {
  }
addc(){
  this.router.navigate(['view-balance']);
}
}
