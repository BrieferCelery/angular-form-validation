import { Component, OnInit } from "@angular/core";
import { Employee } from "../employee";

@Component({
  selector: "app-employee-form",
  templateUrl: "./employee-form.component.html",
  styleUrls: ["./employee-form.component.scss"]
})
export class EmployeeFormComponent {
  countries = ["Australia", "South Africa", "America", "Madagascar"];

  model = new Employee(
    18,
    "Fred",
    "ester",
    this.countries[0],
    "What rhymes with stair?"
  );

  submitted = false;

  constructor() {}

  onSubmit() {
    this.submitted = true;
  }

  newEmployee() {
    this.model = new Employee(42, "", "", "");
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}
