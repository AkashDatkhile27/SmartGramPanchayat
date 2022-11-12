import { Component, OnInit } from '@angular/core';
import { Complaintdata } from '../complaintdata';
import { FormsModule,NgForm } from '@angular/forms';
import{addDoc,Firestore,collection, doc,updateDoc,deleteDoc,getDoc, getDocs}from'@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-complaintbox',
  templateUrl: './complaintbox.component.html',
  styleUrls: ['./complaintbox.component.css']
})
export class ComplaintboxComponent implements OnInit {

  constructor( private router:Router,public firestore:Firestore) { }

  ngOnInit(): void {
  }
  submit(value:any){
    const dbInstance=collection(this.firestore,'Complaints');
    addDoc(dbInstance,value)
    .then(() => {
      alert('Your Complaint Has succefully submited')
      this.router.navigate(['/Home']);
    })
    .catch((err) => {
      alert(err.message)
    })
  }
//     if(this.userdata.date==""){
//       alert("Please Enter Date  Complaint ")
//     }else
//     if(this.userdata.name==""){
//       alert("Please Enter Your Full Name ")
//     }else
//     if(this.userdata.phone==""){
//       alert("Please Enter Your  Phone ")
//     }else
//     if(this.userdata.email==""){
//       alert("Please Enter Your Email ")
//     }else
//     if(this.userdata.address==""){
//       alert("Please Enter Your Address ")
//     }else
//     if(this.userdata.location==""){
//       alert("Please Enter Your Location ")
//     }else
//     if(this.userdata.complaintdetails==""){
//       alert("Please Enter Complaint Details  ")
//     }else
//     if(this.userdata.Outcome==""){
//       alert("Please Enter Desired Outcome ")
//     }
//     else{
//       alert("You have Successfully Submited Your Complaint")
//       this.home();
      
//     console.log(this.userdata)
//     }
//   }

//  getData() {
//   const dbInstance = collection(this.firestore, 'users');
//   getDocs(dbInstance)
//     .then((response) => {
//       this.data = [...response.docs.map((item) => {
//         return { ...item.data(), id: item.id }
//       })]
//     })
// }

// updateData(id: string) {
//   const dataToUpdate = doc(this.firestore, 'users', id);
//   updateDoc(dataToUpdate, {
//     name: 'Nishant',
//     email: 'Nishant123@gmail.com'
//   })
//     .then(() => {
//       alert('Data updated');
//       this.getData()
//     })
//     .catch((err) => {
//       alert(err.message)
//     })
// }

// deleteData(id: string) {
//   const dataToDelete = doc(this.firestore, 'users', id);
//   deleteDoc(dataToDelete)
//   .then(() => {
//     alert('Data Deleted');
//     this.getData()
//   })
//   .catch((err) => {
//     alert(err.message)
//   })
// }
// home(){
//   this.router.navigate(['/Home']);
// }
}
// addData(value:any){
//   const dbInstance=collection(this.firestore,'Complaints');
//   addDoc(dbInstance,value)
//   .then(() => {
//     alert('Data Sent')
//   })
//   .catch((err) => {
//     alert(err.message)
//   })
// }

