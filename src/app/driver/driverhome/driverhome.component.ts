import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/product.service";

@Component({
  selector: "app-driverhome",
  templateUrl: "./driverhome.component.html",
  styleUrls: ["./driverhome.component.scss"]
})
export class DriverhomeComponent implements OnInit {
  obj: any;
  name: any;

  constructor(private post: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.post.getCuser().subscribe(res => {
      // let demo = JSON.stringify(res);
      this.obj = res;
      this.name = this.obj.username;
    });
  }
  create_post() {
    this.router.navigate(["driver/createpost"]);
  }
  localnew() {
    this.router.navigate(["driver/localnews"]);
  }
  dashbord() {
    this.router.navigate(["driver/dashbord"]);
  }
  findStay() {
    this.router.navigate(["driver/findstay"]);
  }
}
