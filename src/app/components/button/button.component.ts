import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() innerHtml;

  @Input() displayClass;
  @Input() buttonClass;
  @Input() columnClass;

  bgCol = '#f6f6f6';

  constructor() {}

  ngOnInit() {
  }



  // setStyle() {
  //   // let styles = {
  //   //   "--bg-col": "#f6f6f6",
  //   //   "--border-col": "#334252"
  //   // };
  //   return styles;
  // }
}
