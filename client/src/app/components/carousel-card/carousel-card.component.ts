import { Component, OnInit, Input } from '@angular/core';
import { ResourceData } from '../../data/resource-data';

@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent implements OnInit {
  category:string = "unknown";
	name:string;
	imageURL:string;
	id:string;
	url:string;

  @Input() resource:ResourceData;

  constructor() { }

  ngOnInit() {
    this.name = this.resource.name;
    this.url = this.resource.url;
    this.category = this.resource.category;
    this.imageURL = this.resource.imageURL;
    this.id = this.resource.id;
  }

}
