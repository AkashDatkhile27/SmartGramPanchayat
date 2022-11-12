import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scheme',
  templateUrl: './scheme.component.html',
  styleUrls: ['./scheme.component.css']
})
export class SchemeComponent implements OnInit {

  constructor(private router: Router){

  }
//  Register(pageName:string):void{
//    this.router.navigate([`${pageName}`]);
//  }

  ngOnInit(): void {
    
  }
  
}
