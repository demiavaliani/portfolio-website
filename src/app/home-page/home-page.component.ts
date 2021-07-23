import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  // generates background noise using Canvas API
  createNoise = () => {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    const generateNoise = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const imgData = ctx.getImageData(
        0,
        0,
        canvas.width / 2,
        canvas.height / 2
      );
      const arr = imgData.data;

      for (let i = 0; i < arr.length; i += 4) {
        const randCol = Math.floor(Math.random() * 255);
        arr[i + 0] = randCol;
        arr[i + 1] = randCol;
        arr[i + 2] = randCol;
        arr[i + 3] = 55;
      }

      const width = imgData.width;
      const height = imgData.height;

      ctx.putImageData(imgData, 0, 0);
      ctx.drawImage(canvas, width, 0);
      ctx.drawImage(
        canvas,
        0,
        0,
        width * 2,
        height,
        0,
        height,
        width * 2,
        height
      );

      window.requestAnimationFrame(generateNoise);
    };
    generateNoise();
  };

  // typed.js - typing animation of "Hello" word in different languages
  typeHelloFunction = () => {
    const typeHello = new Typed('#helloLoopTyped', {
      strings: [
        'HELLO^600',
        'TERE^600',
        'SVEIKI^600',
        'HEI^600',
        'GAMARJOBA^600',
        'PRIVET^600',
        'BONJOUR^600',
        'HOLA^600',
        'CIAO^600',
        'KONNICHIWA^600',
        'GUTEN TAG^600',
        'DZIE\u0143 DOBRY^600',
        'N\u012C H\u0102O^600',
      ],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    });
  };

  ngOnInit(): void {
    this.typeHelloFunction();
    this.createNoise();
  }
}
