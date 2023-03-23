import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  firstname: any;
  lastname: any;
  email: any;
  mobnumber: any;

  information = { first: "", last: "", email: "", number: "" };

  allrecords: any = [];

  // myobject: any;

  // receivedmessage(msg: any) {

  //   this.myobject = msg;
  // }


  clickmetosubmit() {

    this.information = { first: this.firstname, last: this.lastname, email: this.email, number: this.mobnumber };

    this.firstname = "";
    this.lastname = "";
    this.email = "";
    this.mobnumber = "";

    this.allrecords.push(this.information);

    localStorage.setItem("records", JSON.stringify(this.allrecords));



    // if (this.firstname == null) {
    //   alert("PLZ ENTER YOUR FIRST NAME");
    // }
    // else if (this.lastname == null) {
    //   alert("PLZ ENTER YOUR LAST NAME");
    // }
    // else if (this.email == null) {
    //   alert("PLZ ENTER YOUR EMAIL ADDRESS");
    // }
    // else if (this.mobnumber == null) {
    //   alert("PLZ ENTER YOUR MOBILE NUMBER");
    // }
    // else {
    //   alert("SUBMITTED SUCCESSFULLY");


    // }

  }
}
