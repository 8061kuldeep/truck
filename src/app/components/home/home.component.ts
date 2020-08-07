import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/product.service";
import { CreatePostComponent } from "../../driver/create-post/create-post.component";
import { async } from "@angular/core/testing";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  fetching: any;
  btn = "request";
  obj: any;
  id: any;
  obj1: any;
  fdata: any;
  datatitle: any;
  ind: any;
  x: any;
  constructor(private post: ProductService) {}

  ngOnInit(): void {
    this.datatitle = this.post.getdatatitle();

    this.getformdata();
    this.getcuser();
    this.getPostList();

    console.log("after");
  }

  request(index) {
    this.x = index;
    let id = this.obj[index].id;
    let demo = this.fdata.find(function(value) {
      return value.id == id;
    });
    console.log(demo);

    this.ind = this.fdata.indexOf(demo);

    this.fdata[this.ind].request = [
      ...this.fdata[this.ind].request,
      {
        username: this.obj1.username,
        address: this.obj1.address,
        postindex: this.x
      }
    ];

    this.obj[index].status = false;
    this.post.savePost(this.obj).subscribe();
    this.post.saveformData(this.fdata).subscribe();
  }
  getPostList() {
    this.fetching = true;
    this.post.getPostList().subscribe(res => {
      this.obj = res;
      console.log(this.obj);
      this.fetching = false;
    });
  }
  getcuser() {
    this.post.getCuser().subscribe(
      res => {
        let demo1 = JSON.stringify(res);
        this.obj1 = JSON.parse(demo1);
      },
      err => console.log(err)
    );
  }
  getformdata() {
    this.post.getformData().subscribe(
      res => {
        let demo = JSON.stringify(res);
        this.fdata = JSON.parse(demo);
      },
      err => console.log(err)
    );
  }
}
