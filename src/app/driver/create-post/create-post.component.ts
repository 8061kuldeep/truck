import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ProductService } from "src/app/product.service";
import { async } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"]
})
export class CreatePostComponent implements OnInit {
  post: FormGroup;
  postList: any[];
  storage: any;
  obj: any;

  constructor(
    private http: HttpClient,
    private products: ProductService,
    private router: Router,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.products.getCuser().subscribe(
      res => {
        console.log(res);
        let demo = JSON.stringify(res);
        this.obj = JSON.parse(demo);
        console.log(this.obj.address);
      },
      err => console.log(err)
    );
    this.postList = [];
    this.products.getPostList().subscribe(
      res => {
        if (res) {
          let demo1 = JSON.stringify(res);

          this.postList = JSON.parse(demo1);
          console.log(this.postList);
        }
      },
      err => console.log(err)
    );

    this.post = this.builder.group({
      from: ["", [Validators.required]],
      to: ["", [Validators.required]],
      date: ["", [Validators.required]],
      arrival: ["", [Validators.required]],
      departure: ["", [Validators.required]]
    });
  }

  create() {
    if (this.postList == null) {
      this.postList = [];
    }
    console.log("after");
    this.postList = [
      ...this.postList,
      {
        id: this.obj.id,
        username: this.obj.username,
        address: this.obj.address,
        from: this.post.value.from,
        to: this.post.value.to,
        date: this.post.value.date,
        arrival: this.post.value.arrival,
        departure: this.post.value.departure,
        status: true
      }
    ];
    this.savePost();
    this.router.navigate(["home"]);
  }
  savePost() {
    this.products.savePost(this.postList).subscribe();
  }
}
