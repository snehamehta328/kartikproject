import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.scss']
})
export class FirstpageComponent implements OnInit {



  constructor() { }

  prod = [
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    },
    {
      imageUrl: 'assets\\pillow.jpg'
    }
  ];

  ngOnInit(): void {
  }

}
