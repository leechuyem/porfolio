import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { RouteUrl } from 'src/app/models/route-url.enum';
import { Styles } from '../app/misc/const';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  style = {
    primaryColour: "",
    secondaryColour: "",
    text: ""
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;
        this.style = Styles[RouteUrl[url]];
      }
    });
  }
}
