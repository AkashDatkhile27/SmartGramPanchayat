import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-srgister',
  templateUrl: './srgister.component.html',
  styleUrls: ['./srgister.component.css']
})
export class SRgisterComponent implements OnInit {

  constructor(private router:Router,private auth : AuthService) { }

  ngOnInit(): void {
  }
  email : string = '';
  password : string = '';
  cpassword : string = '';
  register() {
   
    if(this.email == '') {
      alert('Please enter email');
      return;
    }

    if(this.password == '') {
      alert('Please enter password');
      return;
    }
    if(this.password !=this.cpassword) {
      alert('Password did not match');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.email = '';
    this.password = '';
    this.cpassword = '';
    this.RegistrationSuccessful();

  }


  

  RegistrationSuccessful(){

    this.router.navigate(['/SLogin']);

  }
}
