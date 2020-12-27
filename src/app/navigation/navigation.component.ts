import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  // changes navbar color on navbar icon click
  changeNavbarColor = () => {
    const navBar = document.querySelector('.navbar-custom');
    const targetNode = document.getElementById('navBarBtn');

    const config = {
      attributeOldValue: true,
      attributeFilter: ['class'],
    };

    const callback = (mutationList) => {
      for (const mutation in mutationList) {
        if (mutationList[mutation].oldValue.includes('collapsed')) {
          navBar.setAttribute('style', 'background-color: red;');
        } else if (!mutationList[mutation].oldValue.includes('collapsed')) {
          navBar.setAttribute('style', 'background-color: transparent;');
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  };

  ngOnInit(): void {
    this.changeNavbarColor();
  }
}
