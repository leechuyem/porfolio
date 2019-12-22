import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  btns = [
    {
      text: "ABOUT",
      link: "/about"
    },
    {
      text: "PROJECT",
      link: "/projects"
    }
  ];

  private currentOverButton: Element = null;

  constructor() {}

  ngOnInit() {}
}
