import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  mailid;
  password;
  submit(){
  if(this.mailid == "khushboo@123" && this.password=="123abcd"){
    this.router.navigate(['/idea']);
  }
  }

}
