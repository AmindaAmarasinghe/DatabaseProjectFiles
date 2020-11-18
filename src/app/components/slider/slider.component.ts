import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  providers:[
    {
      provide: CarouselConfig,
      useValue:{
        interval:8000, noPause:true,showIndicators: true
      }
    }
  ],
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  Slides:any;
  constructor() { 
  this.Slides={
    Slideimages:[
    'assets/img/6.jpg',
    'assets/img/7.jpg',
    'assets/img/11.jpg',
    'assets/img/10.jpg'
    ]
  };
    
  
   console.log(this.Slides[0]); 
  }
  ngOnInit(): void {
  }

}
