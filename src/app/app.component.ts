import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  title = 'portfolio-website';

  ngOnInit(): void {
    document.addEventListener('mousemove', (e) => {
      const myCursor = document.getElementById('cursor');
      myCursor.style.visibility = 'visible';
      const x = e.pageX;
      const y = e.pageY;

      myCursor.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
    });
  }
}
