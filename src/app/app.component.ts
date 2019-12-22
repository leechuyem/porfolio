import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { Title } from "@angular/platform-browser";

import { RouteUrl } from "src/app/models/route-url.enum";
import { Styles } from "../app/misc/const";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  currentPage = "";
  titles = ["Lee Chu Yem 🚀", "Lee Chu Yem | About", "Lee Chu Yem | Projects"];

  style = {
    primaryColour: "",
    secondaryColour: "",
    text: ""
  };

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;

        if (url != this.currentPage) {
          this.style = Styles[RouteUrl[url]];
          this.setTitle(this.titles[RouteUrl[url]]);
        }
      }
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
