import { Component, OnInit } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaintlist',
  templateUrl: './complaintlist.component.html',
  styleUrls: ['./complaintlist.component.css']
})
export class ComplaintlistComponent implements OnInit {

  public data: any = []
  constructor(public firestore: Firestore, private router:Router) {
    this.getData()
  }
  ngOnInit(): void {
  }
  getData() {
    const dbInstance = collection(this.firestore, 'Complaints');
    getDocs(dbInstance)
      .then((response) => {
        this.data = [...response.docs.map((item) => {
          return { ...item.data(), id: item.id }
        })]
      })
  }
  scheme(){
    this.router.navigate(['/schemelist']);
  }
}
