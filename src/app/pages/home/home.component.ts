import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  btns: String[] = ["ABOUT", "PROJECT"];

  private currentOverButton: Element = null;

  constructor() { }

  ngOnInit() {
  }
}
