import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  constructor() {}

  // moveBox = (myCb) => {
  // const myBox = document.getElementById('box');
  // const myBoxPos = myBox.getBoundingClientRect();
  //   document.documentElement.style.setProperty('--towards-left', '200px');
  // document.documentElement.style.setProperty(
  //   '--towards-top',
  //   `${this.myBoxPos.y}`
  // );
  // document.documentElement.style.setProperty(
  //   '--towards-right',
  //   `${window.innerWidth - this.myBoxPos.right}`
  // );
  // document.documentElement.style.setProperty(
  //   '--towards-bottom',
  //   `${window.innerWidth - this.myBoxPos.bottom}`
  // );
  // };

  // boxDimensions() {
  //   var myBox = document.querySelector('.box-y');
  //   var myBoxPos = myBox.getBoundingClientRect();
  //   document.documentElement.style.setProperty(
  //     '--my-height',
  //     `${myBoxPos.height}px`
  //   );
  // }

  ngOnInit(): void {
    // this.boxDimensions();
    // const myBox = document.getElementById('box');
    // var myBox = document.querySelector('.box-y');
    // var myBoxPos = myBox.getBoundingClientRect();
    // var str = myBoxPos.height.toString() + 'px';
    // document.documentElement.style.setProperty('--my-height', str);
    // document.documentElement.style.setProperty('--my-height', '250px');
  }
}
