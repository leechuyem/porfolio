import { Component, OnInit, Input } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { RouteUrl } from 'src/app/models/route-url.enum';
import { Styles } from '../../misc/const';

@Component({
  selector: "app-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.scss"]
})
export class HeadingComponent implements OnInit {
  @Input() text;
  @Input() primaryColour;
  @Input() secondaryColour;

  constructor() {}

  ngOnInit() {
  }
}
