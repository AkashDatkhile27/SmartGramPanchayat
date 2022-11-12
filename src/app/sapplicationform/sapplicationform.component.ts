import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Schemedata } from '../schemedata';
import { SchemeApplications } from '../model/scheme-applications';
import { AuthService } from '../auth.service';
import{addDoc,Firestore,collection, doc,updateDoc,deleteDoc,getDoc, getDocs}from'@angular/fire/firestore';
@Component({
  selector: 'app-sapplicationform',
  templateUrl: './sapplicationform.component.html',
  styleUrls: ['./sapplicationform.component.css']
})
export class SapplicationformComponent implements OnInit {
  applicationlist:SchemeApplications[]=[];
  constructor( private router:Router,public firestore:Firestore) { }
  ngOnInit(): void {
  }

 
  scheme:any=[
    "MATCHING GRANTS TO PANCHAYATS",
    "HOUSING SCHEME: RAJIV AWAAS YOJANA 2008",
    "RURAL GARBAGE DISPOSAL SCHEME 2005",
    "GRANT-IN-AID",
    "GRANTS TO WEAKER SECTION FOR STRENGTHENING THEIR ADMINISTRATION",
    "Grants In Lieu of Octroi","Shelter Homes for Destitute Women, Teenage Mothers, Women who are victims of atrocities (Age Group of 16 to 60 years)",
    "SCHEME FOR GRANT OF LOAN TO WEAKER SECTION FOR CONSTRUCTION/IMPROMENT/REPAIR OF HOUSES",
    "LOANS TO VILLAGE PANCHAYATS UNDER REMUNERATIVE SCHEMES",
    "Shubh Mangal Samuhik Vivah Scheme",
    "DISASTER MANAGEMENT SCHEME AT PANCHAYAT LEVEL"
  ];
  
  submit(value:any){
    const dbInstance=collection(this.firestore,'SchemeApplications');
    addDoc(dbInstance,value)
    .then(() => {
      alert('Your Application Has succefully submited')
      this.router.navigate(['/Home']);
    })
    .catch((err) => {
      alert(err.message)
    })
  }
  
}
