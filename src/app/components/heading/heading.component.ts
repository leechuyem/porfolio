import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-heading",
  templateUrl: "./heading.component.html",
  styleUrls: ["./heading.component.scss"]
})
export class HeadingComponent implements OnInit {
  style = {
    bgCol: "",
    shCol: "",
    text: ""
  };

  styles = [
    {
      route: "/home",
      text: "LEE CHU YEM",
      bgCol: "#143D59",
      shCol: "#F4B41A"
    },
    {
      route: "/about",
      text: "WHO AM I?",
      bgCol: "#00539C",
      shCol: "#FF9552"
    },
    {
      route: "/projects",
      text: "PROJECTS",
      bgCol: "#283350",
      shCol: "#f93800"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        let url = this.router.url;
        this.style = this.styles[RouteUrl[url]];
      }
    });
  }
}

enum RouteUrl {
  "/home" = 0,
  "/about" = 1,
  "/projects" = 2
}
