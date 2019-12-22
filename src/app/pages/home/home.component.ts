import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  btn1Txt = "ABOUT";
  btn2Txt = "PROJECTS";

  private currentOverButton: Element = null;

  constructor() { }

  ngOnInit() {
  }
}
