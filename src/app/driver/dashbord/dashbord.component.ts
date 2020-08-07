import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "src/app/product.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashbord",
  templateUrl: "./dashbord.component.html",
  styleUrls: ["./dashbord.component.scss"]
})
export class DashbordComponent implements OnInit {
  btn = "accept";
  obj: any;
  cuser: any;
  requestlist: any;
  postList: any;
  mindex: any;
  fixedRides: any[] = [];
  ind: any;
  mid: any;
  demo: any;
  fetching: boolean;
  constructor(
    private http: HttpClient,
    private post: ProductService,
    private router: Router
  ) {
    console.log(this.cuser);
  }

  ngOnInit(): void {
    this.getcuser();
    // this.getdata();
    this.post.getPostList().subscribe(res => {
      this.postList = res;
    });
  }

  accept(index) {
    if (confirm("are you sure") && index != 0) {
      this.fixedRides = [
        ...this.fixedRides,
        {
          username: this.requestlist[index].username,
          address: this.requestlist[index].address
        }
      ];
      this.mid = this.requestlist[index].postindex;
      console.log(this.mid);

      console.log(this.obj[this.mindex].request);

      this.post.saveformData(this.obj).subscribe();
      this.postList.splice(this.mid, 1);
      this.post.savePost(this.postList).subscribe();

      // this.obj[this.mindex].request.splice(index, 1);
      // this.post.saveformData(this.obj).subscribe();
      this.requestlist.splice(index, 1);
    }
  }

  getdata() {
    this.fetching = true;
    let index = this.ind;
    this.post.getformData().subscribe(res => {
      this.obj = res;
      let demo = this.obj.find(function(value) {
        return value.id == index;
      });
      this.mindex = this.obj.indexOf(demo);
      console.log(this.mindex);
      this.requestlist = this.obj[this.mindex].request;

      this.fetching = false;
    });
  }
  getcuser() {
    this.post.getCuser().subscribe(
      res => {
        this.cuser = res;
        console.log(this.cuser);
        this.ind = this.cuser.id;
        this.getdata();
        console.log("after");
      },
      err => console.log(err)
    );
  }
}
