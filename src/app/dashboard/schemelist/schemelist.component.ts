import { Component, OnInit } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schemelist',
  templateUrl: './schemelist.component.html',
  styleUrls: ['./schemelist.component.css']
})
export class SchemelistComponent implements OnInit {

  public data: any = [];
  constructor(public firestore: Firestore,private router:Router) {
    this.getData()
  }
  ngOnInit(): void {
  }
  getData() {
    const dbInstance = collection(this.firestore, 'SchemeApplications');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }
  complaint(){
    this.router.navigate(["/complaintlist"]);
    
   
  }

}
