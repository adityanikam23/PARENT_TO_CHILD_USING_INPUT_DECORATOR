import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() information: any;

  // inputone:any;
  // inputtwo:any;
  // inputthree:any;
  // inputfour:any;

  // myobject:any = { one: "", two: "", three: "", four: "" };
  // // result:any = []

  // @Output() messagesent = new EventEmitter<any>();


  // clicktoremove() {
      
  //   this.myobject = {one : this.inputone, two : this.inputtwo, three : this.inputthree, four : this.inputfour};

  //   // this.result.push(this.myobject)

  //   this.messagesent.emit(this.myobject);

  //   this.myobject = { one: "", two: "", three: "", four:"" };


  //   // this.inputone = " ";
  //   // this.inputtwo = " ";
  //   // this.inputthree = " ";
  //   // this.inputfour = " ";
      
  // }


}
