import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

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

    this.modalEl.addEventListener(
      'shown.bs.modal',
      this.changeModalIcon,
      false
    );
    this.modalEl.addEventListener(
      'hidden.bs.modal',
      this.changeModalIcon,
      false
    );
  }
}
