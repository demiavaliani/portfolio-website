import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) {
    router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
          this.modal.hide();
        }
      });
  }

  modalEl;
  modal;
  modalIsHidden = true;

  // toggles the modal on button click
  closeModal = () => {
    this.modal.toggle();
  };

  // sets modalIsHidden to true or false based on _isShown property.
  // *ngIf from HTML later chooses the correct icon based on this variable
  changeModalIcon = (ev) => {
    if (this.modal._isShown) {
      this.modalIsHidden = false;
    } else {
      this.modalIsHidden = true;
    }
  };

  ngOnInit(): void {
    this.modalEl = document.querySelector('.modal');
    this.modal = new bootstrap.Modal(this.modalEl);

    this.modalEl.addEventListener('shown.bs.modal', this.changeModalIcon);
    this.modalEl.addEventListener('hidden.bs.modal', this.changeModalIcon);
  }
}
