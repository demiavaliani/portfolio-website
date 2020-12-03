import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  currentCount = 0;

  counter() {
    this.currentCount++;
  }

  counterMinus() {
    this.currentCount--;
  }

  ngOnInit(): void {
    
  }

}
