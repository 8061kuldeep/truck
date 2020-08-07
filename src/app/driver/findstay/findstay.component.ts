import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-findstay",
  templateUrl: "./findstay.component.html",
  styleUrls: ["./findstay.component.scss"]
})
export class FindstayComponent implements OnInit {
  search: FormGroup;
  demo: any;
  text: string;
  list = [
    { name: "karan", city: "bhopal" },
    { name: "kiran", city: "bhuvneshwar" },
    { name: "kusum", city: "balakot" },
    { name: "ritesh", city: "bandra" },
    { name: "akash", city: "bhutan" },
    { name: "rupesh", city: "bangladesh" },
    { name: "ratnesh", city: "bankock" },
    { name: "shweta", city: "bandhavghar" }
  ];
  searchedCity: any;
  data: any;
  btn = "accept";

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.search = this.builder.group({
      city: ["", [Validators.required]]
    });
  }
  find() {
    this.btn = "request";
    console.log(this.search.value.city);
    let test = this.search.value.city;
    this.demo = this.list.filter(function(value) {
      return value.city == test;
    });
    if (this.demo.length == 0) {
      this.text = "no record found";
    } else {
      this.text = "";
    }
  }
  change() {
    this.btn = "requested";
  }
}
