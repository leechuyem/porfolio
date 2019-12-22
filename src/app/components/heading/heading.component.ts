import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  bgCol = "#143D59";
  shCol = "#F4B41A";
  text = "LEE CHU YEM";

  constructor() { }

  ngOnInit() {
  }

}
