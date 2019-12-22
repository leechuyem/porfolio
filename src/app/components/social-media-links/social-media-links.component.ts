import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-social-media-links",
  templateUrl: "./social-media-links.component.html",
  styleUrls: ["./social-media-links.component.scss"]
})
export class SocialMediaLinksComponent implements OnInit {
  @Input() primaryColour;
  @Input() secondaryColour;

  icons = [
    { icon: "fa fa-envelope", link: "mailto:leechuyem@gmail.com" },
    { icon: "fab fa-twitter", link: "https://twitter.com/leechuyem" },
    { icon: "fab fa-github", link: "https://github.com/leechuyem" }
  ];

  constructor() {}

  ngOnInit() {}
}