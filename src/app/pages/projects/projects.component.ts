import { Component, OnInit } from "@angular/core";
import Data from "../../../assets/projects.json";
import { Project } from "../../models/projects";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor() {}

  ngOnInit() {
    this.projects = Data as Project[];
  }
}
