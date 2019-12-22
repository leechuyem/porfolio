import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() innerHtml;
  @Input() l1BgCol;
  @Input() l1BorCol;
  @Input() l1TxtCol;
  @Input() l2TxtCol;
  @Input() l3BgCol;
  @Input() l3BorCol;

  @Input() buttonClass;

  constructor() {}

  ngOnInit() {
  }
}
